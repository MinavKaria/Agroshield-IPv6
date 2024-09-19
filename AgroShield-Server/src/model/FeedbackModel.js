import mongoose from "mongoose";

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
});

export default mongoose.model('Feedback', feedbackSchema);