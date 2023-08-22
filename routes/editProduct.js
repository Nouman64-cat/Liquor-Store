import express from 'express';
import Product from '../mongodb/models/product.js';

const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const productId = req.params.id; // Get the product ID from the URL parameter
    const updateData = req.body; // Get the updated data from the request body

    // Update the specific product with the given ID
    const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, { new: true });

    if (updatedProduct) {
      res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the product' });
  }
});

export default router;
