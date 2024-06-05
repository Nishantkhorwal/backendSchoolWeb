import mongoose from 'mongoose';

const { Schema } = mongoose;

const enquirySchema = new Schema({
    name: {
    type: String,
    required: true,
    trim: true,
  },
  email2: {
    type: String,
    required: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address.'],
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number.'],
  },
  message2: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;