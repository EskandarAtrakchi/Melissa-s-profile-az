import ProfileHeader from "@/components/profile-header"
import ProfileSection from "@/components/profile-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import CoursesSection from "@/components/courses-section"
import ContactSection from "@/components/contact-section"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <ProfileHeader />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProfileSection />
            <EducationSection />
            <SkillsSection />
            <CoursesSection />
          </div>
          <div className="lg:col-span-2">
            <ExperienceSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  )
}
