"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import ExperiencePopup from "./experience-popup"

type Experience = {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: string
  description: string[]
}

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)

  const experiences: Experience[] = [
    {
      id: 1,
      title: "FRONT OFFICE SUPERVISOR & RECEPTIONIST",
      company: "CAMDEN COURT HOTEL",
      location: "Dublin, Ireland",
      period: "March 2022 - present",
      type: "Part-Time",
      description: [
        "Lead and perform all front desk duties, ensure efficient and smooth operation at front desk",
        "Check-in and check-out guests, make reservations, ensure guest satisfaction",
        "Handling in-house communication, greeting and welcoming guests in a courteous and pleasant manner",
      ],
    },
    {
      id: 2,
      title: "HOSTESS & WAITING STAFF",
      company: "McGETTIGAN'S COOKHOUSE",
      location: "Dublin, Ireland",
      period: "January - March 2022",
      type: "Part-Time",
      description: [
        "Seat guest and manage the seating chart",
        "Respond to guest inquiries and requests in timely, friendly and efficient manner",
        "Taking orders, delivering food and drinks, cash handling",
      ],
    },
    {
      id: 3,
      title: "BILINGUAL RECEPTIONIST",
      company: "HOTEL TRESDE",
      location: "Ciudad del Este, Paraguay",
      period: "Jul 2017 - Nov 2021",
      type: "Part-Time",
      description: [
        "Trained staff with basic English to be able to attend and respond foreign guest inquiries",
        "Perform reception duties while training, greet and attend guest, run errands to assist guest",
        "Arrange transportation & excursion upon request",
      ],
    },
    {
      id: 4,
      title: "MANAGER",
      company: "CAFÉ BISTRO",
      location: "Ciudad del Este, Paraguay",
      period: "Oct. 2016 - 2017",
      type: "Full-Time",
      description: [
        "Supervising staff, monitoring daily expenses & income",
        "Ordering Supplies, Inventory Management, cash handling",
        "Manage transactions and communicate with clients",
        "Manage social media",
      ],
    },
    {
      id: 5,
      title: "ASSISTANT MANAGER",
      company: "TAQUITOS EL MERO MERO",
      location: "Ciudad del Este, Paraguay",
      period: "Nov. 2011 - 2016",
      type: "Full-Time",
      description: [
        "Supervising staff, monitoring daily expenses & income",
        "Money Handling, Inventory Management",
        "Manage transactions and communicate with clients, waitress",
      ],
    },
    {
      id: 6,
      title: "RECEPTIONIST - SECRETARY",
      company: "ENTERPRISE CONSULTING",
      location: "Ciudad del Este, Paraguay",
      period: "Nov. 2008 - 2011",
      type: "Part-Time",
      description: [
        "Answering calls, taking messages, typing and preparing reports & presentations",
        "Meeting greeting clients, filing, handling correspondence",
      ],
    },
  ]

  return (
    <>
      <Card className="mb-8 border-none shadow-md dark:bg-slate-800">
        <CardHeader className="bg-[#2d3e50] text-white dark:bg-[#1a2533]">
          <CardTitle className="text-2xl">EXPERIENCE</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-8 border-l-2 border-[#ffc107] pb-8 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 p-4 rounded-md transition-colors"
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="absolute w-4 h-4 bg-[#ffc107] rounded-full -left-[9px] top-0"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-bold text-lg text-[#2d3e50] dark:text-slate-200">{exp.company}</h3>
                  <Badge
                    variant="outline"
                    className="bg-[#ffc107] text-[#2d3e50] dark:text-[#1a2533] border-none md:ml-2 mt-1 md:mt-0 w-fit"
                  >
                    {exp.type}
                  </Badge>
                </div>
                <h4 className="font-semibold text-gray-700 dark:text-slate-300">{exp.title}</h4>
                <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-500 dark:text-slate-400 mt-2 space-y-1 md:space-y-0 md:space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {selectedExperience && (
        <ExperiencePopup experience={selectedExperience} onClose={() => setSelectedExperience(null)} />
      )}
    </>
  )
}
