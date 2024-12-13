'use client'
import React from 'react';
import { Clapperboard } from 'lucide-react';


// components
import CourseItem from '@/components/CourseItem';
import CourseListFilter from '@/sections/course/CourseListFilter';

export default function CourseList() {
  return (
    <>



      <div className='mx-8 justify-between flex mb-8'>

        {/* Filter Modal */}
        <CourseListFilter />

        <div className='flex'>
          <h3 className=' text-right mr-3 text-xl font-bold'> دوره ها</h3>
          <Clapperboard />
        </div>



      </div>
      <div className="flex w-full flex-wrap">
        <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
        <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
        <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
        <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
        <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
        <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
        <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
        <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
        <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />

      </div>
    </>
  )
}
