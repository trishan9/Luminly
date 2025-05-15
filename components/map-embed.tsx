"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

type MapEmbedProps = {
  address?: string
  zoom?: number
  height?: string
  className?: string
}

export default function MapEmbed({
  address = "Kathmandu, Nepal",
  zoom = 15,
  height = "100%",
  className = "",
}: MapEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address)

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.6417660325106!2d85.3200634520496!3d27.71863035168827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19003cb38457%3A0xff30cd6159a4f524!2sThe%20Beach%20House%20Bar%20%26%20Dining!5e0!3m2!1sen!2snp!4v1747298595888!5m2!1sen!2snp&zoom=${zoom}`

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setIsError(true)
  }

  return (
    <div className={`relative overflow-hidden rounded-md ${className}`} style={{ height }}>
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          <MapPin className="h-8 w-8 text-gray-400" />
        </div>
      )}

      {isError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200">
          <MapPin className="h-8 w-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600">Map could not be loaded</p>
        </div>
      )}

      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={handleLoad}
        onError={handleError}
        className={`${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        title="Google Maps location"
      ></iframe>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/70 to-transparent h-12 pointer-events-none"></div>
    </div>
  )
}
