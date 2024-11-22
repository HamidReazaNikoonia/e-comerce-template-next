// import { Sponsors } from '@/components/Sponsors';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import MainSwiper from '@/components/swiper/MainSwiper';

import ServiceCardItem from '@/components/Card/ServiceCardItem';


// sections
import CoursesCardSection from '../../../sections/home/CoursesCardSection';
import ServiceSwiper from '../../../sections/home/ServiceCardSection';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <div className=" overflow-hidden pt-16 bg-black">

      {/* Main Slider In md Screen */}
      <div className="hidden md:flex">
        <MainSwiper />
      </div>

      {/* Service Card Item */}
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ServiceCardItem title="پژوهشکده هوش مصنوعی" subtitle="دنیایی از تکنولوژی های جدید"
            backgroundImage="https://aisun-ci.ir/wp-content/uploads/2024/08/photography5.jpg"
            buttonText="ورود به این بخش" buttonLink="/" />

          <ServiceCardItem title="پژوهشکده هوش مصنوعی" subtitle="دنیایی از تکنولوژی های جدید"
            backgroundImage="https://aisun-ci.ir/wp-content/uploads/2024/08/photography5.jpg"
            buttonText="ورود به این بخش" buttonLink="/" />

          <ServiceCardItem title="پژوهشکده هوش مصنوعی" subtitle="دنیایی از تکنولوژی های جدید"
            backgroundImage="https://aisun-ci.ir/wp-content/uploads/2024/08/photography5.jpg"
            buttonText="ورود به این بخش" buttonLink="/" />


          <ServiceCardItem title="پژوهشکده هوش مصنوعی" subtitle="دنیایی از تکنولوژی های جدید"
            backgroundImage="https://aisun-ci.ir/wp-content/uploads/2024/08/photography5.jpg"
            buttonText="ورود به این بخش" buttonLink="/" />

        </div>
      </div>


      {/* Service Card Swiper */}
      <div className="container mx-auto py-20">
        <ServiceSwiper />
      </div>


      {/* Courses Card Section */}
      <div className="container mx-auto py-20">
        <CoursesCardSection />
      </div>
    </div>
  );
};
