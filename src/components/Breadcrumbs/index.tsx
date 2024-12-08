import React from 'react';
import Link from 'next/link';

import { House, ChevronLeft } from 'lucide-react';

export default function Breadcrumbs({ levels }) {
  return (
    <nav className='flex' >
      <ol className='inline-flex items-center text-right'>

        {levels[1] && (
          <li className='ml-2'>
            <div className=' items-center flex'>

              <a className=' font-medium text-sm'>
                {levels[1]?.title}
              </a>
              <ChevronLeft size={18} className='ml-2' />
            </div>
          </li>
        )}

        {levels[0] && (
          <li className='ml-2 '>
            <div className=' items-center flex'>

              <Link href={levels[0]?.link} className=' font-medium text-sm'>

                {levels[0]?.title}
              </Link>
              <ChevronLeft size={18} className='ml-2' />
            </div>
          </li>
        )}


        {/* Header Title */}
        <li className='inline-flex items-center'>
          <Link href="/" className=' font-medium text-sm inline-flex ml-2'>
            خانه
            <House size={18} className='text-sm ml-2' />
          </Link>
        </li>
      </ol>
    </nav>
  )
}
