'use client'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBasket, Users, MapIcon as City, UserRound, Heart } from 'lucide-react'

import "./styles.css";


type CourseItem = {
  title: string;
  linkHref: string;
  imageSrc?: string;
  courseType: string;
  score: number;
  teacher: string;
  participantsCounts: number;
  price: number;
  isLikedByUser?: boolean; 
}

const courseTypeMap: {
  HOZORI: string;
  ONLINE: string;
} = {
  HOZORI: 'حضوری',
  ONLINE: 'آنلاین'
}

export default function CourseItem({ title, linkHref, imageSrc, courseType, score, teacher, participantsCounts, price, isLikedByUser = false }: CourseItem) {
  
  const [isLikedByUserState, setIsLikedByUserState] = useState(isLikedByUser)
  
  
  return (
    <div dir="rtl" className=" w-full md:w-3/6 lg:w-2/6 mb-6 px-4 mb-7.5 font-[Yekan_Bakh] course-item">
      <div className="bg-white dark:bg-[#141414] border border-[#e5e5e5] rounded-md shadow-[0_2px_10px_#12131214] transition-all duration-300 ease-in-out overflow-hidden">
        <div className="relative flex items-center justify-center">
          <Link href={linkHref} className="w-full">
            <Image
              src={imageSrc || ''}
              alt={title}
              width={600}
              height={338}
              className="w-full rounded-t-md border-b border-[#e5e5e5]"
            />
          </Link>
          <Link
            href="?add-to-cart=3633"
            className="absolute -bottom-[18px] left-5 bg-[#4CAF50] text-white p-2 rounded-full border-4 border-white "
          >
            <ShoppingBasket className="w-5 h-5 text-left" />
          </Link>
          <div className=' absolute bottom-5 right-4 w-14'>
            <button onClick={() => setIsLikedByUserState(!isLikedByUserState)} className='translate-y-full opacity-0 text-white rounded-lg duration-700 transition ease-in-out py-2 px-3 mt-8 like-button'>
              <Heart fill={isLikedByUserState ? 'red' : 'none'} strokeWidth={isLikedByUserState ? 0 : 2} />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <h4 className="text-[15px] font-bold mb-2 leading-normal">
              <Link href={linkHref} className="text-[#efefef] hover:text-primary">
                {title}
              </Link>
            </h4>
            <div className="inline-block bg-primary text-white text-sm px-2 py-1 rounded">
              {courseTypeMap[courseType] || courseTypeMap["HOZORI"]}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center space-x-2 space-x-reverse transform translate-y-[7px]">
              <div className="text-yellow-400">★★★★★</div>
              <span className="text-white">بدون امتیاز ({score} رای)</span>
            </div>
            <div className="border bg-[#6E0072] hover:opacity-85 text-white px-4 py-1.5 rounded">
              <Link href="/teacher/زهرا-محمدی" className="flex items-center text-xs hover:text-primary">
                <UserRound className="w-4 h-4 ml-1" />
                {teacher}
              </Link>
            </div>
          </div>

          <div className="border-t border-[#6e0072] py-2.5 flex items-center justify-between">
            <div className="flex items-center text-white text-sm text-center w-full justify-center">
              <City className="w-4 h-4 ml-1" />
              <span>دوره آموزش {courseTypeMap[courseType] || courseTypeMap["HOZORI"]}</span>
            </div>
          </div>

          <div className=" py-2 flex items-center justify-between">
            <div
              className="flex items-center text-sm text-[#6c757d] bg-[#6E0072] px-2 py-1 rounded relative group"
              aria-label="تعداد شرکت کننده"
            >
              <Users className="w-4 h-4 ml-2" />
              <span>{participantsCounts}</span>
              <div className="absolute bottom-full right-1/2 transform translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 mb-1">
                <div className="bg-[#383838] text-white text-xs py-2 px-2.5 rounded whitespace-nowrap relative">
                  تعداد شرکت کننده
                  <div className="absolute top-full right-1/2 transform translate-x-1/2 border-8 border-transparent border-t-[#383838]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center text-base font-bold text-white">
              {price}<span className="text-sm mr-1">تومان</span>
            </div>
          </div>

          <div className='flex pt-3 items-start justify-center'>
            <button className="bg-green-500 w-full text-xs hover:bg-green-400 text-white font-bold py-3 border-b-4 border-green-700 hover:border-green-500 rounded">
              شرکت در این دوره آموزشی
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}