import { getTranslations, setRequestLocale } from 'next-intl/server';

import ProductListHeader from '@/sections/productList/ProductListHeader';


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
        <div className="container mx-auto py-20">
          {/* Header */}
          <ProductListHeader />
        </div>
    </div>
  );
};
