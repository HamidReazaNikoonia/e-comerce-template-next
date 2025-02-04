import { Clock, FileText, Lock, Unlock } from "lucide-react"

import { formatDuration } from '@/utils/Helpers';

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


interface File {
  _id: string
  filename: string
}

interface CourseObject {
  subject_title: string
  status: "PUBLIC" | "PRIVATE"
  duration: number
  files: File
}

interface ShowSubjectCourseProps {
  course_objects: CourseObject[]
}

export function ShowSubjectCourse({ course_objects }: ShowSubjectCourseProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {course_objects.map((subject, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
          <AccordionTrigger className="px-4 py-2 hover:no-underline">
            <div className="flex items-center justify-between w-full">
              <span className="font-semibold text-left">{subject.subject_title}</span>
              <div className="flex items-center space-x-2">
                <Badge variant={subject.status === "PUBLIC" ? "default" : "secondary"}>
                  {subject.status === "PUBLIC" ? (
                    <Unlock className="w-3 h-3 mr-1" />
                  ) : (
                    <Lock className="w-3 h-3 mr-1" />
                  )}
                  {subject.status}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatDuration(subject.duration)}
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>File Name</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-2 text-muted-foreground" />
                      {subject.files.filename}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {formatDuration(subject.duration)}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

