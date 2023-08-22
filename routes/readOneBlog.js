import express from 'express';

import Blog from '../mongodb/models/blog.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
