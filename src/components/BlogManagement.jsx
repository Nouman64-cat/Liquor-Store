import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { AiFillDelete, AiFillEdit, AiFillRead } from 'react-icons/ai'
import BlogModal from './BlogModal'
const BlogManagement = () => {
  const [blogs, setBlogs] = useState([])
  const [selectedBlog, setSelectedBlog] = useState(null);
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
  const handleDelete = async (id) => {
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
      }
    }
    catch(error){
      console.log("error", error)
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
      {selectedBlog && <BlogModal blog={selectedBlog} onClose={closeModal} />}
    </div>
  )
}

export default BlogManagement