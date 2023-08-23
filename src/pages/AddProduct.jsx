import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Modal } from '@mui/material';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const AddProduct = () => {
  const [postImage, setPostImage] = useState({ myFile: '' });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [inStock, setInStock] = useState(true);
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
  console.log('Updated postImage:', postImage);
  
}, [postImage]);

  // const handleImageUpload = async (newImage) => {
  //   if (!newImage) {
  //     console.log('No image provided for upload.');
  //     return null; // Return null if no image is provided
  //   }

  //   try {
  //     const response = await fetch('http://localhost:8080/api/uploadImage', {
  //       method: 'POST',
  //       body: JSON.stringify({ imageUrl: newImage }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log('Image uploaded successfully:', data);
  //       return data.imagePath; // Return the image path
  //     } else {
  //       console.error('Error uploading image');
  //       return null; // Return null on error
  //     }
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     return null; // Return null on error
  //   }
  // };
  const handleOpenModal = () => {
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading indicator
    const uploadedImagePath = postImage;

    if (uploadedImagePath !== null) {
      console.log('Image path received:', uploadedImagePath);

      // Now you can submit the rest of the form data along with the uploaded image path
      const formData = {
        name,
        description,
        imageUrl: uploadedImagePath,
        inStock,
        price,
         // Use the returned image path
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
          setPrice(0);
          setIsSuccess(true);
          setMessage('Product Added Successfully')
          setLoading(false); // Stop loading indicator
          setModalContent('Product added Successfully!');
          handleOpenModal(); // Open success modal
        } else {
          console.error('Error adding product');
          setIsSuccess(false);
          setMessage('Product Not Added')
           setModalContent('Failed to Add Product. Please try again.');
      handleOpenModal(); // Open error modal
        }
      } catch (error) {
        console.error('Error adding product:', error);
        setIsSuccess(false);
        setMessage('Product Not Added')
      }
    }
  };

  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertToBase64(file);
  //   console.log('Image converted to base64:', base64);
  //   setPostImage({ ...postImage, myFile: base64 });
  //   console.log(postImage)
  // };
  const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  const base64 = await convertToBase64(file);
  console.log('Image converted to base64:', base64);
  setPostImage(base64); // Store the base64-encoded image data
};

  return (
    <div className="flex w-[60rem] justify-center mx-auto">
    <div className="flex justify-center items-center shadow-lg drop-shadow-2xl">
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
            <label className="block text-sm font-medium text-gray-700">Price:</label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-md"

              onChange={(e) => setPrice(e.target.value)}
            />
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
        {
          isSuccess ? (
            <p>{message}</p>
          ) : (
            <p>{message}</p>
          )
        }
      </div>
    </div>
    <Modal open={loading} onClose={() => setLoading(false)}>
        <div className="modal-content">
          <div className="modal-inner">
            
          <CircularProgress color="primary" size={50} />
        <h2>Adding Product...</h2>
        </div>
        </div>
      </Modal>
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
