import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import contactRoutes from './routes/contact.route.js';
import enquiryRoutes from './routes/enquiry.route.js';
import careerRoutes from './routes/career.route.js';


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch((err) => {
    console.log(err);
  });


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());


app.listen(process.env.PORT, () => {
  console.log('Server listening on port 3000!');
});

app.use('/api', contactRoutes);
app.use('/api', enquiryRoutes);
app.use('/api', careerRoutes); 