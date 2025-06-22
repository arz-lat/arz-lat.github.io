import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AnimatedSection from "@/components/animated-section"
import StaggerContainer from "@/components/stagger-container"
import AnimatedCounter from "@/components/animated-counter"
import {
  GISMappingIcon,
  RemoteSensingIcon,
  DataAnalyticsIcon,
  WebGISIcon,
  ExpertTeamIcon,
  AwardIcon,
  TechnologyIcon,
} from "@/components/enhanced-icons"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection animation="fadeIn" duration={1}>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="text-emerald-300"> Ultimate </span>
                      Mapping Solution
                    </h1>
                    <p className="text-xl text-emerald-100 leading-relaxed">
                      Arz delivers cutting-edge GIS and Remote Sensing solutions that transform spatial data into
                      actionable insights for informed decision-making.
                    </p>
                  </div>
                  <AnimatedSection animation="slideUp" delay={0.3}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white transform hover:scale-105 transition-all duration-200"
                      >
                        Explore Our Services
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Link href="/projects">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-emerald-900 transform hover:scale-105 transition-all duration-200"
                      >
                        View Projects
                      </Button>
                      </Link>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="slideUp" delay={0.6}>
                    <div className="flex items-center gap-8 pt-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-300">
                          <AnimatedCounter end={67} suffix="+" />
                        </div>
                        <div className="text-sm text-emerald-200">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-300">
                          <AnimatedCounter end={5} suffix="+" />
                        </div>
                        <div className="text-sm text-emerald-200">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-300">
                          <AnimatedCounter end={3} suffix="" />
                        </div>
                        <div className="text-sm text-emerald-200">Expert Dudes in GIS & RS</div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection animation="slideLeft" delay={0.4}>
              <div className="relative">
                <Image
                  src="/ndvi.gif?height=600&width=600"
                  alt="GIS and Remote Sensing Technology"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive GIS and Remote Sensing solutions tailored to meet your specific needs and
                challenges.
              </p>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" staggerDelay={0.15}>
            <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                  <GISMappingIcon
                    size={48}
                    className="text-emerald-600 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">GIS Mapping</h3>
                <p className="text-gray-600">
                  Advanced spatial analysis and mapping solutions for urban planning, environmental monitoring, and
                  resource management.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  <RemoteSensingIcon
                    size={48}
                    className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">Remote Sensing</h3>
                <p className="text-gray-600">
                  Satellite imagery analysis and interpretation for agriculture, forestry, disaster management, and
                  climate studies.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                  <DataAnalyticsIcon
                    size={48}
                    className="text-emerald-600 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">Gespatial Analysis</h3>
                <p className="text-gray-600">
                  Transform complex spatial data into actionable insights through advanced analytics and visualization
                  techniques.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  <WebGISIcon
                    size={48}
                    className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">Web GIS</h3>
                <p className="text-gray-600">
                  Interactive web-based GIS applications and dashboards for real-time data visualization and analysis using Leaflet, OpenLayers, MapBox, ArcGIS Online.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  >
                    <defs>
                      <linearGradient id="gee-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                      <radialGradient id="earth-gee-gradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="70%" stopColor="#16a34a" />
                        <stop offset="100%" stopColor="#15803d" />
                      </radialGradient>
                      <filter id="gee-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
                      </filter>
                    </defs>

                    {/* Earth */}
                    <circle cx="32" cy="32" r="18" fill="url(#earth-gee-gradient)" filter="url(#gee-shadow)" />

                    {/* Continents */}
                    <path
                      d="M20 25 Q25 20 30 25 Q35 30 40 25 Q42 28 44 30"
                      stroke="#065f46"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.7"
                    />
                    <path
                      d="M18 35 Q23 32 28 35 Q33 38 38 35 Q43 32 46 35"
                      stroke="#065f46"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.7"
                    />

                    {/* Google Cloud indicators */}
                    <g fill="#60a5fa" opacity="0.8">
                      <circle cx="16" cy="16" r="3" />
                      <circle cx="48" cy="16" r="3" />
                      <circle cx="16" cy="48" r="3" />
                      <circle cx="48" cy="48" r="3" />
                    </g>

                    {/* Data streams */}
                    <g stroke="#3b82f6" strokeWidth="2" opacity="0.6">
                      <path d="M16 16 Q24 24 32 32" fill="none" />
                      <path d="M48 16 Q40 24 32 32" fill="none" />
                      <path d="M16 48 Q24 40 32 32" fill="none" />
                      <path d="M48 48 Q40 40 32 32" fill="none" />
                    </g>

                    {/* Engine symbol */}
                    <rect x="28" y="28" width="8" height="8" rx="2" fill="#ffffff" />
                    <rect x="30" y="30" width="4" height="4" rx="1" fill="url(#gee-gradient)" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Google Earth Engine</h3>
                <p className="text-gray-600">
                  Cloud-based planetary-scale analysis using Google's infrastructure for processing satellite imagery
                  and geospatial datasets.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-purple-600 group-hover:scale-110 transition-transform duration-300"
                  >
                    <defs>
                      <linearGradient id="db-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                      <filter id="db-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
                      </filter>
                    </defs>

                    {/* Database cylinders */}
                    <ellipse cx="32" cy="16" rx="16" ry="4" fill="url(#db-gradient)" filter="url(#db-shadow)" />
                    <rect x="16" y="16" width="32" height="12" fill="url(#db-gradient)" />
                    <ellipse cx="32" cy="28" rx="16" ry="4" fill="#a855f7" />

                    <ellipse cx="32" cy="32" rx="16" ry="4" fill="url(#db-gradient)" />
                    <rect x="16" y="32" width="32" height="12" fill="url(#db-gradient)" />
                    <ellipse cx="32" cy="44" rx="16" ry="4" fill="#a855f7" />

                    <ellipse cx="32" cy="48" rx="16" ry="4" fill="url(#db-gradient)" />
                    <rect x="16" y="48" width="32" height="8" fill="url(#db-gradient)" />
                    <ellipse cx="32" cy="56" rx="16" ry="4" fill="#a855f7" />

                    {/* Spatial indicators */}
                    <g fill="#10b981" opacity="0.8">
                      <circle cx="24" cy="20" r="2" />
                      <circle cx="40" cy="24" r="2" />
                      <circle cx="28" cy="36" r="2" />
                      <circle cx="36" cy="40" r="2" />
                      <circle cx="32" cy="52" r="2" />
                    </g>

                    {/* Connection lines */}
                    <g stroke="#10b981" strokeWidth="1.5" opacity="0.6">
                      <line x1="24" y1="20" x2="28" y2="36" />
                      <line x1="40" y1="24" x2="36" y2="40" />
                      <line x1="28" y1="36" x2="32" y2="52" />
                      <line x1="36" y1="40" x2="32" y2="52" />
                    </g>

                    {/* Geographic grid overlay */}
                    <g stroke="#ffffff" strokeWidth="1" opacity="0.3">
                      <line x1="20" y1="12" x2="44" y2="12" />
                      <line x1="20" y1="60" x2="44" y2="60" />
                      <line x1="20" y1="12" x2="20" y2="60" />
                      <line x1="32" y1="12" x2="32" y2="60" />
                      <line x1="44" y1="12" x2="44" y2="60" />
                    </g>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Spatial Databases</h3>
                <p className="text-gray-600">
                  Design and optimization of spatial databases using PostGIS, Oracle Spatial, and other enterprise
                  solutions for efficient geospatial data management.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-emerald-600 group-hover:scale-110 transition-transform duration-300"
                  >
                    <defs>
                      <linearGradient id="dev-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                      <filter id="dev-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
                      </filter>
                    </defs>

                    {/* Monitor/Screen */}
                    <rect
                      x="8"
                      y="12"
                      width="48"
                      height="32"
                      rx="4"
                      fill="url(#dev-gradient)"
                      filter="url(#dev-shadow)"
                    />
                    <rect x="10" y="14" width="44" height="28" rx="2" fill="#000000" />

                    {/* Code lines */}
                    <g stroke="#10b981" strokeWidth="2" opacity="0.8">
                      <line x1="14" y1="18" x2="26" y2="18" />
                      <line x1="14" y1="22" x2="32" y2="22" />
                      <line x1="18" y1="26" x2="28" y2="26" />
                      <line x1="18" y1="30" x2="36" y2="30" />
                      <line x1="14" y1="34" x2="24" y2="34" />
                      <line x1="14" y1="38" x2="30" y2="38" />
                    </g>

                    {/* Map overlay */}
                    <g stroke="#3b82f6" strokeWidth="1.5" opacity="0.6">
                      <path d="M38 18 Q42 20 46 18 Q48 22 50 20" fill="none" />
                      <path d="M38 24 Q42 26 46 24 Q48 28 50 26" fill="none" />
                      <circle cx="40" cy="32" r="2" fill="#3b82f6" opacity="0.8" />
                      <circle cx="46" cy="36" r="2" fill="#3b82f6" opacity="0.8" />
                    </g>

                    {/* Stand */}
                    <rect x="28" y="44" width="8" height="8" fill="#6b7280" />
                    <rect x="20" y="52" width="24" height="4" rx="2" fill="#6b7280" />

                    {/* Development tools */}
                    <g fill="#f59e0b" opacity="0.8">
                      <circle cx="12" cy="8" r="2" />
                      <circle cx="52" cy="8" r="2" />
                      <rect x="10" y="6" width="4" height="1" />
                      <rect x="50" y="6" width="4" height="1" />
                    </g>

                    {/* API connections */}
                    <g stroke="#10b981" strokeWidth="1" opacity="0.5">
                      <line x1="32" y1="44" x2="32" y2="48" />
                      <line x1="28" y1="48" x2="36" y2="48" />
                    </g>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Geospatial Development</h3>
                <p className="text-gray-600">
                  Custom geospatial application development using modern frameworks, APIs, and libraries for web using  Geopandas, GDAL.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-indigo-600 group-hover:scale-110 transition-transform duration-300"
                  >
                    <defs>
                      <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#4f46e5" />
                      </linearGradient>
                      <radialGradient id="brain-gradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#a5b4fc" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </radialGradient>
                      <filter id="ai-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
                      </filter>
                    </defs>

                    {/* Brain outline */}
                    <path
                      d="M32 8 C40 8, 48 14, 48 24 C48 28, 46 32, 44 34 C46 36, 48 40, 48 44 C48 52, 42 56, 36 56 L28 56 C22 56, 16 52, 16 44 C16 40, 18 36, 20 34 C18 32, 16 28, 16 24 C16 14, 24 8, 32 8 Z"
                      fill="url(#brain-gradient)"
                      filter="url(#ai-shadow)"
                    />

                    {/* Neural pathways */}
                    <g stroke="#ffffff" strokeWidth="1.5" opacity="0.7">
                      <path d="M24 20 Q28 24 32 20 Q36 24 40 20" fill="none" />
                      <path d="M22 28 Q26 32 32 28 Q38 32 42 28" fill="none" />
                      <path d="M24 36 Q28 40 32 36 Q36 40 40 36" fill="none" />
                      <path d="M26 44 Q30 48 32 44 Q34 48 38 44" fill="none" />
                    </g>

                    {/* Neural nodes */}
                    <g fill="#fbbf24" opacity="0.9">
                      <circle cx="24" cy="20" r="2" />
                      <circle cx="32" cy="18" r="2" />
                      <circle cx="40" cy="20" r="2" />
                      <circle cx="22" cy="28" r="2" />
                      <circle cx="32" cy="26" r="2" />
                      <circle cx="42" cy="28" r="2" />
                      <circle cx="24" cy="36" r="2" />
                      <circle cx="32" cy="34" r="2" />
                      <circle cx="40" cy="36" r="2" />
                      <circle cx="26" cy="44" r="2" />
                      <circle cx="32" cy="42" r="2" />
                      <circle cx="38" cy="44" r="2" />
                    </g>

                    {/* Geographic elements */}
                    <g stroke="#10b981" strokeWidth="2" opacity="0.6">
                      <circle cx="52" cy="16" r="4" fill="none" />
                      <circle cx="12" cy="48" r="4" fill="none" />
                      <path d="M50 14 L54 12 M50 18 L54 20" />
                      <path d="M10 46 L14 44 M10 50 L14 52" />
                    </g>

                    {/* AI processing indicators */}
                    <g fill="#10b981" opacity="0.8">
                      <circle cx="52" cy="16" r="1">
                        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="12" cy="48" r="1">
                        <animate
                          attributeName="opacity"
                          values="0.4;1;0.4"
                          dur="2.5s"
                          repeatCount="indefinite"
                          begin="0.5s"
                        />
                      </circle>
                    </g>

                    {/* Data streams */}
                    <g stroke="#6366f1" strokeWidth="1" opacity="0.5">
                      <line x1="48" y1="16" x2="44" y2="20" />
                      <line x1="16" y1="48" x2="20" y2="44" />
                    </g>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">GeoAI</h3>
                <p className="text-gray-600">
                  Artificial intelligence and machine learning applications for geospatial analysis, pattern
                  recognition, and automated feature extraction using Python libraries TensorFlow, Pytorch.
                </p>
              </CardContent>
            </Card>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideRight">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Arz?</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <ExpertTeamIcon size={32} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">3 Random Dudes who know how to Map</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We 3 Dudes are certified GIS professionals and remote sensing specialists brings years of
                        combined experience to every project.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <AwardIcon size={32} className="text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Customer Satisfaction over some Bucks</h3>
                      <p className="text-gray-600 leading-relaxed">
                        With over 67+ successful projects and industry recognition, we deliver results that exceed
                        expectations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <TechnologyIcon size={32} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Cutting-Edge Technology</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We leverage the latest GIS software, satellite imagery, and analytical tools to provide
                        state-of-the-art solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideLeft" delay={0.2}>
              <div className="relative">
                <Image
                  src="/arz.png?height=500&width=600"
                  alt="Professional GIS Team at Work"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Spatial Data?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our GIS and Remote Sensing expertise can drive your project's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 transform hover:scale-105 transition-all duration-200"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
