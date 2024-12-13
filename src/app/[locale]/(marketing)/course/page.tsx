import Image from 'next/image';
import Link from 'next/link';
// import { getTranslations, setRequestLocale } from 'next-intl/server';
import CourseListHeader from '@/sections/course/CourseListHeader';
import HeroSwiperSection from '@/sections/course/HeroSwiperSection';
import CourseCategoryCardSection from '@/sections/course/CourseCategoryCard';
import CourseList from '@/sections/course/CourseList';





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


      <CourseList />

      </div>
    </div>
  );
};
