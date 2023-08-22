import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
  author: String,
  topic: String,
  title: String,
  content: String,
  image: String,
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;