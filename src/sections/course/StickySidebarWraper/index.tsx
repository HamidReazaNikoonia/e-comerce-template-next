'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

// Icons
import { Clock, Headset, WalletMinimal } from 'lucide-react';


// assets
import SampleImage from '@/public/assets/images/product_placeholder.png'

export default function StickyComponent() {
  const stickyRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current && footerRef.current) {
        const stickyTop = stickyRef.current.getBoundingClientRect().top * 10
        const footerTop = footerRef.current.getBoundingClientRect().top
        const viewportHeight = window.innerHeight

        if (footerTop <= viewportHeight) {
          // Footer is in view, set position to static
          setIsSticky(false)
        } else if (window.scrollY > stickyTop) {
          // Scroll position is past the original position of sticky element
          setIsSticky(true)
        } else {
          // Reset to original position
          setIsSticky(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className=" mt-12">
      <div className="flex flex-col md:flex-row">
       
       {/* Left Side (Sticky Side Bar) */}
        <div className="md:w-1/3 space-y-6 mt-6 md:mt-0">
          <div className="bg-red-500 rounded-md overflow-hidden">
            <h5 className="text-white text-lg p-2">Sticky Pens</h5>
            {["Stinky Footer", "Stick Up", "Sticky Sidebar"].map((item, index) => (
              <a key={index} href="#" className="block bg-gray-100 bg-opacity-80 hover:bg-blue-400 hover:text-black p-2 text-sm">{item}</a>
            ))}
          </div>
          

          <div className="bg-red-500 rounded-md overflow-hidden">
            <h5 className="text-white text-lg p-2">Sticky Pens</h5>
            {["Stinky Footer", "Stick Up", "Sticky Sidebar"].map((item, index) => (
              <a key={index} href="#" className="block bg-gray-100 bg-opacity-80 hover:bg-blue-400 hover:text-black p-2 text-sm">{item}</a>
            ))}
          </div>
          <div className="bg-red-500 rounded-md overflow-hidden">
            <h5 className="text-white text-lg p-2">Sticky Pens</h5>
            {["Stinky Footer", "Stick Up", "Sticky Sidebar"].map((item, index) => (
              <a key={index} href="#" className="block bg-gray-100 bg-opacity-80 hover:bg-blue-400 hover:text-black p-2 text-sm">{item}</a>
            ))}
          </div>
          <div className="bg-red-500 rounded-md overflow-hidden">
            <h5 className="text-white text-lg p-2">Sticky Pens</h5>
            {["Stinky Footer", "Stick Up", "Sticky Sidebar"].map((item, index) => (
              <a key={index} href="#" className="block bg-gray-100 bg-opacity-80 hover:bg-blue-400 hover:text-black p-2 text-sm">{item}</a>
            ))}
          </div>
          <div className="bg-red-500 rounded-md overflow-hidden">
            <h5 className="text-white text-lg p-2">Sticky Pens</h5>
            {["Stinky Footer", "Stick Up", "Sticky Sidebar"].map((item, index) => (
              <a key={index} href="#" className="block bg-gray-100 bg-opacity-80 hover:bg-blue-400 hover:text-black p-2 text-sm">{item}</a>
            ))}
          </div>
          <div className="bg-red-500 rounded-md overflow-hidden">
            <h5 className="text-white text-lg p-2">Sticky Pens</h5>
            {["Stinky Footer", "Stick Up", "Sticky Sidebar"].map((item, index) => (
              <a key={index} href="#" className="block bg-gray-100 bg-opacity-80 hover:bg-blue-400 hover:text-black p-2 text-sm">{item}</a>
            ))}
          </div>



          <div 
            ref={stickyRef}
            className={`bg-red-500 rounded-md overflow-hidden ${
              isSticky ? 'fixed top-20  w-1/3' : ''
            }`}
          >
            <h5 className="text-white text-lg p-2">More Cool Stuff</h5>
            {["Boxes", "Riveting Rivets"].map((item, index) => (
              <a key={index} href="#" className="block bg-gray-100 bg-opacity-80 hover:bg-blue-400 hover:text-black p-2 text-sm">{item}</a>
            ))}
          </div>
        </div>

        {/* Rigth Side */}
        <div className="md:w-2/3">
          <div className='flex flex-col justify-center items-center px-8 border'>
              {/* Thumb Image */}
              <div>
                <Image alt="" width={700} height={450} src={SampleImage} />
              </div>


              {/* courseCharacteristics */}
              <div className='w-full flex justify-around mt-8 mb-16 bg-[#1c1c1c] py-4 px-4'>
                <div className='flex items-center'>
                  <div className='text-[13px] text-right pr-4 leading-7 font-medium w-44'>
                  بازگشت وجه درصورت عدم رضایـت از دوره آموزشی
                  </div>


                  <div>
                  <div className='p-3 rounded-2xl bg-purple-800 '>
                  <WalletMinimal size={32} />
                  </div>
                  </div>

                  
                </div>




                <div className='flex items-center'>
                  <div className='text-[13px] text-right pr-4 leading-7 font-medium w-36'>
                    پشتیبانی ۲ ساله برای پاسخ به سوالات
                  </div>


                  <div>
                  <div className='p-3 rounded-2xl bg-purple-800 '>
                  <Headset size={32} />
                  </div>
                  </div>

                  
                </div>





                <div className='flex items-center'>
                  <div className='text-[13px] text-right pr-4 leading-7 font-medium w-44'>
                    دسترسی همیشگی به محتوای آفلاین آموزشی
                  </div>


                  <div>
                  <div className='p-3 rounded-2xl bg-purple-800 '>
                  <Clock size={32} />
                  </div>
                  </div>

                  
                </div>
              </div>
          </div>
        </div>




      </div>
      <div ref={footerRef} className="mt-6">
        <div className="bg-gray-900 text-white font-bold p-2">The Footer Bar</div>
        <div className="bg-gray-800 text-gray-500 text-sm min-h-[66px] flex items-center justify-center">
          The kind of words and stuff you'd find in a footer.
        </div>
      </div>
    </div>
  )
}

