import express from 'express';
import Product from '../mongodb/models/product.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();

    res.status(200).json(products); // Respond with the fetched products
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'An error occurred while fetching products' });
  }
});

export default router;
