"use client"

import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import { motion } from 'motion/react';


const fetchProducts = async ()=>{

    const {data} = await axios.get("/api/products");
    return data;
}


export default function ProductsPage() {


  const { data, error, isLoading } = useQuery({
  queryKey: ["products"],   // A key for identifying this query
  queryFn: fetchProducts,   // The function that will fetch the data
});

    if (isLoading) return <p>loading....</p>

    if (error) return <p>Error fetching....</p>

  return (
    <div>
<motion.h1
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 10,
  }}
  className="text-center text-xl md:text-3xl my-2 font-bold"
>
  Explore our products
</motion.h1>
        <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

        
      {/* Loop through each product in the 'products' array and create a card for each */}
      {data.map((product) => (
        <div key={product._id} className="border p-4 rounded-md shadow-md">
          {/* Display product image */}
          <img
            src={product.photoURL} // Use the product's photo URL
            alt={product.title} // Set the alt text for accessibility (product title)
            className="w-full h-40 object-cover mb-4" // Apply Tailwind CSS classes for image size and styling
          />
          
          {/* Display product title */}
          <h2 className="text-xl font-semibold">{product.title}</h2>
          
          {/* Display a short snippet of the product description (first 100 characters) */}
          <p className="text-gray-500">{product.description.slice(0, 100)}...</p>
          
          {/* Display the product price */}
          <p className="mt-2 font-bold">${product.price}</p>
          
          {/* Display the brand and model of the product */}
          <p className="text-sm text-gray-400">
            {product.brand} - {product.model}
          </p>
          
          <div className="mt-4 flex justify-between">
            {/* Link to the product details page */}
            {/* <Link href={`/products/${product._id}`}> */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Details
              </button>
            {/* </Link> */}
            
            {/* Add to Cart button (for now, it's a placeholder) */}
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  )
}
