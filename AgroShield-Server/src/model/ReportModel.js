import mongoose from "mongoose";

// Report Schema
const reportSchema = new mongoose.Schema({
    content: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    pdfData: {
        type: Buffer,
        required: true
    }
});

export default mongoose.model('Report', reportSchema);