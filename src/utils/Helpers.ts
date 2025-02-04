import { AppConfig } from './AppConfig';


const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME ||  'sepah';

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

export const toPersianDigits = (number: string) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹"; // Persian numbers
  return number.replace(/\d/g, (d) => persianDigits[d]); // Replace each digit
};



export const storeAuthToken = (tokens: {access: {token: string}, refresh: {token: string}}, userDoc: any) => { 
  localStorage.setItem(`${PROJECT_NAME}-access`, tokens.access.token);
  localStorage.setItem(`${PROJECT_NAME}-refresh`, tokens.refresh.token);
  localStorage.setItem(`${PROJECT_NAME}-lastLogin`, Date.now().toString());
  localStorage.setItem(`${PROJECT_NAME}-isAuthenticated`, 'true');
  localStorage.setItem(`${PROJECT_NAME}-user`, JSON.stringify(userDoc));
 }


 export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (hours > 0) {
    return `${hours}h ${remainingMinutes}m`
  } else {
    return `${remainingMinutes}m`
  }
}