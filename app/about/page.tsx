import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import AnimatedSection from "@/components/animated-section"
import StaggerContainer from "@/components/stagger-container"
import AnimatedCounter from "@/components/animated-counter"
import { AwardIcon, ExpertTeamIcon, WebGISIcon } from "@/components/enhanced-icons"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn" duration={1}>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">About Arz</h1>
              <p className="text-xl text-emerald-100 leading-relaxed">
                Leading the way in GIS and Remote Sensing innovation for over 5 years, transforming how organizations
                understand and interact with spatial data.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideRight">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                  We’re three university guys who turned our shared passion for GIS and remote sensing into a full-time mission. After years in the corporate world, we decided to build something of our own, an agency focused on delivering reliable, data-driven geospatial solutions.
What began with small projects has grown into 5 years of consistent work, with 67+ successful projects and a growing list of satisfied clients.
We bring experience, dedication, and a hands-on approach to every project, and we’re just getting started.
                  </p>
                  <p>
                    Our journey began with a simple belief: that spatial intelligence should be accessible, actionable,
                    and transformative. Today, we continue to push the boundaries of what's possible with GIS and Remote
                    Sensing technology.
                  </p>
                  <p>
                    From urban planning initiatives to environmental conservation projects, from precision agriculture
                    to disaster response, Arz has been at the forefront of spatial innovation, helping
                    organizations make informed decisions that shape our world.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideLeft" delay={0.2}>
              <div className="relative">
                <Image
                  src="/us.jpeg?height=500&width=600"
                  alt="Pixearth Office and Team"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles that guide every project and partnership we undertake.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-emerald-100 hover:scale-110 transition-all duration-300">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-emerald-600"
                  >
                    <defs>
                      <linearGradient id="target-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                      <filter id="target-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
                      </filter>
                    </defs>

                    {/* Outer rings */}
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="url(#target-gradient)"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.3"
                      filter="url(#target-shadow)"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="22"
                      stroke="url(#target-gradient)"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.5"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="16"
                      stroke="url(#target-gradient)"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.7"
                    />

                    {/* Center target */}
                    <circle cx="32" cy="32" r="10" fill="url(#target-gradient)" />
                    <circle cx="32" cy="32" r="6" fill="#ffffff" />
                    <circle cx="32" cy="32" r="3" fill="url(#target-gradient)" />

                    {/* Crosshairs */}
                    <line x1="32" y1="4" x2="32" y2="16" stroke="url(#target-gradient)" strokeWidth="2" />
                    <line x1="32" y1="48" x2="32" y2="60" stroke="url(#target-gradient)" strokeWidth="2" />
                    <line x1="4" y1="32" x2="16" y2="32" stroke="url(#target-gradient)" strokeWidth="2" />
                    <line x1="48" y1="32" x2="60" y2="32" stroke="url(#target-gradient)" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower organizations with spatial intelligence that drives informed decision-making, sustainable
                  development, and positive environmental impact through innovative GIS and Remote Sensing solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-blue-100 hover:scale-110 transition-all duration-300">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600"
                  >
                    <defs>
                      <linearGradient id="vision-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#1d4ed8" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                      <radialGradient id="lens-gradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#dbeafe" />
                        <stop offset="70%" stopColor="#93c5fd" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </radialGradient>
                      <filter id="vision-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2" />
                      </filter>
                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Telescope base */}
                    <rect
                      x="8"
                      y="40"
                      width="48"
                      height="16"
                      rx="8"
                      fill="url(#vision-gradient)"
                      filter="url(#vision-shadow)"
                    />
                    <rect x="12" y="42" width="40" height="12" rx="6" fill="#1e40af" />

                    {/* Telescope body */}
                    <rect
                      x="20"
                      y="20"
                      width="24"
                      height="24"
                      rx="12"
                      fill="url(#vision-gradient)"
                      filter="url(#vision-shadow)"
                    />
                    <rect x="22" y="22" width="20" height="20" rx="10" fill="#1e40af" />

                    {/* Main lens */}
                    <circle cx="32" cy="32" r="8" fill="url(#lens-gradient)" filter="url(#vision-shadow)" />
                    <circle cx="32" cy="32" r="6" fill="#ffffff" opacity="0.9" />
                    <circle cx="32" cy="32" r="4" fill="url(#lens-gradient)" />

                    {/* Lens reflections */}
                    <circle cx="30" cy="30" r="2" fill="#ffffff" opacity="0.8" />
                    <circle cx="34" cy="34" r="1" fill="#ffffff" opacity="0.6" />

                    {/* Eyepiece */}
                    <rect x="44" y="28" width="12" height="8" rx="4" fill="url(#vision-gradient)" />
                    <rect x="46" y="30" width="8" height="4" rx="2" fill="#1e40af" />

                    {/* Vision rays */}
                    <g stroke="#60a5fa" strokeWidth="2" opacity="0.7" filter="url(#glow)">
                      <line x1="4" y1="32" x2="20" y2="32" />
                      <line x1="6" y1="28" x2="20" y2="30" />
                      <line x1="6" y1="36" x2="20" y2="34" />
                      <line x1="8" y1="24" x2="20" y2="28" />
                      <line x1="8" y1="40" x2="20" y2="36" />
                    </g>

                    {/* Focus adjustment knobs */}
                    <circle cx="32" cy="20" r="3" fill="#374151" />
                    <circle cx="32" cy="20" r="2" fill="#6b7280" />
                    <circle cx="32" cy="44" r="3" fill="#374151" />
                    <circle cx="32" cy="44" r="2" fill="#6b7280" />

                    {/* Tripod legs */}
                    <g stroke="url(#vision-gradient)" strokeWidth="3" opacity="0.8">
                      <line x1="20" y1="56" x2="16" y2="60" />
                      <line x1="32" y1="56" x2="32" y2="60" />
                      <line x1="44" y1="56" x2="48" y2="60" />
                    </g>

                    {/* Stars in vision field */}
                    <g fill="#fbbf24" opacity="0.8">
                      <circle cx="8" cy="16" r="1">
                        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="12" cy="20" r="0.8">
                        <animate
                          attributeName="opacity"
                          values="0.4;1;0.4"
                          dur="2.5s"
                          repeatCount="indefinite"
                          begin="0.5s"
                        />
                      </circle>
                      <circle cx="6" cy="24" r="1.2">
                        <animate
                          attributeName="opacity"
                          values="0.4;1;0.4"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="1s"
                        />
                      </circle>
                      <circle cx="10" cy="12" r="0.6">
                        <animate
                          attributeName="opacity"
                          values="0.4;1;0.4"
                          dur="1.8s"
                          repeatCount="indefinite"
                          begin="1.5s"
                        />
                      </circle>
                    </g>

                    {/* Digital display */}
                    <rect x="24" y="8" width="16" height="6" rx="2" fill="#000000" />
                    <rect x="25" y="9" width="14" height="4" rx="1" fill="#10b981" opacity="0.8" />
                    <text x="32" y="12" textAnchor="middle" fontSize="3" fill="#ffffff" fontFamily="monospace">
                      VISION
                    </text>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the influential character in spatial data solutions, recognized for our innovation, expertise, and
                  commitment to creating a more sustainable and connected world through advanced geospatial
                  technologies.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-red-100 hover:scale-110 transition-all duration-300">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-red-600"
                  >
                    <defs>
                      <linearGradient id="modern-values-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="50%" stopColor="#dc2626" />
                        <stop offset="100%" stopColor="#b91c1c" />
                      </linearGradient>
                      <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                      <filter id="modern-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
                      </filter>
                      <filter id="inner-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Main hexagonal container */}
                    <polygon
                      points="32,4 50,14 50,36 32,46 14,36 14,14"
                      fill="url(#modern-values-gradient)"
                      filter="url(#modern-shadow)"
                    />

                    {/* Inner hexagon highlight */}
                    <polygon points="32,8 46,16 46,34 32,42 18,34 18,16" fill="#ffffff" opacity="0.1" />

                    {/* Central diamond - Excellence */}
                    <polygon points="32,18 38,25 32,32 26,25" fill="#ffffff" opacity="0.9" />

                    {/* Innovation spark - top */}
                    <circle cx="32" cy="12" r="3" fill="url(#accent-gradient)" filter="url(#inner-glow)">
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* Integrity pillars - left and right */}
                    <rect x="20" y="22" width="3" height="12" fill="#ffffff" opacity="0.8" rx="1.5" />
                    <rect x="41" y="22" width="3" height="12" fill="#ffffff" opacity="0.8" rx="1.5" />

                    {/* Environmental elements - bottom leaves */}
                    <g fill="#22c55e" opacity="0.8">
                      <ellipse cx="28" cy="38" rx="3" ry="6" transform="rotate(-20 28 38)" />
                      <ellipse cx="36" cy="38" rx="3" ry="6" transform="rotate(20 36 38)" />
                    </g>

                    {/* Connection lines - representing collaboration */}
                    <g stroke="#ffffff" strokeWidth="1.5" opacity="0.6">
                      <line x1="26" y1="25" x2="32" y2="25" />
                      <line x1="32" y1="25" x2="38" y2="25" />
                      <line x1="32" y1="18" x2="32" y2="32" />
                    </g>

                    {/* Excellence stars */}
                    <g fill="#fbbf24" opacity="0.9">
                      <polygon points="18,20 19,22 21,22 19.5,23.5 20,26 18,24.5 16,26 16.5,23.5 15,22 17,22" />
                      <polygon points="46,20 47,22 49,22 47.5,23.5 48,26 46,24.5 44,26 44.5,23.5 43,22 45,22" />
                    </g>

                    {/* Quality assurance rings */}
                    <g stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.3">
                      <polygon points="32,6 48,15 48,35 32,44 16,35 16,15" />
                    </g>

                    {/* Trust indicator - checkmark */}
                    <g stroke="#ffffff" strokeWidth="2" opacity="0.8" filter="url(#inner-glow)">
                      <path d="M24 30 L29 35 L40 24" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence in delivery, integrity in partnerships, innovation in solutions, and commitment to
                  environmental stewardship guide everything we do at Pixearth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence in the GIS and Remote Sensing
              industry.
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:bg-emerald-100 transition-all duration-300">
                <AwardIcon size={40} className="text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={67} suffix="+" />
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:bg-emerald-100 transition-all duration-300">
                <ExpertTeamIcon size={20} className="text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:bg-emerald-100 transition-all duration-300">
                <WebGISIcon size={40} className="text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:bg-emerald-100 transition-all duration-300">
                <AwardIcon size={40} className="text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={5} suffix="+" />
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is validated through industry strategic partnerships.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <Image
              src="/techgis.jpeg?height=100&width=200"
              alt="ESRI Partner"
              width={200}
              height={100}
              className=" hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/spatialox.jpeg?height=100&width=200"
              alt="ISO Certification"
              width={200}
              height={100}
              className="hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/gravity.jpeg?height=100&width=200"
              alt="Google Earth Engine Partner"
              width={200}
              height={100}
              className="hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/ainav.jpeg?height=100&width=200"
              alt="Microsoft Partner"
              width={200}
              height={100}
              className="hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
