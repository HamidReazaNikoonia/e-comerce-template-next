import Image from 'next/image';
import Link from 'next/link';
// import { getTranslations, setRequestLocale } from 'next-intl/server';
import CourseListHeader from '@/sections/course/CourseListHeader';
import HeroSwiperSection from '@/sections/course/HeroSwiperSection';
import CourseCategoryCardSection from '@/sections/course/CourseCategoryCard';
import { Clapperboard } from 'lucide-react';

// components
import CourseItem from '@/components/CourseItem';


type IPortfolioProps = {
  params: Promise<{ locale: string }>;
};

// export async function generateMetadata(props: IPortfolioProps) {
//   const { locale } = await props.params;
//   const t = await getTranslations({
//     locale,
//     namespace: 'Portfolio',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }

export default async function Portfolio(props: IPortfolioProps) {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Portfolio',
  // });

  return (
    <div className='overflow-hidden pt-16 bg-black text-white min-h-screen'>
      {/* <div className="container mx-auto pt-20">
        <CourseListHeader />
      </div> */}

      
      
      <div className=' mx-8 pt-16'>
        <HeroSwiperSection />
      </div>


      
      <div className=' container mx-auto my-28'>
        <CourseCategoryCardSection />
      </div>


      <div className=' container mx-auto mb-24'>
      <div className='mx-8 justify-end flex mb-8'>
      <h3 className=' text-right mr-3 text-xl font-bold'> دوره ها</h3>
      <Clapperboard />
      </div>
      <div className="flex w-full flex-wrap">
      <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
      <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
      <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
      <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
      <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
      <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />
      <CourseItem title="با هوش مصنوعی ویدیو بساز! (حضوری)" linkHref={`/`} imageSrc="https://aisun-ci.ir/wp-content/uploads/2024/08/ساخت-ویدئو-با-هوش-مصنوعی-600x338.jpg" courseType="HOZORI" score={5} teacher="زهرا محمدی" participantsCounts={30} price={30000} isLikedByUser />

      </div>
      </div>
    </div>
  );
};
