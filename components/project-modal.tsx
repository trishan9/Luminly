"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ExternalLink, Github } from "lucide-react"

type ProjectModalProps = {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export type Project = {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  detailImages?: string[]
  clientName?: string
  duration?: string
  link?: string
  githubLink?: string
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden"
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  if (!isOpen || !project) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-transform duration-300 ${
          isAnimating ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="relative">
          <div className="h-64 md:h-80 w-full relative">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
          <div className="absolute bottom-4 left-6 text-white">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-white/80">{project.category}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Client and Duration */}
          {(project.clientName || project.duration) && (
            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              {project.clientName && (
                <div>
                  <span className="text-gray-500 block">Client</span>
                  <span className="font-medium">{project.clientName}</span>
                </div>
              )}
              {project.duration && (
                <div>
                  <span className="text-gray-500 block">Duration</span>
                  <span className="font-medium">{project.duration}</span>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
            <p className="text-gray-700">{project.description}</p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Images */}
          {project.detailImages && project.detailImages.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Project Gallery</h4>
              <div className="grid grid-cols-2 gap-4">
                {project.detailImages.map((img, index) => (
                  <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${project.title} detail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 mt-8">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy-light transition-colors"
              >
                <ExternalLink size={16} />
                Visit Project
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Github size={16} />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
