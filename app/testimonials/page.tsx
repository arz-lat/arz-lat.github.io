import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import StaggerContainer from "@/components/stagger-container"
import AnimatedCounter from "@/components/animated-counter"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Tarron Sharls",
      position: "Client from Upwork",
      company: "Metro City Development Authority",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "These Guy did a great job! went above and beyond to make sure i was satisfied no matter how many times it took! true professional!",
      project: "Urban Development Planning",
    },
    {
      id: 2,
      name: "Faszkalap",
      position: "Client from Upwork",
      company: "Amazon Conservation Alliance",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "These Guy works hard to deliver exactly what you want and does a great job!",
      project: "Forest Conservation Monitoring",
    },
    {
      id: 3,
      name: "Karljem",
      position: "Client from Upwork",
      company: "Midwest Agricultural Cooperative",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "Was really easy to talk with in regards to the project at hand even after the work was done.",
      project: "Precision Agriculture Implementation",
    },
    {
      id: 4,
      name: "Emma Waller",
      position: "Client from Upwork",
      company: "Philippine Disaster Management Office",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "Lads delievered exactly what i was looking for.I wish i had solicited his services sooner! i would have saved my self a lot of time struggling with arcgis. Thank you so much",
      project: "Disaster Risk Assessment",
    },
    {
      id: 5,
      name: "Javeria Sarwar",
      position: "Client from Upwork",
      company: "Northern Mining Corporation",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "Delivered good work on LULC mapping, working with him was at ease and he has an in-depth understanding of mapping, suggesting innovative ideas to represent the concerned analysis. It is easy to coordinate with him, reply promptly, and adhere to the timeline. He is extremely helpful. I will certainly contact him for my future work and recommend others to reach out to him.",
      project: "Mining Site Rehabilitation",
    },
    {
      id: 6,
      name: "Dr Shoaib Saleem",
      position: "Professor @ DDSDP PMAS AAUR",
      company: "Singapore Urban Development",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "The drought monitoring tools developed have become an essential part of our climate change research methodology.",
      project: "Smart City Infrastructure",
    },
    {
      id: 7,
      name: "Tayya Shah",
      position: "Geospatial research manager at the Canadian Hub for Applied and Social Research (CHASR), University of Saskatchewan",
      company: "Singapore Urban Development",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "The geospatial analysis provided exceptional insights into our environmental monitoring program. Highly recommended for complex spatial data challenges.",
      project: "Smart City Infrastructure",
    },
    {
      id: 8,
      name: "Muhammad hamza Wahla",
      position: "Founder & CEO @ SpatialOX",
      company: "Singapore Urban Development",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "The remote sensing solutions transformed our urban planning processes. Accurate, timely, and presented in an easily digestible format.",
      project: "Smart City Infrastructure",
    },
    {
      id: 9,
      name: "Dr Sajjad Bashir",
      position: "Agricultural Engineer | Research Analyst GIS",
      company: "Singapore Urban Development",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "he crop monitoring system developed for our research has exceeded expectations in both accuracy and usability.",
      project: "Smart City Infrastructure",
    },
    {
      id: 10,
      name: "Samman Aziz",
      position: "M&E Manager @ R2V | GIS specialist |Remote Sensing & GIS",
      company: "Singapore Urban Development",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "The flood extent mapping provided critical data for our relief efforts, helping us allocate resources more effectively during emergencies.",
      project: "Smart City Infrastructure",
    },
    {
      id: 11,
      name: "Dr Muhammad Amin",
      position: "Assistant Professor @ PMAS AAUR | Ph.D, Geo-Information",
      company: "Singapore Urban Development",
      image: "/placeholder-user.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "The drought monitoring tools developed have become an essential part of our climate change research methodology.",
      project: "Smart City Infrastructure",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Hear from our satisfied clients about their experience working with Pixearth and the impact our GIS and
              Remote Sensing solutions have made on their projects.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={0.15}>
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group border-0 bg-white/95 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote Icon with animation */}
                    <div className="flex justify-between items-start">
                      <Quote className="h-10 w-10 text-emerald-600/60 group-hover:text-emerald-600/80 group-hover:scale-110 transition-all duration-300" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400 hover:scale-110 transition-transform duration-200"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed text-lg italic">"{testimonial.testimonial}"</p>

                    {/* Project Badge */}
                    {/* <div className="inline-block bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                      Project: {testimonial.project}
                    </div> */}

                    {/* Client Info */}
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-emerald-600 font-medium">{testimonial.position}</p>
                        {/* <p className="text-gray-600 text-sm">{testimonial.company}</p> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Satisfaction</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our client satisfaction metrics and long-term partnerships.
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-4 gap-8" staggerDelay={0.1}>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={85} suffix="%" />
              </div>
              <div className="text-gray-600">Repeat Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={4.9} suffix="/5" duration={2.5} />
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
