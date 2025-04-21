"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Mail, Phone, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
    }, 1500)
  }

  return (
    <Card className="border-none shadow-md dark:bg-slate-800">
      <CardHeader className="bg-[#2d3e50] text-white dark:bg-[#1a2533]">
        <CardTitle className="text-2xl">CONTACT ME</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#2d3e50] dark:text-slate-200">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-[#ffc107] p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-[#2d3e50] dark:text-[#1a2533]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">Email</p>
                  <a
                    href="mailto:melisssa.cantero@gmail.com"
                    className="text-[#2d3e50] hover:text-[#ffc107] dark:text-slate-200 dark:hover:text-[#ffc107] transition-colors"
                  >
                    melisssa.cantero@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#ffc107] p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-[#2d3e50] dark:text-[#1a2533]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">Phone</p>
                  <a
                    href="tel:+353 86 456 7380"
                    className="text-[#2d3e50] hover:text-[#ffc107] dark:text-slate-200 dark:hover:text-[#ffc107] transition-colors"
                  >
                    +353 86 456 7380
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-[#2d3e50] focus-visible:ring-[#ffc107] dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-[#2d3e50] focus-visible:ring-[#ffc107] dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-[#2d3e50] focus-visible:ring-[#ffc107] dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] border-[#2d3e50] focus-visible:ring-[#ffc107] dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#ffc107] text-[#2d3e50] hover:bg-[#e6af06] dark:text-[#1a2533] w-full"
              >
                {isSubmitting ? (
                  <>
                    <Send className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
        <Toaster />
      </CardContent>
    </Card>
  )
}
