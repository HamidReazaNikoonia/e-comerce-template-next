import React from 'react'
import { Star, ShoppingCart } from 'lucide-react';

import {IProduct} from '@/types/Product';

// interface Product {
//   id: number
//   subtitle: string
//   meta_title: string
//   meta_description: string
//   slug: string
//   description: string
//   brand: string
//   average_rating: number
//   countInStock: number
//   is_available: boolean
//   status: boolean
//   qr_code: string
//   product_details?: {
//     variants?: string
//       width?: number,
//       height?: number,
//       length?: number,
//       origin_country?: string,
//       material?: string,

//   }
//   tag: [any]

//   images: [any]
//   category: any
//   thumbnail: any;
//   title: string
//   price: number
//   tags: string[]
// }

const NEXT_PUBLIC_SERVER_FILES_URL =  process.env.NEXT_PUBLIC_SERVER_FILES_URL || '';

export default function ProductCard({product}: {product: IProduct}) {
  return (
<div className="relative w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
  <a href="#">
    <img className="h-60 rounded-t-lg object-cover" src={`${NEXT_PUBLIC_SERVER_FILES_URL}/${product?.thumbnail.file_name}`} alt={product.title} />
  </a>
  {/* If product not exist */}
  {!product?.is_available && <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-xs text-white">ناموجود</span>}
  
  <div className="mt-4 px-5 pb-5">
    <a href="#">
      <h2 className="text-xl font-semibold text-right tracking-tight text-slate-900">
        {product.title}
      </h2>

      <h5 className='text-xs font-thin text-right mt-2 mb-4 text-slate-900'>{product.subtitle}</h5>
    </a>
    <div className="mt-2.5 mb-5 flex items-center">
      <span className="mr-2 pt-1 rounded bg-yellow-300 text-black px-2.5 py-0.5 text-xs font-semibold">{product?.average_rating || 0}</span>
      {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            strokeWidth={1}
            size={18}
            fill={index < product.average_rating ? "#facc15" : "gray"}
            stroke="none"
          />
        ))}
     {/* <Star  stroke='gray' fill='none' size={18} />       */}
    </div>
    <div className="flex items-center justify-between">
      <div>
        <div className="flex text-lg font-bold items-center text-slate-900">
        <span className='mr-1 text-sm'>تومان</span>
          <span>{product.price.toLocaleString('ar-EG')}</span>
        </div>
        {product?.discountable?.status && (<span className=" inline-block text-sm text-slate-900 line-through">
            تخفیف %{product?.discountable.percent.toLocaleString('ar-EG')}
        </span>)}
        
      </div>
      <a href="#" className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <ShoppingCart className='mr-2' size={19} />
         خرید</a>
    </div>
  </div>
</div>

  )
}
