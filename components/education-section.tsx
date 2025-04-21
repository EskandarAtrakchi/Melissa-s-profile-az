"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin } from "lucide-react"

type Education = {
  id: string
  institution: string
  degree: string
  location: string
  year?: string
}

export default function EducationSection() {
  const educations: Education[] = [
    {
      id: "edu-1",
      institution: "UNIVERSIDAD CATOLICA",
      degree: "BUSINESS ADMINISTRATION",
      location: "Ciudad del Este, Paraguay",
    },
    {
      id: "edu-2",
      institution: "COLEGIO ANGLO AMERICANO",
      degree: "HS. DIPLOMA IN SCIENCE",
      location: "Ciudad del Este, Paraguay",
    },
    {
      id: "edu-3",
      institution: "JOHN I. SMITH K-8 CENTER",
      degree: "ELEMENTARY",
      location: "Miami Dade, Florida, USA",
    },
  ]

  return (
    <Card className="mb-8 border-none shadow-md dark:bg-slate-800">
      <CardHeader className="bg-[#ffc107] text-[#2d3e50] dark:text-[#1a2533]">
        <CardTitle className="text-2xl">EDUCATION</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          {educations.map((edu) => (
            <AccordionItem key={edu.id} value={edu.id}>
              <AccordionTrigger className="text-[#2d3e50] dark:text-slate-200 font-semibold">
                {edu.institution}
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-4 border-l-2 border-[#ffc107]">
                  <p className="font-medium dark:text-slate-200">{edu.degree}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-slate-400 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.year && <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">{edu.year}</p>}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
