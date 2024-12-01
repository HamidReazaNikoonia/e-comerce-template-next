'use client'
import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import {getProductsRequest} from '@/API/product';
import FilterAndSearch from './FilterAndSearch';
import List from './List';
import {IProduct} from '@/types/Product';


// // Mock product data
// const products = [
//   { id: 1, name: 'Product 1', price: 19.99, tags: ['هنری', 'gadgets'] },
//   { id: 2, name: 'Product 2', price: 29.99, tags: ['هنری', 'accessories'] },
//   { id: 3, name: 'Product 3', price: 39.99, tags: ['هنری', 'decor'] },
//   { id: 4, name: 'Product 4', price: 49.99, tags: ['هنری', 'computers'] },
//   { id: 5, name: 'Product 5', price: 59.99, tags: ['هنری', 'fashion'] },
//   { id: 6, name: 'Product 5', price: 59.99, tags: ['هنری', 'fashion'] },
//   { id: 7, name: 'Product 5', price: 59.99, tags: ['هنری', 'fashion'] },
//   { id: 8, name: 'Product 5', price: 59.99, tags: ['هنری', 'fashion'] },
//   { id: 9, name: 'Product 5', price: 59.99, tags: ['هنری', 'fashion'] },
//   { id: 10, name: 'Product 5', price: 59.99, tags: ['هنری', 'fashion'] },
//   { id:11, name: 'Product 5', price: 59.99, tags: ['هنری', 'fashion'] },
//   { id: 12, name: 'Product 5', price: 59.99, tags: ['هنری', 'fashion'] },
//   { id: 13, name: 'Product 5', price: 59.99, tags: ['هنری', 'fashion'] },
//   { id: 14, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 15, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 16, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 17, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 18, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 19, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 21, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 22, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 23, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 24, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 25, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 26, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },
//   { id: 27, name: 'Product 5', price: 59.99, tags: ['clothing', 'fashion'] },

// ]

interface FilterParams {
  keyword?: string;
  sort?: string;
  category?: string;
  brand?: string;
  price_from?: number;
  price_to?: number;
}


export default function ProductList({productsData}: {productsData: {count: number, products: IProduct[]}}) {
  const [filteredProducts, setFilteredProducts] = useState(productsData?.products);
  const [filterParams, setFilterParams] = useState<FilterParams | null>(null);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryFn: async () => await getProductsRequest(filterParams || {}),
    enabled: filterParams !== null,
    queryKey: ["product", filterParams], //Array according to Documentation
  });

  useEffect(() => {
    console.log({dataInUseEffect: data});
    if(data?.data?.products && isSuccess) {
      setFilteredProducts(data?.data?.products)
    }
  }, [data, isSuccess])


  // const handleFilter = (searchTerm: string, selectedTags: string[], priceRange: [number, number]) => {
  //   // const filtered = productsData.products.filter(product => 
  //   //   product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //   //   (selectedTags.length === 0 || selectedTags.some(tag => product.tags.includes(tag))) &&
  //   //   product.price >= priceRange[0] && product.price <= priceRange[1]
  //   // )
  //   setFilterParams()
  //   setFilteredProducts(filtered)
  // }

  const handleFilter = (searchTerm: string, selectedTags: string[], priceRange: [number, number]) => {
    const selectedTagString = selectedTags.map(tt => {
      return tt._id.toString()
    })
    const newFilterParams: FilterParams = {
      keyword: searchTerm,
      category: selectedTagString.join(','), // Assuming tags are categories
      // price_from: priceRange[0],
      // price_to: priceRange[1],
    };
    setFilterParams(newFilterParams);
    console.log({selectedTagString})
  };

  
  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-4 px-1 md:px-4 mb-14" >
      <div className="w-full md:w-3/4">
          <List products={filteredProducts} />
        </div>
        <div className="w-full md:w-1/4 bg-gray-800 rounded-xl pb-6 pt-4" style={{maxHeight: '650px'}}>
          <FilterAndSearch onFilter={handleFilter} />
        </div>
      </div>
  )
}
