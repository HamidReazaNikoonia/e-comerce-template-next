'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

// Icons
import { Clock, Headset, WalletMinimal } from 'lucide-react';

// sections
import CourseCharacter from '@/sections/course/CourseCharacter';
import VideoSampleGallery from '@/sections/course/VideoSampleGallery';
import CourseDetails from '@/sections/course/CourseDetails';

// assets
import SampleImage from '@/public/assets/images/product_placeholder.png'
import UserReviewForCourse from '@/sections/course/UserReviewForCourse';

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
              <div className='w-full'>
                <CourseCharacter />
              </div>


              {/* Video Sample Gallery */}
              <div className='w-full bg-[#1c1c1c] px-6 py-10'>
                <VideoSampleGallery />
              </div>


              {/* Course Details information */}
              <div className='w-full bg-[#1c1c1c] px-6 py-10'>
                <CourseDetails />
              </div>


            {/* Get a List of Course Based on Category */}
            <div className='w-full px-6 py-10'>
            <button className="bg-purple-800 w-full hover:bg-blue-600 px-4 py-2 rounded mr-2 text-sm">
              مشاهده دوره های مشابه
            </button>
            </div>



            {/* User Review */}
            <div className='w-full px-1 py-10'>
              <UserReviewForCourse />
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

