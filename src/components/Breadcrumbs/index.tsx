import React from 'react'

import { House, ChevronLeft } from 'lucide-react';

export default function Breadcrumbs() {
  return (
    <nav className='flex' >
          <ol className='inline-flex items-center text-right'>
          <li className='ml-2'>
              <div className=' items-center flex'>
                
                <a className=' font-medium text-sm'>
                  محصولات
                </a>
                <ChevronLeft size={18} className='ml-2'  />
              </div>
            </li>

            <li className='ml-2 '>
              <div className=' items-center flex'>
                
                <a className=' font-medium text-sm'>
                  محصولات
                </a>
                <ChevronLeft size={18} className='ml-2' />
              </div>
            </li>

            {/* Header Title */}
            <li className='inline-flex items-center'>
              <a className=' font-medium text-sm inline-flex ml-2'>
                خانه
                <House size={18} className='text-sm ml-2' />
              </a>
            </li>
          </ol>
        </nav>
  )
}
