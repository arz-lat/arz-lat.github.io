import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"
import StaggerContainer from "@/components/stagger-container"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Comparative Vegetation Indices Analysis from Drone Imagery of Local Grounds",
      category: "Sustainability Analysis",
      location: "Local Grounds of Rawalpindi",
      date: "2022",
      description:
        "This project involved a comparative analysis of key vegetation indices derived from drone-based multispectral imagery over local grounds. The objective was to evaluate vegetation health, chlorophyll content, and canopy structure using high-resolution spectral data. The analyzed indices included NDVI (Normalized Difference Vegetation Index) for overall vegetation vigor, GNDVI (Green NDVI) for chlorophyll concentration, EVI (Enhanced Vegetation Index) for performance in dense canopies, SAVI (Soil Adjusted Vegetation Index) to minimize soil influence, NDRE (Normalized Difference Red Edge Index) for early stress detection, Clgreen (Chlorophyll Index–Green) and ClredEdge (Chlorophyll Index–Red Edge) for accurate chlorophyll estimation, and VARI (Visible Atmospherically Resistant Index) for vegetation analysis using visible bands. Each index was computed, mapped, and evaluated to determine its effectiveness under varying land conditions. The findings support the use of drone imagery and vegetation indices for precision agriculture, environmental monitoring, and land management applications.",
      image: "/uav.png?height=300&width=400",
      tags: ["CLgreen", "ClredEdge", "SAVI", "Drone Mapping", "NDVI"],
      results: "Reduced traffic congestion by 22%, improved service delivery efficiency",
    },
    {
      id: 2,
      title: "Drought Mapping (2015-2018)",
      category: "Drought Mapping",
      location: "Huaihe River Basin, China",
      date: "2019",
      description:
        "In this project, We assessed drought conditions in the Huaihe River Basin, China (2015), by calculating NDVI using MODIS data. NDVI from MOD13Q1 (MODIS/Terra Vegetation Indices 16-Day L3 Global 250m) was analyzed for March, August, and December, while 40 cm soil moisture was interpolated from 37 observation points to generate detailed maps. The resulting drought and vegetation maps provide comprehensive seasonal insights into basin dynamics.",
      image: "/huiahe.png?height=300&width=400",
      tags: ["GIS Analysis", "Normalized Difference Index (NDVI)", "Land Surface Temperature (LST)", "Temperature Vegetation Dryness Index (TVDI)"],
      // results: "Optimized land use for 15,000 residents, reduced infrastructure costs by 25%",
    },
    {
      id: 3,
      title: "2022 Sindh Flood Analysis ",
      category: "Disaster Mapping",
      location: "Sindh, Pakistan",
      date: "2022",
      description:
        "In this project, We assessed the 2022 flood's impact on agricultural land in Sindh, Pakistan. Project integrate datasets including the Dynamic World V1 Land Use/Land Cover dataset (WRI, August 2022), DEM data from HydroSHEDS (2000), Global Surface Water data (1984–2022), CHIRPS precipitation data (2022), and Sentinel-1 SAR GRD data (ESA) to map flood extent and evaluate its effects on productivity and food security. Below are the Cropland before and after flood rasters, Rough Flood Extent, and Sindh's surface water.",
      image: "/sindh1.png?height=300&width=400",
      tags: ["GIS Analysis", "Disaster Mapping", "Sentinel-2", "Flood Mapping"],
      // results: "Optimized land use for 15,000 residents, reduced infrastructure costs by 25%",
    },
    {
      id: 4,
      title: "Urban Density and Aerosol Index Analysis ",
      category: "Environmental",
      location: "Lahore, Punjab, Pakistan",
      date: "2024",
      description:
        "In this project, We assessed urban density and air quality in Lahore, Pakistan in 2024 using Landsat 8 Collection 2 Tier 1 Level 2 data (LANDSAT/LC08/C02/T1_L2) and Sentinel-5P products (COPERNICUS/S5P/OFFL/L3_CO, NRTI/L3_NO2, NRTI/L3_HCHO, NRTI/L3_SO2, OFFL/L3_CH4, NRTI/L3_O3, NRTI/L3_AER_AI). Landsat composite is used to compute spectral indices (NDBI and NBR2) and derive built-up and urban density. These are compared with the 2020 urban density and Aerosol Index to monitor changes.",
      image: "/sm.png?height=300&width=400",
      tags: ["Remote Sensing", "Sentinel-5P", "NBR2", "NDBI"],
      results: "Detected illegal logging activities, supported protection of 45,000 hectares",
    },
    {
      id: 5,
      title: "Comparative Urban Air Quality Analysis Tool",
      category: "Enviormental Tool Development",
      location: "Worldwide",
      date: "2024",
      description:
        "This interactive Earth Engine application enables users to monitor and compare air quality across major cities by visualizing pollutant concentrations over two distinct time periods. Users can select a city, set custom date ranges, and toggle multiple atmospheric layers to observe changes in air composition, facilitating detailed before-and-after analyses.",
      image: "/aqi.png?height=300&width=400",
      tags: ["Google earth Engine", "Python", "Machine Learning"],
      results: "Increased crop yield by 18%, reduced water usage by 30%",
      link: "https://code.earthengine.google.com/5fb39c7cffba934b1725efb0a748e885",
    },
    {
      id: 6,
      title: "Vegetation Health Index (VHI) Monitoring Tool",
      category: "Vegetation Health Index Tool Development",
      location: "Worldwide",
      date: "2023",
      description:
        "This interactive Earth Engine tool computes the Vegetation Health Index (VHI) by analyzing MODIS NDVI and LST data over user-defined date ranges and geographic areas. Users can select a country as the area of interest and visualize vegetation health through a color-coded map, providing insights into tree and ecosystem vitality.",
      image: "/vhi.png?height=300&width=400",
      tags: ["Vegetation Stress Detection", "Drought Monitoring", "MODIS"],
      results: "Protected 25,000 residents, improved emergency response time by 40%",
      link: "https://code.earthengine.google.com/9860f73b3be455953ef07dd81e629bfd",
    },
    {
      id: 7,
      title: "Wildfire Impact Assessment via dNBR Calculation",
      category: "Disaster Response and Monitoring",
      location: "Worldwide",
      date: "2021",
      description:
        "This interactive Earth Engine application quantifies wildfire impacts by calculating the difference in Normalized Burn Ratio (dNBR) between pre-fire and post-fire periods using Landsat 8 data. Users can select custom date ranges and areas of interest to generate composite images that highlight burned regions. The app visualizes the extent of fire damage and computes an approximate burned area, offering valuable insights for wildfire management and environmental monitoring.",
      image: "/wf.png?height=300&width=400",
      tags: ["NBR (Normalized Burn Ratio)", "Satellite-Based Fire Monitoring", "Fire Severity Classification"],
      results: "Restored 2,000 hectares, improved soil quality by 60%",
      link: "https://code.earthengine.google.com/9860f73b3be455953ef07dd81e629bfd",
    },
    {
      id: 8,
      title: "AI Image Segmentation and GeoTIFF Downloader App",
      category: "GeoAI Automation",
      location: "World Wide Web",
      date: "2024",
      description:
        "This application enables users to retrieve high-resolution GeoTIFF imagery from Google Satellite basemaps and perform semantic segmentation via the Segment-Geospatial Python library. It automates the extraction of geospatial features, generating vectorized GeoJSON outputs for downstream analysis. The tool integrates raster data acquisition, Deep Learning-based segmentation, and vector data export into a streamlined workflow. This solution optimizes geospatial analysis workflows by bridging satellite imagery acquisition and feature extraction.",
      image: "/seg3.png?height=300&width=400",
      tags: ["SamGeo (Segment Anything Model for Geospatial Data)", "Deep Learning for GIS", "GeoJSON Automation", "Feature Extraction (Remote Sensing)"],
      results: "Reduced traffic congestion by 22%, improved service delivery efficiency",
      link: "https://github.com/Fahadk2103/Segmentation-App",
    },
    {
      id: 9,
      title: "Punjab Drought Analysis 2000-2022",
      category: "Drought Mapping",
      location: "Punjab, Pakistan",
      date: "2023",
      description:
        "In this project, We developed a Composite Drought Index for Punjab, Pakistan (2001–2022) by integrating calculated Soil Moisture Condition Index (SMCI), the Temperature Vegetation Dryness Index (TVDI), and the Standardized Precipitation Evapotranspiration Index (SPEI). Drought conditions were assessed using MODIS remote sensing data from MOD13Q1 (MODIS/Terra Vegetation Indices 08-Day L3 Global 250m) for NDVI and MOD11A1 (MODIS/Terra Land Surface Temperature/Emissivity Daily L3 Global 1km) for LST, with 2022 drought maps prominently displayed.",
      image: "/punjab.png?height=300&width=400",
      tags: ["Pixel-Based Classification", "GDAL", "Lansat", "Google Earth Engine"],
      results: "Reduced traffic congestion by 22%, improved service delivery efficiency",
    },
    {
      id: 10,
      title: "Balochistan Drought Analysis (2001-2022)",
      category: "Drought Mapping",
      location: "Balochistan, Pakistan",
      date: "2023",
      description:
        "In this project, I conducted drought analysis for Balochistan, Pakistan (2001–2022) by calculating key indices Precipitation Condition Index (PCI), Vegetation Health Index (VHI), Standradized Precipitation Evapotranspiration Index (SPEI), and Water Use Efficiency (WUE) using MODIS data. The Project employed MOD13Q1 (MODIS/Terra Vegetation Indices 08-Day L3 Global 250m) for NDVI and MOD11A1 (MODIS/Terra Land Surface Temperature/Emissivity Daily L3 Global 1km) for LST, with 2001-2022 drought maps prominently displayed.",
      image: "/balochistan.png?height=300&width=400",
      tags: ["QGIS", "OBIA", "SVM", "Time-Series Analysis"],
      results: "Reduced traffic congestion by 22%, improved service delivery efficiency",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Featured Projects</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Explore our portfolio of successful GIS and Remote Sensing projects that have made a real impact across
              various industries and regions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid lg:grid-cols-2 gap-12" staggerDelay={0.2}>
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group border-0 bg-white/95 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute top-4 left-4 transform group-hover:scale-105 transition-transform duration-300">
                    <Badge className="bg-emerald-600/90 text-white shadow-lg backdrop-blur-sm border-0 font-medium px-3 py-1">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.date}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* <div className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 p-4 rounded-lg border border-emerald-200/50">
                      <h4 className="font-semibold text-emerald-800 mb-2">Key Results:</h4>
                      <p className="text-emerald-700 text-sm">{project.results}</p>
                    </div> */}

                    <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring the same level of expertise and innovation to your next GIS or Remote Sensing
            project.
          </p>
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 transform hover:scale-105 transition-all duration-200"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  )
}
