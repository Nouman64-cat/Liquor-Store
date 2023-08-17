import React, { useState } from 'react';

const AddProduct = () => {
  const [postImage, setPostImage] = useState({ myFile: '' });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [inStock, setInStock] = useState(true);

  const handleImageUpload = async (newImage) => {
    if (!newImage) {
      console.log('No image provided for upload.');
      return null; // Return null if no image is provided
    }

    try {
      const response = await fetch('http://localhost:8080/api/uploadImage', {
        method: 'POST',
        body: JSON.stringify({ imageUrl: newImage }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Image uploaded successfully:', data);
        return data.imagePath; // Return the image path
      } else {
        console.error('Error uploading image');
        return null; // Return null on error
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      return null; // Return null on error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadedImagePath = await handleImageUpload(postImage);

    if (uploadedImagePath !== null) {
      console.log('Image path received:', uploadedImagePath);

      // Now you can submit the rest of the form data along with the uploaded image path
      const formData = {
        name,
        description,
        inStock,
        imageUrl: uploadedImagePath, // Use the returned image path
      };

      try {
        const response = await fetch('http://localhost:8080/api/addProducts', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log('Product added:', responseData);
          // Reset form fields
          setName('');
          setDescription('');
          setInStock(true);
        } else {
          console.error('Error adding product');
        }
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log('Image converted to base64:', base64);
    setPostImage({ ...postImage, myFile: base64 });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea className="mt-1 p-2 w-full border rounded-md" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">In Stock:</label>
            <input type="checkbox" checked={inStock} onChange={() => setInStock(!inStock)} />
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
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Add Product
          </button>
        </form>
      </div>
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

export default AddProduct;
