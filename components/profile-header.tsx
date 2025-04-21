import { Mail, Phone, MapPin } from "lucide-react"
import ThemeToggle from "./theme-toggle"

export default function ProfileHeader() {
  return (
    <div className="w-full bg-[#2d3e50] dark:bg-[#1a2533] text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative h-24 w-24 mr-6">
              <div className="absolute inset-0 bg-[#ffc107] rounded-full flex items-center justify-center text-[#2d3e50] dark:text-[#1a2533] text-4xl font-bold">
                MC
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h1 className="text-4xl font-bold text-[#ffc107]">Melissa Cantero</h1>
              </div>
              <p className="text-xl mt-2">Hospitality Professional</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-end mb-2">
              <ThemeToggle />
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-[#ffc107] mr-2" />
              <a href="mailto:melisssa.cantero@gmail.com" className="hover:text-[#ffc107] transition-colors">
                melisssa.cantero@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-[#ffc107] mr-2" />
              <a href="tel:+353 86 456 7380" className="hover:text-[#ffc107] transition-colors">
                +353 86 456 7380
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-[#ffc107] mr-2" />
              <span>70 Charlemont, Grace Park, Griffith Avenue - Dublin 9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
