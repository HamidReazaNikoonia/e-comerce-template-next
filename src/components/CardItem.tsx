import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBasket, ClapperboardIcon as ChalkboardTeacher, Users, MapIcon as City } from 'lucide-react'

export default function CourseItem() {
  return (
    <div dir="rtl" className="w-full px-4 mb-7.5 font-[Yekan_Bakh]">
      <div className="bg-white dark:bg-[#141414] border border-[#e5e5e5] rounded-md shadow-[0_2px_10px_#12131214] transition-all duration-300 ease-in-out overflow-hidden">
        <div className="relative flex items-center justify-center">
          <Link href="/product/با-هوش-مصنوعی-ویدیو-بساز-حضوری" className="w-full">
            <Image
              src="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg"
              alt="با هوش مصنوعی ویدیو بساز! (حضوری)"
              width={600}
              height={338}
              className="w-full rounded-t-md border-b border-[#e5e5e5]"
            />
          </Link>
          <Link
            href="?add-to-cart=3633"
            className="absolute -bottom-[18px] right-5 bg-[#4CAF50] text-white p-2 rounded-full border-4 border-white"
          >
            <ShoppingBasket className="w-5 h-5" />
          </Link>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <h4 className="text-[15px] font-bold mb-2 leading-normal">
              <Link href="/product/با-هوش-مصنوعی-ویدیو-بساز-حضوری" className="text-[#efefef] hover:text-primary">
                با هوش مصنوعی ویدیو بساز! (حضوری)
              </Link>
            </h4>
            <div className="inline-block bg-primary text-primary-foreground text-sm px-2 py-1 rounded">حضوری</div>
          </div>

          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center space-x-2 space-x-reverse transform translate-y-[7px]">
              <div className="text-yellow-400">★★★★★</div>
              <span className="text-muted-foreground">بدون امتیاز (0 رای)</span>
            </div>
            <div className="border border-[#6E0072] text-white px-1.5 py-0.5 rounded">
              <Link href="/teacher/زهرا-محمدی" className="flex items-center hover:text-primary">
                <ChalkboardTeacher className="w-4 h-4 ml-1" />
                زهرا محمدی
              </Link>
            </div>
          </div>

          <div className="border-t border-[#6e0072] py-1.5 px-4 text-[0.9375rem] flex items-center justify-between">
            <div className="flex items-center text-muted-foreground">
              <City className="w-4 h-4 ml-1" />
              <span>دوره آموزش حضوری</span>
            </div>
          </div>

          <div className="border-t border-[#6e0072] py-1.5 px-4 text-[0.9375rem] flex items-center justify-between">
            <div 
              className="flex items-center text-[#6c757d] bg-[#e3e6ec] pl-2.5 pr-[10px] rounded relative group"
              aria-label="تعداد شرکت کننده"
            >
              <Users className="w-4 h-4 p-[7px]" />
              <span>0 شرکت کننده</span>
              <div className="absolute bottom-full right-1/2 transform translate-x-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 mb-1">
                <div className="bg-[#383838] text-white text-xs py-2 px-2.5 rounded whitespace-nowrap relative">
                  تعداد شرکت کننده
                  <div className="absolute top-full right-1/2 transform translate-x-1/2 border-8 border-transparent border-t-[#383838]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center text-base font-bold text-[#6E0072]">
              300,000 <span className="text-sm mr-1">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}