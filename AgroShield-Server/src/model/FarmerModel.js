import mongoose from 'mongoose';

// Farmer Schema
const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  farmLocation: {
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
  crops: {
    type: Array,
    required: true
  },
  animal: {
    type: Array,
    required: true
  },
  Description:{
    type: String,
    required: false
  }
});

// Farmer Model
const Farmer = mongoose.model('Farmer', farmerSchema);

// amalgation:
// farmer has name, farmLocation, contact, email, password, googleId, crops, animal

export default Farmer;