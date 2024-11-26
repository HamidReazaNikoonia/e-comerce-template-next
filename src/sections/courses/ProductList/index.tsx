'use client'
import React, { useState } from 'react'
import FilterAndSearch from './FilterAndSearch';
import List from './List';


// Mock product data
const products = [
  { id: 1, name: 'Product 1', price: 19.99, tags: ['electronics', 'gadgets'] },
  { id: 2, name: 'Product 2', price: 29.99, tags: ['clothing', 'accessories'] },
  { id: 3, name: 'Product 3', price: 39.99, tags: ['home', 'decor'] },
  { id: 4, name: 'Product 4', price: 49.99, tags: ['electronics', 'computers'] },
  { id: 5, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 6, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 7, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 8, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 9, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 10, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id:11, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 12, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 13, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 14, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 15, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 16, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 17, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 18, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 19, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 21, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 22, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 23, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 24, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 25, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 26, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
  { id: 27, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },

]

export default function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleFilter = (searchTerm: string, selectedTags: string[], priceRange: [number, number]) => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTags.length === 0 || selectedTags.some(tag => product.tags.includes(tag))) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    setFilteredProducts(filtered)
  }

  
  return (
    <div className="flex flex-col md:flex-row gap-4 px-4" >
      <div className="w-full md:w-3/4">
          <List products={filteredProducts} />
        </div>
        <div className="w-full md:w-1/4 bg-gray-800 rounded-xl pb-6 pt-4" style={{maxHeight: '650px'}}>
          <FilterAndSearch onFilter={handleFilter} />
        </div>
      </div>
  )
}
