import React from 'react'
import { ChevronsLeft, ClipboardList } from 'lucide-react';
import CourseItem from '@/components/CourseItem';

export default function CoursesCardSection() {
return (
<>
    {/* Header */}
    <div className='flex justify-between w-full pb-8 px-4'>

        <button
            className="bg-transparent hover:bg-blue-500 text-white font-medium hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-md inline-flex items-center">
            <ChevronsLeft className='mr-2' />
            مشاهده همه
        </button>
        <div className='py-2 inline-flex items-center  text-lg text-white font-semibold'>
        
           دوره های آموزشی 
          <ClipboardList className='ml-3' />
        </div>
    </div>
    <div className="flex w-full flex-wrap">
    <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
    <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000}/>
    <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000}/>
    <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000}/>
    <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000}/>
    <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000}/>
   
    </div>
    
</>
)
}
