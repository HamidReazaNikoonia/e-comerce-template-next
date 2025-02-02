import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  {
    id: "1",
    title: "مبانی توسعه وب",
    description: "یادگیری اصول HTML، CSS و JavaScript",
    progress: 75,
  },
  {
    id: "2",
    title: "تکنیک‌های پیشرفته React",
    description: "تسلط بر مفاهیم پیشرفته در توسعه React",
    progress: 30,
  },
  {
    id: "3",
    title: "تسلط بر Node.js و Express",
    description: "ساخت برنامه‌های قدرتمند سمت سرور با Node.js و Express",
    progress: 0,
  },
]

export default function CoursesPage() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id} className="flex flex-col">
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex items-center space-x-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                ٪{course.progress}
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/dashboard/courses/${course.id}`}>مشاهده دوره</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

