"use client"

import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Globe, MessageSquare } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const Map = dynamic(() => import("@/components/interactive-map"), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center animate-pulse">
      <div className="text-center text-gray-600">
        <MapPin className="h-12 w-12 mx-auto mb-4" />
        <p className="text-lg font-medium">Loading Map...</p>
      </div>
    </div>
  ),
})

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Ready to transform your spatial data into actionable insights? Get in touch with our team of GIS and
              Remote Sensing experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-16 justify-items-center">
            {/* Contact Form */}
            

            {/* Contact Information */}
            <AnimatedSection animation="slideLeft" delay={0.2} className="max-w-2xl w-full">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                        <p className="text-gray-600">
                          ISE Tower, Blue Area
                          <br />
                          Islamabad
                          <br />
                          Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          Main: +92 349 0029815
                          <br />
                          Support: +92 316 5091394
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          General: letstalk@arz.lat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200/50 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MessageSquare className="h-6 w-6 text-emerald-600" />
                      <h3 className="text-xl font-semibold text-emerald-800">Quick Response Guarantee</h3>
                    </div>
                    <p className="text-emerald-700 mb-4">
                      We understand that time is critical for your projects. Our team commits to responding to all
                      inquiries within 24 hours during business days.
                    </p>
                    <div className="space-y-2 text-sm text-emerald-600">
                      <div>• Initial response within 24 hours</div>
                      <div>• Project consultation within 48 hours</div>
                      <div>• Detailed proposal within 5 business days</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="bg-gradient-to-br from-red-50 to-red-100/50 border-red-200/50 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">Emergency Support</h3>
                    <p className="text-red-700 mb-4">
                      For urgent disaster response, environmental emergencies, or critical infrastructure issues
                      requiring immediate GIS support:
                    </p>
                    <div className="text-red-800 font-semibold">Emergency Hotline: +92 349 0029815</div>
                    <div className="text-sm text-red-600 mt-2">Available 24/7 for qualified emergency situations</div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Blue Area Islamabad</p>
          </div>
          <Map />
        </div>
      </section>
    </div>
  )
}
