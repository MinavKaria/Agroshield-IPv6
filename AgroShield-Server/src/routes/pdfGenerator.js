import express from 'express';
import PDFDocument from 'pdfkit';
import Report from '../model/ReportModel.js';
import multer from 'multer';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// POST /generate-pdf
router.post('/generate-pdf', async (req, res) => {
    const { content, date, location } = req.body;
    const farmerEmail = req.user.email; // Assuming req.user.email contains the logged-in farmer's email

    if (!content) {
        return res.status(400).send({ error: 'Content is required' });
    }

    try {
        // Create a new PDF document
        const doc = new PDFDocument();
        let buffers = [];

        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', async () => {
            try {
                const pdfData = Buffer.concat(buffers);

                // Save PDF data to the database
                const report = new Report({
                    content,
                    date,
                    location,
                    email: farmerEmail, // Use email instead of ID
                    pdfData
                });

                await report.save();

                res.status(200).send({ message: 'PDF generated and saved successfully' });
            } catch (err) {
                console.error('Error saving PDF to database:', err);
                res.status(500).send({ error: 'Internal server error' });
            }
        });

        doc.text(content);
        doc.end();
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send({ error: 'Internal server error' });
    }
});

// GET /reports
router.get('/reports', async (req, res) => {
    const farmerEmail = req.user.email; // Assuming req.user.email contains the logged-in farmer's email

    try {
        const reports = await Report.find({ email: farmerEmail });
        res.status(200).json(reports);
    } catch (err) {
        console.error('Error fetching reports:', err);
        res.status(500).send({ error: 'Internal server error' });
    }
});

// GET /reports/:id/download
router.get('/reports/:id/download', async (req, res) => {
    const { id } = req.params;
    const farmerEmail = req.user.email; // Assuming req.user.email contains the logged-in farmer's email

    try {
        const report = await Report.findOne({ _id: id, email: farmerEmail });
        if (!report) {
            return res.status(404).send({ error: 'Report not found' });
        }

        res.setHeader('Content-Disposition', `attachment; filename=report-${id}.pdf`);
        res.setHeader('Content-Type', 'application/pdf');
        res.send(report.pdfData);
    } catch (err) {
        console.error('Error downloading report:', err);
        res.status(500).send({ error: 'Internal server error' });
    }
});

// POST /pdf
router.post("/pdf", upload.single('pdf'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }

        console.log("File details:", req.file);

        if (req.file.mimetype !== 'application/pdf') {
            return res.status(400).send("Uploaded file is not a PDF");
        }

        const stats = await fs.promises.stat(req.file.path);
        console.log("File size:", stats.size, "bytes");

        if (stats.size === 0) {
            return res.status(400).send("Uploaded file is empty");
        }

        const fileName = `${uuidv4()}.pdf`;

        console.log("Attempting to upload to Firebase Storage...");

        const storageRef = ref(storage, `pdfs/${fileName}`);

        const fileBuffer = await fs.promises.readFile(req.file.path);
        const snapshot = await uploadBytes(storageRef, fileBuffer, {
            contentType: 'application/pdf'
        });

        console.log('Uploaded a blob or file!');

        const downloadURL = await getDownloadURL(snapshot.ref);

        console.log("Firebase Storage upload successful");
        res.json({ message: "PDF received and uploaded to Firebase Storage", pdfUrl: downloadURL });

    } catch (error) {
        console.error("Error in /pdf route:", error);
        res.status(500).send("Error processing or uploading file");
    } finally {
        if (req.file) {
            fs.unlink(req.file.path, (err) => {
                if (err) console.error("Error deleting file:", err);
            });
        }
    }
});

export default router;