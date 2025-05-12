"use client"

import type React from "react"
import { useState } from "react"

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Form submitted successfully!")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-gray-200">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-gray-200">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-200">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
            placeholder="@gmail.com"
            required
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium mb-1 text-gray-200">
            Contact
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
            placeholder="Phone number"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1 text-gray-200">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
          required
        />
      </div>

      <div>
        <p className="block text-sm font-medium mb-2 text-gray-200">Choose the Service You're Interested In</p>
        <div className="flex flex-wrap gap-2">
          {["Web Development", "Server Maintenance", "Graphics & Web", "IT Consulting", "Digital Marketing", "SEO"].map(
            (service) => (
              <button
                key={service}
                type="button"
                onClick={() => handleServiceToggle(service)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  formData.services.includes(service)
                    ? "bg-yellow-400 text-navy font-medium"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {service}
              </button>
            ),
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
          placeholder="Tell us how we can help..."
          required
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-yellow-400 text-navy font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
        >
          Let's Connect
        </button>
      </div>
    </form>
  )
}
