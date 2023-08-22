import express from 'express'

import Blog from '../mongodb/models/blog.js'

const router = express.Router()

router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted Successfully"});

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the blog' });
  }
})

export default router;