import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const BlogModal = ({ blog, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white w-3/4 md:max-w-2xl rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center bg-gray-100 p-4">
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-[0.8rem] mb-1">Author: {blog.author}</p>
          <p className="text-gray-600 text-sm mb-2">{blog.content}</p>
          <p className="text-gray-600 text-[0.7rem] mb-1 flex justify-end mt-5">Published: {new Date(blog.date).toLocaleDateString()}</p>
         
          {/* <img src={blog.image} alt="Blog" className="w-full h-auto mb-4" /> */}
          
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
