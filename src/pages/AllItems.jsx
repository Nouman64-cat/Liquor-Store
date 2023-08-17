import React, { useState } from 'react';
import { Navbar, Footer } from '../components';
import Pagination from '@mui/material/Pagination';
import { Typography } from '@mui/material';
import { FaPhone } from 'react-icons/fa';
const products = [
  { name: 'Product 1', description: 'Short description for Product 1', inStock: true },
  { name: 'Product 2', description: 'Short description for Product 2', inStock: false },
  { name: 'Product 3', description: 'Short description for Product 3', inStock: true },
  { name: 'Product 4', description: 'Short description for Product 4', inStock: false },
  { name: 'Product 5', description: 'Short description for Product 5', inStock: true },
  { name: 'Product 6', description: 'Short description for Product 6', inStock: false },
  { name: 'Product 7', description: 'Short description for Product 7', inStock: true },
  { name: 'Product 8', description: 'Short description for Product 8', inStock: false },
  { name: 'Product 9', description: 'Short description for Product 9', inStock: true },
  { name: 'Product 10', description: 'Short description for Product 10', inStock: false },
  { name: 'Product 11', description: 'Short description for Product 11', inStock: true },
  { name: 'Product 12', description: 'Short description for Product 12', inStock: false },
  { name: 'Product 13', description: 'Short description for Product 13', inStock: true },
  { name: 'Product 14', description: 'Short description for Product 14', inStock: false },
  { name: 'Product 15', description: 'Short description for Product 15', inStock: true },
  { name: 'Product 16', description: 'Short description for Product 16', inStock: false },
  { name: 'Product 17', description: 'Short description for Product 17', inStock: true },
  { name: 'Product 18', description: 'Short description for Product 18', inStock: false },
  { name: 'Product 19', description: 'Short description for Product 19', inStock: true },
  { name: 'Product 20', description: 'Short description for Product 20', inStock: false },
  { name: 'Product 21', description: 'Short description for Product 21', inStock: true },
  { name: 'Product 22', description: 'Short description for Product 22', inStock: false },
];


const ProductsPerPage = 9;
const TotalPages = Math.ceil(products.length / ProductsPerPage);

const AllItems = () => {
  const [page, setPage] = useState(1);
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
        <Pagination count={TotalPages} page={page} color="primary" onChange={handleChange} className="mt-6" />
        </div>
      </div>
      
    </div>
    <Footer />
  </>
  );
};

export default AllItems;
