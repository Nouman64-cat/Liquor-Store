import express from 'express'

import Product from '../mongodb/models/product.js'

const router = express.Router()

router.get("/", async (req, res) => {
  res.send("Delete route")
})

router.delete('/:id', async (req, res) => {
  try {
    //delete specific product
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the product' });
  }
});

export default router;