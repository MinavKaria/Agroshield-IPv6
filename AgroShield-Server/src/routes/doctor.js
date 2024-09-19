import express from 'express';
import Report from '../model/ReportModel.js';
const router = express.Router();

// GET route to send data
router.get('/alert', (req, res) => {
    // Hardcoded values
    const location = 'New York';
    const severity = '3';
    const assignee = 'Dr. Smith';
    const name = 'John Doe';
    const reason = 'Routine Checkup';

    // Example response
    const response = {
            location,
            severity,
            assignee,
            name,
            reason
    };

    res.json(response);
});

router.get('/analysis',async (req,res) =>{
    try{
        const analysis = await Report.find();
        res.status(200).json(analysis);
    }catch(err){
        console.error('Error fetching analysis:', err);
        res.status(500).send({ error: 'Internal server error' });
    }   
})

export default router;