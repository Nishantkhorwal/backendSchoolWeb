import mongoose from 'mongoose';

// Define the schema for the Resume model
const resumeSchema = new mongoose.Schema({
    client_name: {
        type: String,
        required: true
    },
    client_email: {
        type: String,
        required: true
    },
    client_number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    resume: {
        type: Buffer, // Store file as binary data
        required: true
    }
}, {
    timestamps: true // Add createdAt and updatedAt fields
});

// Create the Resume model from the schema
const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;

