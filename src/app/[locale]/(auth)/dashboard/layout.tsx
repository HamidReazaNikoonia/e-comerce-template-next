'use client';

import Link from "next/link"
import type React from "react"
import { LogOut } from 'lucide-react';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoadingSpinner from '@/components/LoadingSpiner';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useAuth from "@/hooks/useAuth";


// export const metadata: Metadata = {
//   title: "داشبورد کاربر",
//   description: "داشبورد کاربر برای پلتفرم تجارت الکترونیک",
// }

const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME || 'sepah';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {



  const router = useRouter();


  const { user } = useAuth();

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


  console.log('user', user);

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-2">
          <Button size="sm" className="w-full flex md:w-auto">
            <span>خروج</span>
            <LogOut size={18} />
          </Button>
        </div>

        <h2 className="text-sm md:text-xl text-gray-700 font-bold tracking-tight">
          <span> پنل کاربری : </span>
          <span className="text-primary-500"> {user?.first_name} </span>
          <span className="text-primary-500"> {user?.last_name} </span>

        </h2>

      </div>
      <Tabs defaultValue="overview" className="space-y-4 justify-center">
        <TabsList className="w-full overflow-x-auto justify-center">
          <TabsTrigger value="favorites" className="flex-shrink-0">
            <Link href="/dashboard/favorites">علاقه‌مندی‌ها</Link>
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex-shrink-0">
            <Link href="/dashboard/orders">سفارشات</Link>
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex-shrink-0">
            <Link href="/dashboard/courses">دوره‌ها</Link>
          </TabsTrigger>


          <TabsTrigger value="overview" className="flex-shrink-0">
            <Link href="/dashboard"> خانه</Link>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader dir="rtl">
              <CardTitle className="mb-2">پنل کاربری</CardTitle>
              <CardDescription>خلاصه‌ای از حساب کاربری شما</CardDescription>
            </CardHeader>
            <CardContent className="pr-2">{children}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader dir="rtl">
              <CardTitle>سفارشات</CardTitle>
              <CardDescription>لیست سفارشات شما</CardDescription>
            </CardHeader>
            <CardContent className="pr-2">{children}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>دوره‌ها</CardTitle>
              <CardDescription>لیست دوره‌های شما</CardDescription>
            </CardHeader>
            <CardContent className="pr-2">{children}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="favorites" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>علاقه‌مندی‌ها</CardTitle>
              <CardDescription>لیست محصولات و دوره‌های مورد علاقه شما</CardDescription>
            </CardHeader>
            <CardContent className="pr-2">{children}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


export const dynamic = 'force-dynamic';
