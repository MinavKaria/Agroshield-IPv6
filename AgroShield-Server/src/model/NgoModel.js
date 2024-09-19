import mongoose from "mongoose";

// Ngo Schema

const ngoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: false
    },
    coordinator: {
        type: String,
        required: true
    },
});

// Amalgation:
// ngo has name, location, contact, email, password, googleId, coordinator

const Ngo = mongoose.model('Ngo', ngoSchema);

export default Ngo;