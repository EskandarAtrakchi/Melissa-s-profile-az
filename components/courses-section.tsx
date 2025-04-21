"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"

type Course = {
  id: number
  title: string
  institution: string
  period: string
}

export default function CoursesSection() {
  const [isOpen, setIsOpen] = useState(false)

  const courses: Course[] = [
    {
      id: 1,
      title: "HOTEL MANAGEMENT: Distribution, Revenue and Demand Management Specialization",
      institution: "ESSEC Business School",
      period: "2023 - Present",
    },
    {
      id: 2,
      title: "HOSPITALITY MANAGMENT STUDIES: Hotel Operations",
      institution: "Alison 2022",
      period: "2022",
    },
    {
      id: 3,
      title: "MANUAL HANDLING",
      institution: "Safeco",
      period: "March 2022",
    },
    {
      id: 4,
      title: "FUNDAMENTALS OF DIGITAL MARKETING",
      institution: "Google Digital Garage",
      period: "2021",
    },
    {
      id: 5,
      title: "TEACHING KNOWLEDGE TEST MODULE 1",
      institution: "Band 3 Cambridge Assessment",
      period: "2021",
    },
    {
      id: 6,
      title: "SPECIFIC PRODUCT APPLICATION",
      institution: "Unilever Food Solutions",
      period: "July 2013",
    },
    {
      id: 7,
      title: "TEACHER'S TRAINING",
      institution: "Centro Cultural Paraguayo Americano",
      period: "2011",
    },
    {
      id: 8,
      title: "THE ADVANCED ACADEMIC PROGRAM",
      institution: "Centro Cultural Paraguayo Americano",
      period: "2007",
    },
    {
      id: 9,
      title: "AUTOCAD 2D",
      institution: "CDM Informatica",
      period: "2011",
    },
  ]

  return (
    <Card className="mb-8 border-none shadow-md dark:bg-slate-800">
      <CardHeader className="bg-[#ffc107] text-[#2d3e50] dark:text-[#1a2533]">
        <CardTitle className="text-2xl">COURSES</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <div className="space-y-4">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="border-l-2 border-[#2d3e50] dark:border-[#ffc107] pl-4 py-1">
                <h3 className="font-medium text-[#2d3e50] dark:text-slate-200">{course.title}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400">{course.institution}</p>
                <p className="text-sm text-gray-500 dark:text-slate-400">{course.period}</p>
              </div>
            ))}
          </div>

          <CollapsibleContent className="space-y-4 mt-4">
            {courses.slice(3).map((course) => (
              <div key={course.id} className="border-l-2 border-[#2d3e50] dark:border-[#ffc107] pl-4 py-1">
                <h3 className="font-medium text-[#2d3e50] dark:text-slate-200">{course.title}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400">{course.institution}</p>
                <p className="text-sm text-gray-500 dark:text-slate-400">{course.period}</p>
              </div>
            ))}
          </CollapsibleContent>

          <CollapsibleTrigger className="w-full mt-4">
            <div className="flex items-center justify-center text-[#2d3e50] dark:text-[#ffc107] hover:text-[#1e2a36] dark:hover:text-[#e6af06] transition-colors">
              {isOpen ? (
                <>
                  <span className="mr-1">Show Less</span>
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  <span className="mr-1">Show More</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </div>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
