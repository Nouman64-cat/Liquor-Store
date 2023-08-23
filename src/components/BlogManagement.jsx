import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit, AiFillRead, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { Button, CircularProgress, Modal } from '@mui/material';
import './Blog.css'
import BlogModal from './BlogModal'
const BlogManagement = () => {
  const [blogs, setBlogs] = useState([])
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
   const [loading, setLoading] = useState(false); // Add loading state
  const [isSuccess, setIsSuccess] = useState(false); // Add isSuccess state
  const [isLoading, setIsLoading] = useState(true);
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
    } finally {
      setIsLoading(false)
    }
  }
  const handleOpenModal = () => {
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};
  const handleDelete = async (id) => {
    setLoading(true); // Start loading indicator
    try{
      const response = await fetch(`http://localhost:8080/api/deleteBlog/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      if(response.ok){
        console.log("blog deleted", response)
        fetchBlogs()
        setModalContent('Blog Deleted Successfully!');
          handleOpenModal();
          setIsSuccess(true);
      } else {
      setModalContent('Failed to Delete Blog. Please try again.');
      handleOpenModal(); // Open error modal
      setIsSuccess(false); // Set isSuccess to false
    } 
    }
    catch(error){
      console.log("error", error)
    } finally {
      setLoading(false); // Stop loading indicator
    }
  }
  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };
  return (
    <div className='flex flex-col justify-between py-2 w-[45rem] ml-5 gap-y-5'>
      
      {isLoading ? (
            <div className="flex flex-col align-center opacity:50 w-full justify-center items-center  ">
              <CircularProgress size={100} className="mt-10 mb-5" />
              <h2 className="mb-10">Loading Blogs...</h2>
            </div>
          ) : (
      <div className="flex flex-col overflow-y-auto max-h-[605px] ">
      {blogs.map((blog, index) => (

    <div key={index} className="flex items-center  px-4 py-2  justify-between border w-full rounded-md hover:shadow-2xl">

    
      
        <div className="flex items-center gap-4">
          <img className="w-16 h-16 rounded-lg" src={blog.image} alt="blog" />
          
          <div className='flex flex-col mt-1'>
            <h1 className='text-2xl text-[#2F2F2F]'>{blog.title}</h1>
            <p className='text-[#656565] text-[0.6rem]'>Published: {new Date(blog.date).toLocaleDateString()}</p>
            <p className='text-[#656565] text-[0.6rem]'>Author: {blog.author}</p>
          </div>
    
        </div>
        <div className='flex justify-around gap-3'>
         
            <AiFillRead onClick={() => openModal(blog)}  className='text-3xl text-[#2F2F2F] cursor-pointer hover:text-[#08AEF2]' />
        
          {/* <AiFillEdit className='text-3xl text-[#2F2F2F] cursor-pointer hover:text-green-600' /> */}
          <AiFillDelete onClick={() => handleDelete(blog._id)} className='text-3xl text-[#2F2F2F] cursor-pointer hover:text-[#FF0000]' />
           
        </div>
      </div>
      ))}
      </div>
          )}
      <Modal open={loading} onClose={() => setLoading(false)}>
        <div className="modal-content">
          <div className="modal-inner">
            
          <CircularProgress color="primary" size={50} />
          <h2>Deleting in progress</h2>
        </div>
        </div>
      </Modal>
      {selectedBlog && <BlogModal blog={selectedBlog} onClose={closeModal} />}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
  <div className="modal-content">
    <div className="modal-inner">
      <div className="flex items-center justify-center">
        {isSuccess ? (
          <AiOutlineCheckCircle className="h-6 w-6 text-green-500 mr-2" />
        ) : (
          <AiOutlineCloseCircle className="h-6 w-6 text-red-500 mr-2" />
        )}
        <h2>{modalContent}</h2>
      </div>
      <Button onClick={handleCloseModal} variant="contained" color="primary">
        Close
      </Button>
    </div>
  </div>
</Modal>
    </div>
  )
}

export default BlogManagement