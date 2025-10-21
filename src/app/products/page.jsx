"use client"

import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'


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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <h1>Welcome to NextMobile All products</h1>
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
  )
}
