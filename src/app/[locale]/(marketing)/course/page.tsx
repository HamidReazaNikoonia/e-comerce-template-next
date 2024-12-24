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

const fetchRepo = async () => {
  const res = await fetch('http://localhost:9000/v1/course', {
    next: { revalidate: 60 }, // Enables ISR (Incremental Static Regeneration)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};


export default async function Portfolio(props: IPortfolioProps) {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Portfolio',
  // });

  const coursesData = await fetchRepo();
  // console.log({coursesData: coursesData.data.courses})

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


      <CourseList data={coursesData.data} />

      </div>
    </div>
  );
};
