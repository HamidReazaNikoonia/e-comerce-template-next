// @ts-nocheck
'use client'
import React, { useState } from 'react';

import { clsx } from 'clsx';

import { House, ChevronLeft, ChevronDown } from 'lucide-react';
import { useProductsStore } from '@/_store/Product';
import { isEmpty } from '@/utils/Helpers';
import Breadcrumbs from '@/components/Breadcrumbs';


const sortTypeStringMaper = {
  'price': 'قیمت',
  'createdAt': 'تاریخ',
  'title': 'الفبا'
}

export default function CoursePageHeader() {

  const [sortDropDownOpen, setSortDropDownOpen] = useState(false);
  const product_sortType = useProductsStore((state) => state.product_sortType);
  const change_product_sortType = useProductsStore((state) => state.change_product_sortType);


  return (
    <div className="mb-8 bg-[#1e1f20] py-8 flex mr-8 md:mr-0 flex-col-reverse md:flex-row justify-end mt-16 px-8 items-end">
     


 


       {/* Right Side */}
       <div className='flex flex-col items-end mb-4 md:mb-0'>

        {/* Header Title */}
        <h2 className=' mb-6 text-3xl text-right'>
         لیست محصولات
        </h2>


        {/* Breadcrumb */}
        <Breadcrumbs levels={[{title: 'دوره های آموزشی', link: '/product'}, {title: ' هنری', link: '/'}, {title: ' کیر خر'}]} />


        
      </div>
    </div>
  )
}
