import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfileSection() {
  return (
    <Card className="mb-8 border-none shadow-md dark:bg-slate-800">
      <CardHeader className="bg-[#ffc107] text-[#2d3e50] dark:text-[#1a2533]">
        <CardTitle className="text-2xl">PROFILE</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 dark:text-slate-200">
        <p className="text-gray-700 dark:text-slate-300">
          Dynamic, hardworking and honest individual who is always willing to learn new skills. Friendly, helpful,
          polite and responsible person with a good sense of humor who is able to work independently in a busy
          fast-paced environment and also within a team setting.
        </p>
      </CardContent>
    </Card>
  )
}
