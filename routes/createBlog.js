import express from 'express'

import Blog from '../mongodb/models/blog.js'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    //create blog
    const {author, topic, title, content, image} = req.body;
    const blog = new Blog({
      author,
      topic,
      title,
      content,
      image
    })
    await blog.save()
    res.status(201).json(blog)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
})

export default router;