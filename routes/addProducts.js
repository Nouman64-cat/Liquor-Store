import express from 'express';
import Product from '../mongodb/models/product.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Add product route');
});

router.post('/', async (req, res) => {
  try {
    const { name, description, imageUrl, inStock } = req.body;

    // Create a new product instance using the Product schema
    const newProduct = new Product({
      name,
      description,
      imageUrl,
      inStock,
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();
    // console.log('Received data:', req.body);

    res.status(201).json(savedProduct); // Respond with the saved product
  } catch (error) {
    // console.error('Error adding product:', error);
    res.status(500).json({ error: 'An error occurred while adding the product' });
  }
});

export default router;
