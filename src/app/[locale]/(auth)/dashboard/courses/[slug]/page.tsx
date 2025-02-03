'use client';
import { notFound, useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export default function CoursePage() {
  



  const {slug} = useParams<{ slug: string }>()
  console.log({slug});

  if (!slug) {
    notFound()
  }

  return (
    <div dir="rtl">
      <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">{`course.title`}</CardTitle>
        <CardDescription className="text-sm md:text-base">{`course.description`}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm md:text-base">{`course.content`}</div>
      </CardContent>
    </Card>
    </div>
  )
}

