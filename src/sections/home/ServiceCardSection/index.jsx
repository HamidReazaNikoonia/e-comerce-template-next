import React from 'react'
import { ChevronsLeft, ClipboardList } from 'lucide-react';
import ServiceSwiper from '@/components/swiper/ServiceSwiper';

export default function ServiceCardSection() {
return (
<>
    {/* Header */}
    <div className='flex justify-between w-full pb-2'>

        <button
            className="bg-transparent hover:bg-blue-500 text-white font-medium hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-md inline-flex items-center">
            <ChevronsLeft className='mr-2' />
            مشاهده همه
        </button>
        <div className='py-2 inline-flex items-center  text-lg text-white font-semibold'>
        
          خدمات تخصصی 
          <ClipboardList className='ml-3' />
        </div>
    </div>
    <ServiceSwiper />
</>
)
}
