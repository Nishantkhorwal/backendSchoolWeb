import Contact from '../models/contact.model.js';

// Controller function to handle POST requests to save form data
const createContact = async (req, res) => {
    // Extract form data from request body
    const { first_name, last_name, email, phone_number, message } = req.body;

    try {
        // Create a new Contact document
        const newContact = new Contact({ first_name, last_name, email, phone_number, message });

        // Save the new Contact document to MongoDB
        await newContact.save();

        // Respond with success message
        res.status(201).json({ success: true, message: 'Contact information saved successfully' });
    } catch (error) {
        // Handle errors
       console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default createContact;

