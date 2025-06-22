import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image
                src="/arz.png"
                alt="Company Logo"
                width={80}
                height={80}
                className="object-contain"
              />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading GIS and Remote Sensing agency transforming spatial data into actionable insights for 5
              years.
            </p>
            {/* Social media icons with hover animations */}
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </div>
              {/* <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                <Twitter className="h-4 w-4" />
              </div> */}
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                <Facebook className="h-4 w-4" />
              </div>
              {/* <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300 cursor-pointer">
                <Instagram className="h-4 w-4" />
              </div> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  GIS Mapping
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Remote Sensing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Geospatial Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Geospatial Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Spatial Databases
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  GEOAI
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>ISE Tower, Blue Area</p>
                  <p>Islamabad, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <p>+92 349 0029815</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <p>letstalk@arz.lat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Arz. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
