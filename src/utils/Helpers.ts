import { AppConfig } from './AppConfig';

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === AppConfig.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};


export const isEmpty = function(string: string | null) {
  if (!string) return true;
  // This doesn't work the same way as the isEmpty function used 
  // in the first example, it will return true for strings containing only whitespace
  return (string.length === 0 || !string.trim());
};


export const filterPriceNumber = (priceNumber: number) => {
  return priceNumber.toLocaleString('fa-IR')
}


export const storeAuthToken = (tokens: {access: {token: string}, refresh: {token: string}}) => { 
  localStorage.setItem('access', tokens.access.token);
  localStorage.setItem('refresh', tokens.refresh.token);
 }