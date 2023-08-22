import React, { useState } from 'react';
import Speech from './Speech';

const CreateBlog = () => {
  const [author, setAuthor] = useState('');
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postImage, setPostImage] = useState({ myFile: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        author,
        topic,
        title,
        content,
        image: postImage,
         // Use the returned image path
      };
    // Send formData to your API for creating the blog post
    try {
        const response = await fetch('http://localhost:8080/api/createBlog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log('Blog Created successfully:', responseData);
        }
    // Reset form fields after submission
    setAuthor('');
    setTopic('');
    setTitle('');
    setContent('');
      } catch (error){
        console.error('Error creating blog:', error);
      }
  };
  const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  const base64 = await convertToBase64(file);
  console.log('Image converted to base64 successfully');
  setPostImage(base64); // Store the base64-encoded image data
};
  return (
    <div className="p-10 max-w-md mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Author:</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Topic:</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Title:</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Content:</label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image:</label>
            <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Create
        </button>
      </form>
    </div>
  );
};
function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
export default CreateBlog;
