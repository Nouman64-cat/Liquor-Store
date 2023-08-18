import React, { useEffect, useState } from 'react';
import { Navbar, Footer } from '../components';
import Pagination from '@mui/material/Pagination';
import { Typography } from '@mui/material';
import { FaPhone } from 'react-icons/fa';

const ProductsPerPage = 9;

const AllItems = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
    console.log('products:', products);
  }, []);

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
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ProductsPerPage;
  const endIndex = startIndex + ProductsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-10">
          <Typography variant="h3" component="div" gutterBottom className="text-center">
            All items
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.map((product, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-2">
                  <img src={product.imageUrl} alt={product.name} className="h-40 object-cover" />
                </div>
                <h1 className="text-xl font-semibold mb-2">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
                <p className={`mt-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
                <button
                  className="bg-[#08AEF2] rounded-full p-3 flex justify-end mx-[20rem] bottom-0 right-0 text-white transition duration-300 ease-in-out hover:bg-white hover:text-[#08AEF2]"
                  onClick={() => window.location.href = 'tel:1234567890'}
                >
                  <FaPhone />
                </button>
              </div>
            ))}
          </div>
          <div className='w-full flex justify-center items-center'>
            <Pagination count={totalPages} page={page} color="primary" onChange={handleChange} className="mt-6" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllItems;
