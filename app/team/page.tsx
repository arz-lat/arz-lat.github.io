import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import StaggerContainer from "@/components/stagger-container"
import AnimatedCounter from "@/components/animated-counter"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Umer Shakeel",
      position: "Co Founder",
      specialization: "Geospatial development & Web Mapping",
      image: "/umer.png?height=400&width=400",
      bio: "With over 3 years of experience in geospatial technologies, Umar shakeel leads Arz's strategic vision and innovation initiatives. He holds a Bachlors degree in Geographic Information Science and has developed over 50 web and desktops apps.",
      skills: ["ArcGIS Online", "Leaflet/OpenLayers/Mapbox", "GDAL/Geopandas", "Databases"],
      education: "Bachlors in Geographic Information Engineering, PMAS AAUR",
      certifications: ["ESRI Technical Certification", "Project Management Professional"],
      linkedin: "https://www.linkedin.com/in/umar-shakeel-7a781033a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFybDzIg4QLuY%2BSZxbbu6Dg%3D%3D",
      email: "m.umar.shakeel.07@gmail.com",
    },
    {
      id: 2,
      name: "Zain-ul-Abideen",
      email: "zainulabideen12333@gmail.com",
      linkedin: "https://www.linkedin.com/in/zain-ul-abideen-18b51b20b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOTWnVjquQp2ZPLu5nKb%2Ffg%3D%3D",
      position: "Co Founder",
      specialization: "Geosptial Analysis, Remote Sensing Expert",
      image: "/zain.png?height=300&width=300",
      bio: "Zain brings 3+ years of experience in GIS and Rempte Sensing Analysis. He specializes in creating scalable geospatial solutions and leading technical aspects.",
      skills: ["ArcGIS Pro", "QGIS", "ENVI", "Erdas Imagine"],
      education: "Bachlors in Geographic Information Engineering, PMAS AAUR",
      certifications: ["AWS Solutions Architect", "Google Cloud Professional"],
    },
    {
      id: 3,
      name: "Fahad Karim",
      position: "Co Founder",
      specialization: "Geospatial Automation & GeoAI",
      image: "/fahad.png?height=300&width=300",
      bio: "Fahad karim is an expert in Geospatial Automation and Artificial Intelligence in GIS and Remote Sensing. He has led numerous projects i.e Automating Segemntation, Digitizatin, and Geocoding.",
      skills: ["ArcPy/Modelbuilder", "GDAL/Geopandas", "TensorFlow", "Google Earth Engine"],
      education: "Bachlors in Geographic Information Engineering, PMAS AAUR",
      certifications: ["ERDAS Certified Professional", "ENVI Specialist"],
      linkedin: "https://www.linkedin.com/in/fahadkarim2103?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbSlheHlvSz6VdocVZEOmgw%3D%3D",
      email: "fahad.fhk2103@gmail.com"
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Expert Team</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Meet the passionate professionals who bring decades of combined experience in GIS, Remote Sensing, and
              geospatial technologies to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8" staggerDelay={0.1}>
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={600}
                      height={600}
                      className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500/80 hover:scale-110 transition-all duration-300 shadow-lg">
                            <Linkedin className="h-4 w-4 text-white" />
                          </div>
                        </a>
                        <a href={`mailto:${member.email}`}>
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500/80 hover:scale-110 transition-all duration-300 shadow-lg">
                            <Mail className="h-4 w-4 text-white" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-emerald-600 font-medium">{member.position}</p>
                      <p className="text-gray-600 text-sm">{member.specialization}</p>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">{member.bio}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {member.skills.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{member.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 border-t space-y-1">
                      <p className="text-xs text-gray-600">
                        <strong>Education:</strong> {member.education}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Stats */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Team Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise from leading universities and industry experience from top
              organizations worldwide.
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-4 gap-8" staggerDelay={0.1}>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-gray-600">Combined Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={25} suffix="+" />
              </div>
              <div className="text-gray-600">Advanced Degrees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-gray-600">Professional Certifications</div>
            </div>
          </StaggerContainer>
        </div>
      </section> */}

      {/* Join Our Team */}
      {/* <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented professionals who share our passion for geospatial innovation and
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              View Open Positions
            </button>
            <button className="border border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-emerald-900 px-8 py-3 rounded-lg font-medium transition-colors">
              Submit Resume
            </button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
