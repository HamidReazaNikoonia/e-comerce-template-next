import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const courses = [
  {
    id: "1",
    title: "مبانی توسعه وب",
    description: "یادگیری اصول HTML، CSS و JavaScript",
    content: "این دوره مفاهیم اساسی توسعه وب را پوشش می‌دهد...",
  },
  {
    id: "2",
    title: "تکنیک‌های پیشرفته React",
    description: "تسلط بر مفاهیم پیشرفته در توسعه React",
    content: "در این دوره، شما مفاهیم پیشرفته React را خواهید آموخت...",
  },
  {
    id: "3",
    title: "تسلط بر Node.js و Express",
    description: "ساخت برنامه‌های قدرتمند سمت سرور با Node.js و Express",
    content: "این دوره جامع به شما آموزش می‌دهد که چگونه برنامه‌های قوی سمت سرور بسازید...",
  },
]

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.id === params.slug)

  if (!course) {
    notFound()
  }

  return (
    <div>
      <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">{course.title}</CardTitle>
        <CardDescription className="text-sm md:text-base">{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm md:text-base">{course.content}</div>
      </CardContent>
    </Card>
    </div>
  )
}

