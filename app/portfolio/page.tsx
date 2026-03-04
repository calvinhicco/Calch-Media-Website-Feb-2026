"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Marketing Solutions", "Media Production", "I.T. Solutions"]

  const projects = [
    {
      title: "Natfort Energy Vehicle & Office Branding",
      description:
        "Executed a comprehensive branding project for Natfort Energy, including nationwide vehicle fleet branding and interior office branding to create a cohesive corporate identity.",
      category: "Marketing Solutions",
      image: "/images/portfolio/natfort-energy-branding.jpg",
      tags: ["Vehicle Branding", "Corporate Identity", "Office Branding"],
    },
    {
      title: "Tendo Electronics Press Adverts",
      description:
        "Designed a series of eye-catching press advertisements for Tendo Electronics, including congratulatory and promotional messages that increased brand visibility.",
      category: "Marketing Solutions",
      image: "/images/portfolio/tendo-electronics-ads.jpg",
      tags: ["Press Adverts", "Print Design", "Brand Visibility"],
    },
    {
      title: "Slushie's Restaurants Branding",
      description:
        "Provided full branding and signage for multiple Slushie's branches, creating a vibrant and consistent customer-facing image.",
      category: "Marketing Solutions",
      image: "/images/portfolio/slushies-restaurant-branding.jpg",
      tags: ["Restaurant Branding", "Signage", "Multi-location"],
    },
    {
      title: "Scripture Union Zimbabwe Corporate Identity",
      description:
        "Designed, produced, and supplied corporate wear and nationwide vehicle branding for Scripture Union Zimbabwe, unifying their visual presence across the country.",
      category: "Marketing Solutions",
      image: "/images/portfolio/scripture-union-branding.jpg",
      tags: ["Corporate Wear", "Vehicle Branding", "National Campaign"],
    },
    {
      title: "Meikles-Hyatt Regency Hotel Exhibition Stand",
      description:
        "Originated concept, designed, produced, and successfully constructed the exhibition at Sanganayi Travel Expo 2023.",
      category: "Marketing Solutions",
      image: "/images/portfolio/meikles-hotel-exhibition.jpg",
      tags: ["Exhibition Design", "Event Marketing", "Hospitality"],
    },
    {
      title: "DHL Corporate Video Production",
      description:
        "Professional video production for DHL's corporate communications, featuring high-quality cinematography and storytelling.",
      category: "Media Production",
      image: "/images/portfolio/dhl-corporate-video.jpg",
      tags: ["Corporate Video", "Professional Production", "Logistics"],
    },
    {
      title: "Zimbabwe Tourism Authority Campaign",
      description:
        "Comprehensive marketing campaign including print materials, digital assets, and awards ceremony videos for stage area digital screens.",
      category: "Media Production",
      image: "/images/portfolio/zimbabwe-tourism-campaign.jpg",
      tags: ["Tourism Marketing", "Campaign Design", "Multi-media"],
    },
    {
      title: "School Management System (My Students Track)",
      description:
        "Est. 2025. A fast-growing school administration system that manages fees payments, school uniform sales, academic results, communication and any other payment that requires record keeping. Widely used across Zimbabwe by schools seeking a reliable, easy-to-use platform for day-to-day operations.",
      category: "I.T. Solutions",
      image: "/images/portfolio/croco-motors-ecommerce.jpg",
      tags: ["School Administration", "Student Management", "Zimbabwe"],
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Bottom Right Sunset Gradient with Warm Deep Glow */}
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] pointer-events-none z-0">
        {/* Main sunset gradient with warmer yellows */}
        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-600/35 via-orange-500/30 via-orange-600/25 to-transparent blur-3xl"></div>
        {/* Inner glow layer with deeper warmth */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-500/45 via-orange-400/35 to-transparent blur-2xl"></div>
        {/* Intense center glow with rich amber tones */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-amber-400/55 via-orange-300/45 to-transparent blur-xl"></div>
        {/* Core bright spot with warm golden center */}
        <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-tl from-amber-300/65 via-orange-200/55 to-transparent blur-lg animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-orange-500/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-white">
                Calch Media
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-white hover:text-orange-400 transition-colors">
                  Portfolio
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2">Our Portfolio</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Our Work</h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                We are proud of the work we do and the results we deliver for our clients. Explore some of our favorite
                projects below.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="pb-16 px-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={`${
                    activeFilter === filter
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "border-orange-500/30 text-orange-400 hover:bg-orange-500 hover:text-white"
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white">{project.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="border-orange-500/30 text-orange-400 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-orange-400">200+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-orange-400">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-orange-400">7+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-orange-400">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">What Our Clients Say</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Hear from some of our satisfied clients about their experience working with us
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20">
                <CardContent className="p-8 space-y-6">
                  <div className="text-orange-400 text-4xl">"</div>
                  <p className="text-gray-300 italic">
                    "Calch Media transformed our brand identity completely. Their attention to detail and creative
                    vision exceeded our expectations. The vehicle branding project was executed flawlessly."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      NE
                    </div>
                    <div>
                      <div className="text-white font-semibold">Natfort Energy</div>
                      <div className="text-gray-400 text-sm">Energy Solutions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20">
                <CardContent className="p-8 space-y-6">
                  <div className="text-orange-400 text-4xl">"</div>
                  <p className="text-gray-300 italic">
                    "The press advertisements created by Calch Media significantly boosted our brand visibility. Their
                    creative team understood our vision perfectly and delivered outstanding results."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      TE
                    </div>
                    <div>
                      <div className="text-white font-semibold">Tendo Electronics</div>
                      <div className="text-gray-400 text-sm">Electronics Retail</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20">
                <CardContent className="p-8 space-y-6">
                  <div className="text-orange-400 text-4xl">"</div>
                  <p className="text-gray-300 italic">
                    "We have worked with Calch Media for more than a decade on several National Tourism events Including Sanganayi Expos, United Nations World Tourism Organization Summit. We highly recommend Calch Media for their professionalism, reliability and satisfactory service delivery"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      MH
                    </div>
                    <div>
                      <div className="text-white font-semibold">Zimbabwe Tourism Authority</div>
                      <div className="text-gray-400 text-sm">Tourism Regulatory Board</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-12 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Calch Media</h3>
                <p className="text-gray-400">The Touch of Art in Marketing Solutions, Media Production & I.T. Solutions.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Services</h4>
                <div className="space-y-2 text-gray-400">
                  <div>Marketing Solutions</div>
                  <div>Media Production</div>
                  <div>I.T. Solutions</div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Company</h4>
                <div className="space-y-2 text-gray-400">
                  <div>About Us</div>
                  <div>Portfolio</div>
                  <div>Careers</div>
                  <div>Contact</div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <div>info@calchmedia.com</div>
                  <div>+263 773 630 814</div>
                  <div>12th Floor, Joina City, Harare (Head Office)</div>
                  <div>4th Floor, Karigamombe Building, Harare</div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Calch Media. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
