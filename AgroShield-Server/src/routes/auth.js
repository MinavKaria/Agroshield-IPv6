import express from "express";
import bcrypt from "bcrypt";
import Doctor from "../model/DoctorModel.js";
import Farmer from "../model/FarmerModel.js";
import Feedback from "../model/FeedbackModel.js";
import Ngo from "../model/NgoModel.js";

const router = express.Router();

// GET /auth
router.get('/', (req, res) => {
    res.send('Authentication route');
});

// POST /auth/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const farmer = await Farmer.findOne({ email });
        if (!farmer) {
            return res.status(404).send({ error: 'Farmer not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, farmer.password);
        if (!isPasswordValid) {
            return res.status(401).send({ error: 'Invalid credentials' });
        }

        res.status(200).send({ message: 'Login successful' });
    } catch (err) {
        res.status(500).send({ error: 'Internal server error' });
    }
});

// POST /auth/signup
router.post('/signup', async (req, res) => {
    const { name, farmLocation, contact, email, password, crops, animal } = req.body;

    // Data validation
    if (!name || !farmLocation || !contact || !email || !password) {
        return res.status(403).send({ error: "All fields are required" });
    }

    // Check if farmer exists
    const existingFarmer = await Farmer.findOne({ email });
    if (existingFarmer) {
        return res.status(403).send({ error: "Farmer already exists" });
    }

    if (name.length < 3) {
        return res.status(403).send({ error: "Name must be at least 3 characters" });
    }

    if (password.length < 6) {
        return res.status(403).send({ error: "Password must be at least 6 characters" });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(403).send({ error: "Invalid email format" });
    }

    try {
        // Generate salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);

        const farmer = new Farmer({
            name,
            farmLocation,
            contact,
            email,
            password: hashedPassword,
            crops,
            animal
        });

        await farmer.save();
        res.status(200).send({ message: "Farmer registered successfully" });
    } catch (err) {
        console.log(err);
        res.status(403).send({ error: "Unable to register farmer" });
    }
});

router.get('/profile/:id', async (req, res) => {
    try {
        const userId = req.params.id; // Use the ID from the URL parameter

        const farmer = await Farmer.findById(userId);
        if (!farmer) {
            return res.status(404).send({ error: 'Farmer not found' });
        }

        res.status(200).send(farmer);
    } catch (err) {
        res.status(500).send({ error: 'Internal server error' });
    }
});

router.post('/feedback', async (req, res) => {
    const { name, email, feedback } = req.body;

    if (!name || !email || !feedback) {
        return res.status(400).send({ error: 'All fields are required' });
    }

    try {
        const mess = new Feedback({
            name,
            email,
            feedback
        });

        await mess.save();
        res.status(200).send({ message: 'Feedback sent successfully' });
    } catch (err) {
        console.error('Error saving feedback:', err);
        res.status(500).send({ error: 'Internal server error' });
    }
});
export default router;