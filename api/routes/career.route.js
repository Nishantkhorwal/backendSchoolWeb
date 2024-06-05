import express from 'express';
import multer from 'multer';
import resumeController from '../controllers/career.controller.js';

const router = express.Router();
const upload = multer();

// POST route to handle resume submissions
router.post('/career', upload.single('resume'), resumeController.submitResume);

export default router;
