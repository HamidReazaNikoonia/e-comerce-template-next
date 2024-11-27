import { getTranslations, setRequestLocale } from 'next-intl/server';

import ProductListHeader from '@/sections/courses/ProductListHeader';
import ProductList from '@/sections/courses/ProductList';


type IAboutProps = {
  params: Promise<{ slug: string; locale: string }>;
};
export async function generateMetadata(props: IAboutProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });




  return (
    <div className='overflow-hidden pt-16 bg-black text-white min-h-screen'>
        <div className="container mx-auto pt-20">
          {/* Header */}
          <ProductListHeader />
        </div>

        <div className="px-4 pt-4">
          <ProductList />
        </div>
    </div>
  );
};
