import { getI18nPath } from '@/utils/Helpers';

import { getTranslations } from 'next-intl/server';

import AuthSection from '@/sections/auth/AuthForm'

type ISignInPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ISignInPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function SignInPage(props: ISignInPageProps) {
  // const { locale } = await props.params;

  return (
    <AuthSection />
  );
};
