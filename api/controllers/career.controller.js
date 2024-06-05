import Resume from '../models/career.model.js';
import multer from 'multer'; // Ensure multer is imported
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/resumes'); // Directory where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

const submitResume = async (req, res) => {
    try {
        upload.single('resume')(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ message: 'File upload failed', error: err.message });
            } else if (err) {
                return res.status(500).json({ message: 'Internal server error', error: err.message });
            }

            const { client_name, client_email, client_number, address } = req.body;

            if (!req.file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }

            const newResume = new Resume({
                client_name,
                client_email,
                client_number,
                address,
                resume: req.file.filename // Save the filename in the database
            });

            const savedResume = await newResume.save();

            res.status(201).json({ message: 'Resume submitted successfully', data: savedResume });
        });
    } catch (error) {
        console.error('Error submitting resume:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export default { submitResume };



