import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import BlogModal from '../components/BlogModal'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [selectedBlog, setSelectedBlog] = useState(null); // Add this state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  useEffect(() => {
    fetchBlogs()
  },[])

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/readBlog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }

      })
      if (response.ok) {
        console.log("blogs fetched", response)
        const data = await response.json()
        console.log("data", data)
        setBlogs(data)
      }
    } catch (error) {
      console.log("error", error)
    }
  }
  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSnackbarOpen = () => {
  setIsSnackbarOpen(true);
};

const handleSnackbarClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setIsSnackbarOpen(false);
};

  const handleShareClick = (blogId) => {
  const blogUrl = `http://localhost:8080/read-blog/${blogId}`; // Replace with your actual domain and route
  navigator.clipboard.writeText(blogUrl)
    .then(() => {
      console.log('Link copied to clipboard:', blogUrl);
      handleSnackbarOpen();
      // Optionally, you can show a toast or notification indicating successful copying
    })
    .catch((error) => {
      console.error('Error copying link:', error);
      // Optionally, you can show an error message to the user
    });
};
  return (
    <>
    <Navbar />
    <div className='grid grid-cols-3 gap-10 px-10 mt-10'>
      <Typography gutterBottom variant="h1" className="text-[#2F2F2F]">
            Blogs
          <Typography gutterBottom variant="h6" component="div" className="text-[#656565]">
            Read the latest blogs from our community
          </Typography>
      </Typography>
      {blogs.map((blog, index) => (
      
      <Card key={index} sx={{ maxWidth: 345 }} className="shadow-lg">
      <CardActionArea onClick={() => handleOpenModal(blog)}>
        <CardMedia
          component="img"
          height="100"
          image={blog.image}
          alt="green iguana"
        />
        <CardContent>
          <p className="flex justify-start text-[#656565] text-[0.7rem] right-0 bottom-0 pt-5 ">Author: {blog.author}</p>
          <Typography gutterBottom variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className=' overflow-hidden'style={{ WebkitLineClamp: 3, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
            {blog.content}
          </Typography>
          <p className="flex justify-end text-[#656565] text-[0.7rem] right-0 bottom-0 pt-5 ">Published: {new Date(blog.date).toLocaleDateString()}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined" onClick={() => handleShareClick(blog._id)}>
          Share
        </Button>
        <Snackbar open={isSnackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
    <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
      Link copied to clipboard!
    </MuiAlert>
  </Snackbar>
      </CardActions>
      </Card>
      ))}
      {isModalOpen && (
        <BlogModal blog={selectedBlog} onClose={handleCloseModal} />
      )}
    </div>
    <Footer />
    </>
  )
}

export default Blog