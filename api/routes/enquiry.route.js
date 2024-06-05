import express from 'express';
import createEnquiry from '../controllers/enquiry.controller.js';

const router = express.Router();

router.post('/enquiry', createEnquiry);


export default router;