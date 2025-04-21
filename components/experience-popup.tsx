"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

type Experience = {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: string
  description: string[]
}

interface ExperiencePopupProps {
  experience: Experience
  onClose: () => void
}

export default function ExperiencePopup({ experience, onClose }: ExperiencePopupProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] dark:bg-slate-800">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-xl text-[#2d3e50] dark:text-slate-200">{experience.company}</DialogTitle>
              <DialogDescription className="text-base font-medium mt-1 dark:text-slate-300">
                {experience.title}
              </DialogDescription>
            </div>
            <Badge variant="outline" className="bg-[#ffc107] text-[#2d3e50] dark:text-[#1a2533] border-none">
              {experience.type}
            </Badge>
          </div>
        </DialogHeader>

        <div className="flex flex-col text-sm text-gray-500 dark:text-slate-400 mt-2 space-y-1">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{experience.period}</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold mb-2 text-[#2d3e50] dark:text-slate-200">Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-2">
            {experience.description.map((item, index) => (
              <li key={index} className="text-gray-700 dark:text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <DialogFooter className="mt-6">
          <Button
            onClick={onClose}
            className="bg-[#2d3e50] hover:bg-[#1e2a36] dark:bg-[#1a2533] dark:hover:bg-[#0f1520]"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
