"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsSection() {
  const softSkills = ["Commitment", "Teamwork", "Communication", "Multitasking", "Organization", "Friendly Attitude"]

  const technicalSkills = [
    "MS Office",
    "Corel Draw",
    "AutoCAD 2D/3D",
    "Adobe Lightroom",
    "Canva",
    "OPERA PMS",
    "Arcoov",
  ]

  const languageSkills = [
    { language: "SPANISH", level: "Native Language", percentage: 100 },
    { language: "ENGLISH", level: "C2 Proficiency", percentage: 95 },
    { language: "PORTUGUESE", level: "Advanced", percentage: 80 },
  ]

  return (
    <Card className="mb-8 border-none shadow-md dark:bg-slate-800">
      <CardHeader className="bg-[#ffc107] text-[#2d3e50] dark:text-[#1a2533]">
        <CardTitle className="text-2xl">SKILLS</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="soft" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="language">Languages</TabsTrigger>
          </TabsList>
          <TabsContent value="soft" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-100 dark:bg-slate-700 text-[#2d3e50] dark:text-slate-200 px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="technical" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-100 dark:bg-slate-700 text-[#2d3e50] dark:text-slate-200 px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="language" className="mt-4 space-y-4">
            {languageSkills.map((lang, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium dark:text-slate-200">{lang.language}</span>
                  <span className="text-sm text-gray-500 dark:text-slate-400">{lang.level}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                  <div
                    className="bg-[#2d3e50] dark:bg-[#ffc107] h-2.5 rounded-full"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
