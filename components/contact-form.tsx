"use client"

import type React from "react"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { sendEmail } from "@/lib/email"
import { cn } from "@/lib/utils"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    company: "",
    services: [] as string[],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]

      return { ...prev, services }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setSubmitStatus({ type: null, message: "" })
      setIsSubmitting(true)
      const result = await sendEmail(formData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          company: "",
          services: [],
          message: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again later.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      })
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus.type && (
        <div
          className={cn("p-4 rounded-md", submitStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800")}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name
          </label>
          
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 bg-gray-100 border border-gray-200 rounded-sm"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name
          </label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 bg-gray-100 border border-gray-200 rounded-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Your Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-100 border border-gray-200 rounded-sm"
            placeholder="example@gmail.com"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium mb-1">
            Contact
          </label>

          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-3 bg-gray-100 border border-gray-200 rounded-sm"
            placeholder="+977-9841XXXX"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1">
          Company Name
        </label>

        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 bg-gray-100 border border-gray-200 rounded-sm"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <p className="block text-sm font-medium mb-2">Choose the Service You're Interested In</p>
        <div className="flex flex-wrap gap-2">
          {["Web Development", "Server Maintenance", "Graphics & Web", "IT Consulting", "Digital Marketing", "SEO"].map(
            (service) => (
              <button
                key={service}
                type="button"
                onClick={() => handleServiceToggle(service)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  formData.services.includes(service)
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                disabled={isSubmitting}
              >
                {service}
              </button>
            ),
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 bg-gray-100 border border-gray-200 rounded-sm"
          placeholder="Tell us how we can help..."
          required
          disabled={isSubmitting}
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2 h-4 w-4" /> Sending...
            </>
          ) : (
            "Let's Connect"
          )}
        </button>
      </div>
    </form>
  )
}
