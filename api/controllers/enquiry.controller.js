import Enquiry from '../models/enquiry.model.js';

// Controller function to handle POST requests to save form data
const createEnquiry = async (req, res) => {
    // Extract form data from request body
    const { name,  email2, mobile, message2 } = req.body;

    try {
        // Create a new Contact document
        const newEnquiry = new Enquiry({  name,  email2, mobile, message2 });

        // Save the new Contact document to MongoDB
        await newEnquiry.save();

        // Respond with success message
        res.status(201).json({ success: true, message: 'Enquiry saved successfully' });
    } catch (error) {
        // Handle errors
       console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default createEnquiry;