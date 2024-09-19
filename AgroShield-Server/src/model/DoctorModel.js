import mongoose from 'mongoose';

// Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: false
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
  type: {
    type: Number,
    required: true
  }
});

// Doctor Model
const Doctor = mongoose.model('Doctor', doctorSchema);

// amalgation: 
// doctor has name, specialization, contact, location, email, password, googleId, type

export default Doctor;