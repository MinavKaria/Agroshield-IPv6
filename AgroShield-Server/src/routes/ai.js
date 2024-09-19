import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const fileManager = new GoogleAIFileManager(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function generateContent(prompt) {
    return model.generateContent(prompt);
}

router.get("/", (req, res) => {
    res.send("AI route");
});

router.post("/generate", async (req, res) => {
    const { prompt } = req.body;

    try {
        const result = await generateContent(prompt);
        res.status(200).send(result.response.text());
    } catch (err) {
        res.status(500).send({ error: "Internal server error" });
    }
});

router.post("/ask-image", async (req, res) => {
    const { prompt } = req.body;
    console.log(process.env.API_KEY);
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }
    try {
        let image = req.files.image;
        // upload to local storage for temp
        const tempPath = `./uploads/${image.name}`;

        // save the image to the temp path
        await image.mv(tempPath);
        const uploadResult = await fileManager.uploadFile(tempPath, {
            mimeType: image.mimetype,
            displayName: image.name,
        });
        const result = await model.generateContent([
            prompt,
            {
                fileData: {
                    fileUri: uploadResult.file.uri,
                    mimeType: uploadResult.file.mimeType,
                },
            },
        ]);
        res.status(200).send(result.response.text());
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: "Internal server error" });
    }
});
router.post("/ai-chat", async (req, res) => {
    const { prompt } = req.body;
    const apiKey = process.env.API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    async function uploadToGemini(path, mimeType) {
        const uploadResult = await fileManager.uploadFile(path, {
            mimeType,
            displayName: path,
        });
        const file = uploadResult.file;
        console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
        return file;
    }

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    });

    const generationConfig = {
        temperature: 1.05,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
    };

    async function runner() {
        const files = [];
        try {
            let image = req.files.image;
            // upload to local storage for temp
            const filehash = `${Date.now()}-${Math.random()
                .toString(36)
                .substring(2, 15)}`;
            const tempPath = `./uploads/${filehash}-${image.name}`;

            // save the image to the temp path
            await image.mv(tempPath);
            const file = await uploadToGemini(tempPath, image.mimetype);
            files.push(file);
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: "Internal server error" });
        }

        const chatSession = model.startChat({
            generationConfig,
            history: [
                {
                    role: "user",
                    parts: [
                        {
                            fileData: {
                                fileUri: files[0].uri,
                                mimeType: files[0].mimeType,
                            },
                        },
                        {
                            text: "This is the image of my plant or crop with the disease",
                        }, 
                    ],
                },
                {
                    role: "system",
                    parts: [
                        {
                            text: "I have diagnosed the disease, it is "
                        },
                    ],
                },
            ],
        });
        }
    
});
export default router;
