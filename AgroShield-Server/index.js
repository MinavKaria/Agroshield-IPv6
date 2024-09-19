import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './src/db.js';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import pdfGenerator from './src/routes/pdfGenerator.js';
import doctor from './src/routes/doctor.js';

import auth from './src/routes/auth.js';
import ai from './src/routes/ai.js';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to AgroShield API');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(fileUpload());

app.use('/auth', auth);
app.use('/ai', ai);
app.use('/api', pdfGenerator);
app.use('/api', doctor);

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});