// Product.js

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  inStock: Boolean,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
