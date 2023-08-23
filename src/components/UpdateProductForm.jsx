import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Modal } from '@mui/material';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
const UpdateProductForm = ({ product, onUpdate }) => {
  const [postImage, setPostImage] = useState(null); // Change initial value to null
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (product) {
      setEditedProduct(product); // Update the editedProduct state when the product prop changes
    }
  }, [product]);
  const handleOpenModal = () => {
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
};
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading indicator
    try {
      const response = await fetch(`http://localhost:8080/api/editProduct/${editedProduct._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      });
      if (response.ok) {
        console.log('Edit successful');
        onUpdate(editedProduct);
        setLoading(false); // Stop loading indicator
        setModalContent('Product info Updated Successfully!');
          handleOpenModal(); // Open success modal
          setIsSuccess(true);
      } else {
      setModalContent('Failed to Update Product info. Please try again.');
      handleOpenModal(); // Open error modal
      setIsSuccess(false);
    }
    } catch (error) {
      console.error('Error editing product:', error);
      setIsSuccess(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      console.log('Image converted to base64:', base64);
      setPostImage(base64);

      // Update the edited product with the new image
      setEditedProduct({ ...editedProduct, imageUrl: base64 });
    }
  };

  return (
    <div className="flex p-6 bg-white rounded-lg drop-shadow-2xl shadow-lg">
      <div>
        <h2 className="text-xl font-semibold mb-4">Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={editedProduct.name}
              onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              value={editedProduct.description}
              onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">In Stock:</label>
            <input
              type="checkbox"
              checked={editedProduct.inStock}
              onChange={() => setEditedProduct({ ...editedProduct, inStock: !editedProduct.inStock })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price:</label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-md"
              value={editedProduct.price}
              onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
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
          <button type="submit" className="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Update Product
          </button>
        </form>
      </div>
      <Modal open={loading} onClose={() => setLoading(false)}>
        <div className="modal-content">
          <div className="modal-inner">
            
          <CircularProgress color="primary" size={50} />
        <h2>Product info is updating...</h2>
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
      <div className=""></div>
    </div>
  );
};

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

export default UpdateProductForm;
