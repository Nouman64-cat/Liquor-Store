import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer'; // Import multer for handling file uploads

import connectDB from './mongodb/connect.js';

import addProducts from './routes/addProducts.js';

import Product from './mongodb/models/product.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: '10mb' }));

// Configure multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use('/api/addProducts', addProducts);

// Add the uploadImage API route
app.post('/api/uploadImage', (req, res) => {
  try {
    const { image } = req.body; // Assuming the base64-encoded image data is sent in the request body

    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }

    // You can now save the `image` data to your database or cloud storage
    // For example, using mongoose:
    // const newImage = new Image({ imageData: image });
    // await newImage.save();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'An error occurred while uploading the image' });
  }
});


app.get('/', (req, res) => {
  res.send("This is index.js from backend");
});

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
