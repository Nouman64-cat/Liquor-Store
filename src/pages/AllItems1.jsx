import React, { useEffect, useState } from 'react';
import { Navbar, Footer } from '../components';
import Pagination from '@mui/material/Pagination';
import { Typography, CircularProgress, LinearProgress  } from '@mui/material';
import { FaPhone } from 'react-icons/fa';
import { AiFillCheckCircle, AiFillCloseCircle, AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Dialog } from '@headlessui/react';

const ProductsPerPage = 6;

const AllItems1 = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  useEffect(() => {
    fetchProducts();
    console.log('products:', products);
  }, []);

  

  const handleDelete = (productId) => {
    setProductIdToDelete(productId);
    setIsDialogOpen(true);
  };

  const confirmDelete = async () => {
    setIsDialogOpen(false);
    setIsLoadingDelete(true);

    try {
      const response = await fetch(`http://localhost:8080/api/deleteProduct/${productIdToDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Deleted successfully');
        fetchProducts();
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/showProducts');
      if (response.ok) {
        const data = await response.json();
        setProducts(data); // Update products with fetched data
        setTotalPages(Math.ceil(data.length / ProductsPerPage)); // Update totalPages based on fetched data length
        console.log('data:', data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false); // Set loading to false when data fetching is complete
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center w-[68rem] min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-10">
          <Typography variant="h3" component="div" gutterBottom className="text-center">
            All items
          </Typography>
          <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <div className="p-4 text-center bg-white shadow-md border border-gray-300 rounded-lg">
          <Dialog.Title className="text-lg font-semibold mb-2">Confirm Deletion</Dialog.Title>
          <p className="text-gray-600 mb-4">Are you sure you want to delete this product?</p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => setIsDialogOpen(false)} className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100">
              Cancel
            </button>
            <button onClick={confirmDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
              Delete
            </button>
          </div>
        </div>
      </Dialog>
          {isLoading ? (
            <div className="flex flex-col align-center opacity:50 w-full justify-center items-center">
              <CircularProgress size={100} className="mt-10 mb-5" />
              <h2 className="mb-10">Loading...</h2>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {displayedProducts.map((product, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-2">
                  <img src={product.imageUrl} alt={product.name} className="h-40 object-cover" />
                </div>
                <h1 className="text-xl font-semibold mb-2">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
                <p className={`mt-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ?
                   (<span className="flex items-center gap-2"><AiFillCheckCircle size={20} />In Stock</span> ) : 
                   (<span className="flex items-center gap-2"><AiFillCloseCircle size={20} />Out of Stock</span> )}
                </p>
                <div className="flex justify-center items-center w-auto rounded-full px-1 mb-3 py-1 bg-[#08AEF2]">
                  <p className="text-white">Price: $ {product.price}</p>
                </div>
                <div className="flex justify-around mt-5">
                    {/* <AiFillEdit title="Edit product info" size={30} className="cursor-pointer hover:text-green-600"/> */}
                    <AiFillDelete onClick={() => handleDelete(product._id)} title="Delete product" size={30} className="cursor-pointer hover:text-[#FF0000]" />
                </div>
              </div>
            ))}
          </div>
           )}
          <div className='w-full flex justify-center items-center'>

            <Pagination count={totalPages} page={page} color="primary" onChange={handleChange} className="mt-6" />
          </div>
        </div>
      </div>
  </div>
   
  );
};

export default AllItems1;
