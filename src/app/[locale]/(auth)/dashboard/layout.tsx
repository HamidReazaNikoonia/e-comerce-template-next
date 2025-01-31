'use client';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LogOut } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpiner';

const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME || 'sepah';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  const t = useTranslations('DashboardLayout');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  // Redirect to login page if the user is not authenticated
  useEffect(() => {
    // Check if the user is authenticated
    const storedAuth = localStorage.getItem(`${PROJECT_NAME}-isAuthenticated`);
    const authToken = localStorage.getItem(`${PROJECT_NAME}-access`);

    if (!authToken || !storedAuth) {
      // Redirect to login page if the user is not authenticated
      router.push('/sign-in');
    } else {
      // If authenticated, set loading to false
      setIsLoading(false);
    }
  }, [router]);

  // Show a loading spinner or nothing while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <button
              className="border-none flex items-center  text-gray-700 hover:text-gray-900"
              type="button"
              onClick={() => {
                // Clear authentication data and redirect to sign-in page
                localStorage.removeItem(`${PROJECT_NAME}-isAuthenticated`);
                localStorage.removeItem(`${PROJECT_NAME}-accesss`);
                router.push('/sign-in');
              }}
            >
              <div className='mr-2'>خروج</div>
              <LogOut size={20} />
            </button>
          </li>

          <li>
            {/* <LocaleSwitcher /> */}
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <Link
              href="/dashboard/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('dashboard_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user-profile/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('user_profile_link')}
            </Link>
          </li>
        </>
      }
    >
      {props.children}
    </BaseTemplate>
  );
}

export const dynamic = 'force-dynamic';