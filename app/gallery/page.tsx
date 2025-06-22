import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import StaggerContainer from "@/components/stagger-container"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Geospatial Damage Assessment",
      category: "Disaster Management",
      image: "/arzpics/g1.png?height=400&width=600",
      description: "High-resolution satellite imagery analysis for environmental monitoring",
    },
    {
      id: 2,
      title: "Surface Modeling with LiDAR",
      category: "3D Mapping",
      image: "/arzpics/g2.jpg?height=400&width=600",
      description: "Advanced 3D terrain models for geological surveys",
    },
    {
      id: 3,
      title: "Urban Heat Island Mapping",
      category: "Environmental",
      image: "/arzpics/g3.jpg?height=400&width=600",
      description: "Thermal mapping of urban areas for climate studies",
    },
    {
      id: 4,
      title: "Air Temperature Analysis",
      category: "Enviormental",
      image: "/arzpics/g4.jpeg?height=400&width=600",
      description: "Crop health monitoring using multispectral imagery",
    },
    {
      id: 5,
      title: "River Flow Visualization",
      category: "Hydrology Mapping",
      image: "/arzpics/g5.jpg?height=400&width=600",
      description: "Interactive flood risk maps for emergency planning",
    },
    {
      id: 6,
      title: "3D Terrain Modeling",
      category: "Terrain mapping",
      image: "/arzpics/g6.png?height=400&width=600",
      description: "Time-series analysis of forest cover changes",
    },
    {
      id: 7,
      title: "Normalized Difference Vegetation Index",
      category: "Agriculture Mapping",
      image: "/arzpics/g7.png?height=400&width=600",
      description: "Comprehensive infrastructure asset mapping",
    },
    {
      id: 8,
      title: "Hydrological Analysis",
      category: "Hyrdrology Mapping",
      image: "/arzpics/g8.png?height=400&width=600",
      description: "Long-term coastal erosion monitoring and analysis",
    },
    {
      id: 9,
      title: "2022 Flood House Damage Assessment",
      category: "Disaster Mapping",
      image: "/arzpics/g9.png?height=400&width=600",
      description: "Automated land use classification using machine learning",
    },
    {
      id: 10,
      title: "Topographical Mapping of Europe",
      category: "Topgraphic Mapping",
      image: "/arzpics/g10.png?height=400&width=600",
      description: "Automated land use classification using machine learning",
    },
    {
      id: 11,
      title: "Digital Elevation Model (DEM)",
      category: "Elevation Mapping",
      image: "/arzpics/g11.png?height=400&width=600",
      description: "Automated land use classification using machine learning",
    },
    {
      id: 12,
      title: "Digital Surface  Model (DSM)",
      category: "Elevation Mapping",
      image: "/arzpics/g12.png?height=400&width=600",
      description: "Automated land use classification using machine learning",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Discover the visual impact of our GIS and Remote Sensing work through maps, analyses, and visualizations
              that tell compelling spatial stories.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {galleryItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer border-0 bg-white/90 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute top-4 left-4 transform group-hover:scale-105 transition-transform duration-300">
                    <Badge className="bg-emerald-600/90 text-white shadow-lg backdrop-blur-sm border-0 font-medium px-3 py-1">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  {/* <p className="text-gray-600 text-sm">{item.description}</p> */}
                </div>
              </Card>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "All",
                "Remote Sensing",
                "Environmental",
                "Agriculture",
                "Urban Planning",
                "Disaster Management",
                "3D Mapping",
              ].map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "secondary"}
                  className={`px-6 py-2 cursor-pointer hover:bg-emerald-600 hover:text-white transition-colors ${
                    category === "All" ? "bg-emerald-600 text-white" : ""
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
