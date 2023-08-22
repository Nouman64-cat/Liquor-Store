import React, { useEffect, useState } from 'react'
import { UpdateProductForm } from '../components';
import { AiFillCheckCircle, AiFillCloseCircle, AiFillDelete, AiFillEdit } from 'react-icons/ai';

const UpdateItem = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    console.log('products:', products);
  })
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/showProducts');
      if (response.ok) {
        const data = await response.json();
        setProducts(data); // Update products with fetched data // Update totalPages based on fetched data length
        console.log('data:', data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  const handleEdit = (product) => {
    setSelectedProduct(product); // Set the selected product for editing
  };
  const handleProductUpdate = (updatedProduct) => {
    // You can update the products state with the updated product
    // Or fetch the products again to refresh the list
    fetchProducts();
    setSelectedProduct(null); // Clear the selected product after update
  };
  return (
    <div className='flex ml-10'>
      <UpdateProductForm product={selectedProduct} onUpdate={handleProductUpdate} />
      <div className="flex flex-col overflow-y-auto max-h-[520px] ">
            {products.map((product, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg border drop-shadow-2xl">
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
                    <AiFillEdit onClick={() => handleEdit(product)} title="Edit product info" size={30} className="cursor-pointer hover:text-green-600"/>
      
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default UpdateItem
