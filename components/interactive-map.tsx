"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

declare global {
  interface Window {
    L: any
  }
}

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return

    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        link.crossOrigin = ""
        document.head.appendChild(link)
      }

      // Load JS
      if (!window.L) {
        const script = document.createElement("script")
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        script.crossOrigin = ""

        return new Promise((resolve) => {
          script.onload = resolve
          document.head.appendChild(script)
        })
      }
    }

    const initializeMap = async () => {
      await loadLeaflet()

      if (!window.L || !mapRef.current || mapInstanceRef.current) return

      // Coordinates for the specified location
      const lat = 33.71204279448368
      const lng = 73.05782145767205

      // Initialize map
      const map = window.L.map(mapRef.current, {
        center: [lat, lng],
        zoom: 15,
        zoomControl: true,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
      })

      // Add tile layer with better styling
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      // Custom marker icon
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            background-color: #10b981;
            width: 40px;
            height: 40px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              color: white;
              font-size: 16px;
              transform: rotate(45deg);
              font-weight: bold;
            ">📍</div>
          </div>
        `,
        className: "custom-marker",
        iconSize: [40, 40],
        iconAnchor: [20, 35],
        popupAnchor: [0, -35],
      })

      // Add marker
      const marker = window.L.marker([lat, lng], { icon: customIcon }).addTo(map)

      // Add popup
      marker.bindPopup(`
        <div style="text-align: center; padding: 15px; min-width: 250px; font-family: system-ui;">
          <h3 style="margin: 0 0 10px 0; color: #10b981; font-weight: bold; font-size: 16px;">Arz Office</h3>
          <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">ISE Tower</p>
          <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Blue Area, Islamabad</p>
          <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">Pakistan</p>
          <div style="border-top: 1px solid #eee; padding-top: 8px; margin-top: 8px;">
            <p style="margin: 0; font-size: 12px; color: #888;">
              📞 +92 349 0029815<br>
              📧 letstalk@arz.lat
            </p>
          </div>
        </div>
      `)

      // Open popup by default
      marker.openPopup()

      mapInstanceRef.current = map

      // Hide loading indicator
      const loadingElement = document.getElementById("map-loading")
      if (loadingElement) {
        loadingElement.style.display = "none"
      }

      // Add some styling to the map container
      if (mapRef.current) {
        mapRef.current.style.borderRadius = "8px"
        mapRef.current.style.overflow = "hidden"
        mapRef.current.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }

      // Add a subtle animation to the marker
      setTimeout(() => {
        if (marker) {
          const element = marker.getElement()
          if (element) {
            element.style.animation = "bounce 1s ease-in-out"
            element.style.animationIterationCount = "3"
          }
        }
      }, 1000)
    }

    initializeMap()

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className="h-96 w-full rounded-lg bg-gray-200 relative overflow-hidden"
        style={{ minHeight: "384px", zIndex: 1 }}
      />

      {/* Map Controls Overlay */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2 z-10">
        <div className="flex flex-col gap-2">
          <button
            onClick={() => {
              if (mapInstanceRef.current) {
                mapInstanceRef.current.setView([33.71204279448368, 73.05782145767205], 15)
              }
            }}
            className="px-3 py-1 text-xs bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
            title="Center on Arz Office"
          >
            📍 Office
          </button>
          <button
            onClick={() => {
              if (mapInstanceRef.current) {
                mapInstanceRef.current.setView([33.71204279448368, 73.05782145767205], 18)
              }
            }}
            className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            title="Zoom In"
          >
            🔍 Zoom
          </button>
        </div>
      </div>

      {/* Loading Fallback */}
      <div className="absolute inset-0 bg-gray-300 rounded-lg flex items-center justify-center" id="map-loading">
        <div className="text-center text-gray-600">
          <MapPin className="h-12 w-12 mx-auto mb-4 animate-pulse" />
          <p className="text-lg font-medium">Loading Interactive Map...</p>
          <p className="text-sm text-gray-500 mt-2">Arz Office Location</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) rotate(-45deg);
          }
          40% {
            transform: translateY(-10px) rotate(-45deg);
          }
          60% {
            transform: translateY(-5px) rotate(-45deg);
          }
        }
        
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        
        /* Ensure map doesn't overlap navigation */
        .leaflet-container {
          z-index: 1 !important;
        }
        
        .leaflet-control-container {
          z-index: 10 !important;
        }
        
        /* Hide loading div once map loads */
        .leaflet-container ~ #map-loading {
          display: none;
        }
      `}</style>
    </div>
  )
}
