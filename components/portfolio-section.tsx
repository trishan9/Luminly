"use client"

import { useState } from "react"
import Image from "next/image"
import ProjectModal, { type Project } from "./project-modal"

// Sample project data
const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "A comprehensive e-commerce platform built for a fashion retailer. The solution includes product catalog management, user authentication, shopping cart functionality, payment processing, and order management. The platform was designed with a focus on mobile responsiveness and performance optimization.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform",
    detailImages: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform"],
    clientName: "FashionHub Inc.",
    duration: "3 months",
    link: "https://example.com/ecommerce",
  },
  {
    id: "branding",
    title: "Brand Identity",
    category: "Graphics & Web Design",
    description:
      "Complete brand identity design for a startup tech company. The project included logo design, color palette selection, typography guidelines, business card design, and a comprehensive brand style guide. The design focuses on conveying innovation and reliability.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform",
    detailImages: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform"],
    clientName: "TechNova",
    duration: "6 weeks",
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    category: "App Development",
    description:
      "A fitness tracking mobile application that allows users to track workouts, set goals, and monitor progress. Features include custom workout plans, progress visualization, social sharing, and integration with wearable devices. The app was built for both iOS and Android platforms.",
    technologies: ["React Native", "Firebase", "Redux", "Google Fit API", "Apple HealthKit"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform",
    detailImages: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform"],
    clientName: "FitTrack",
    duration: "4 months",
    link: "https://example.com/fittrack",
    githubLink: "https://github.com/example/fittrack",
  },
  {
    id: "seo-campaign",
    title: "SEO Campaign",
    category: "Digital Marketing",
    description:
      "Comprehensive SEO strategy and implementation for a real estate company. The campaign included keyword research, on-page optimization, content strategy, link building, and technical SEO improvements. The project resulted in a 150% increase in organic traffic and improved search engine rankings.",
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "WordPress"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform",
    detailImages: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform"],
    clientName: "Prime Properties",
    duration: "6 months",
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    category: "Server Maintenance",
    description:
      "Migration of a legacy on-premises infrastructure to a cloud-based solution for a financial services company. The project included architecture design, data migration, security implementation, and performance optimization. The migration resulted in improved scalability, reduced costs, and enhanced disaster recovery capabilities.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform",
    detailImages: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform"],
    clientName: "Financial Solutions Inc.",
    duration: "5 months",
  },
  {
    id: "crm-system",
    title: "CRM System",
    category: "IT Consulting",
    description:
      "Custom CRM system development for a healthcare provider. The solution includes patient management, appointment scheduling, billing integration, and reporting dashboards. The system was designed to comply with healthcare regulations and integrate with existing healthcare systems.",
    technologies: ["Angular", "Node.js", "PostgreSQL", "Docker", "Azure"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform",
    detailImages: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform"],
    clientName: "HealthCare Partners",
    duration: "7 months",
    link: "https://example.com/healthcare-crm",
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    category: "Web Development",
    description:
      "Interactive analytics dashboard for a marketing agency to visualize campaign performance and client metrics. The dashboard includes real-time data visualization, custom reporting, and automated insights. The solution integrates with multiple data sources and marketing platforms.",
    technologies: ["React", "D3.js", "Node.js", "GraphQL", "MongoDB"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform",
    detailImages: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=600&width=400&text=E-commerce+Platform"],
    clientName: "MarketEdge Agency",
    duration: "3 months",
    link: "https://example.com/analytics",
    githubLink: "https://github.com/example/analytics",
  },
]

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setSelectedProject(null)
    }, 300)
  }

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our recent projects and success stories</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Left column */}
          <div className="col-span-1 space-y-4">
            <div
              className="portfolio-item bg-gray-100 aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group cursor-pointer"
              onClick={() => openProjectModal(projects[0])}
            >
              <Image
                src={projects[0].image || "/placeholder.svg"}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-bold">{projects[0].title}</h3>
                  <p className="text-sm text-gray-200">{projects[0].category}</p>
                </div>
              </div>
            </div>
            <div
              className="portfolio-item bg-gray-100 aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group cursor-pointer"
              onClick={() => openProjectModal(projects[1])}
            >
              <Image
                src={projects[1].image || "/placeholder.svg"}
                alt={projects[1].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-bold">{projects[1].title}</h3>
                  <p className="text-sm text-gray-200">{projects[1].category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column */}
          <div className="col-span-1 space-y-4">
            <div
              className="portfolio-item bg-gray-100 aspect-square rounded-xl overflow-hidden shadow-md relative group cursor-pointer"
              onClick={() => openProjectModal(projects[2])}
            >
              <Image
                src={projects[2].image || "/placeholder.svg"}
                alt={projects[2].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-bold">{projects[2].title}</h3>
                  <p className="text-sm text-gray-200">{projects[2].category}</p>
                </div>
              </div>
            </div>
            <div
              className="portfolio-item bg-gray-100 aspect-square rounded-xl overflow-hidden shadow-md relative group cursor-pointer"
              onClick={() => openProjectModal(projects[3])}
            >
              <Image
                src={projects[3].image || "/placeholder.svg"}
                alt={projects[3].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-bold">{projects[3].title}</h3>
                  <p className="text-sm text-gray-200">{projects[3].category}</p>
                </div>
              </div>
            </div>
            <div
              className="portfolio-item bg-gray-100 aspect-square rounded-xl overflow-hidden shadow-md relative group cursor-pointer"
              onClick={() => openProjectModal(projects[4])}
            >
              <Image
                src={projects[4].image || "/placeholder.svg"}
                alt={projects[4].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-bold">{projects[4].title}</h3>
                  <p className="text-sm text-gray-200">{projects[4].category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-1 space-y-4">
            <div
              className="portfolio-item bg-gray-100 aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group cursor-pointer"
              onClick={() => openProjectModal(projects[5])}
            >
              <Image
                src={projects[5].image || "/placeholder.svg"}
                alt={projects[5].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-bold">{projects[5].title}</h3>
                  <p className="text-sm text-gray-200">{projects[5].category}</p>
                </div>
              </div>
            </div>
            <div
              className="portfolio-item bg-gray-100 aspect-[3/4] rounded-xl overflow-hidden shadow-md relative group cursor-pointer"
              onClick={() => openProjectModal(projects[6])}
            >
              <Image
                src={projects[6].image || "/placeholder.svg"}
                alt={projects[6].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-bold">{projects[6].title}</h3>
                  <p className="text-sm text-gray-200">{projects[6].category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={closeProjectModal} project={selectedProject} />
    </section>
  )
}
