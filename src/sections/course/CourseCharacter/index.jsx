import React from 'react';
import { WalletMinimal, Headset, Clock } from 'lucide-react';


export default function CourseCharacter() {
  return (
    <>
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
      </>
  )
}
