"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  Camera,
  Code,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe,
  ShoppingCart,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function ServicesPage() {
  const [showBrandingGallery, setShowBrandingGallery] = useState(false)
  const [showMediaGallery, setShowMediaGallery] = useState(false)
  const [showMajorProjects, setShowMajorProjects] = useState(false)
  const [currentBrandingSlide, setCurrentBrandingSlide] = useState(0)
  const [currentMediaSlide, setCurrentMediaSlide] = useState(0)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const brandingServices = [
    "Logo Design",
    "Vehicle Branding",
    "Corporate Wear",
    "Exhibition Stands",
    "Online & Press Adverts",
    "Banners",
    "Posters",
    "Flyers",
    "Business Cards",
    "Letterheads",
    "Magazines & Diaries",
  ]

  const mediaServices = [
    "Video Adverts Creation",
    "Corporate Video Filming",
    "Event Photography",
    "Professional Headshots",
  ]

  const softwareServices = [
    "Custom Web Application Development",
    "Mobile App Development (iOS & Android)",
    "E-commerce Solutions",
    "UI/UX Design",
    "Content Management Systems (CMS)",
    "Website Development",
  ]

  // Sample branding work images (15 images)
  const brandingImages = Array.from({ length: 15 }, (_, i) => ({
    src: `/images/branding/branding-${i + 1}.jpg`,
    alt: `Branding Work ${i + 1}`,
  }))

  // Sample media work images (20 images)
  const mediaImages = Array.from({ length: 20 }, (_, i) => ({
    src: `/images/media/media-${i + 1}.jpg`,
    alt: `Media Work ${i + 1}`,
  }))

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your brand, goals, and target audience to create a tailored strategy.",
    },
    {
      step: "02",
      title: "Creative Development",
      description: "Our team develops creative concepts and designs that align with your brand vision.",
    },
    {
      step: "03",
      title: "Production & Development",
      description: "We bring your vision to life with high-quality production and development processes.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We ensure successful launch and provide ongoing support for your projects.",
    },
  ]

  const nextBrandingSlide = () => {
    setCurrentBrandingSlide((prev) => (prev + 5) % brandingImages.length)
  }

  const prevBrandingSlide = () => {
    setCurrentBrandingSlide((prev) => (prev - 5 + brandingImages.length) % brandingImages.length)
  }

  const nextMediaSlide = () => {
    setCurrentMediaSlide((prev) => (prev + 5) % mediaImages.length)
  }

  const prevMediaSlide = () => {
    setCurrentMediaSlide((prev) => (prev - 5 + mediaImages.length) % mediaImages.length)
  }

  const openImageModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

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

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
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
                <Link href="/services" className="text-white hover:text-orange-400 transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-gray-300 hover:text-orange-400 transition-colors">
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
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2">Our Services</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">Our Integrated Solutions</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We offer a comprehensive suite of services designed to cover every aspect of your brand's presence, from
                visual identity to digital interaction.
              </p>
            </div>
          </div>
        </section>

        {/* Service 1: Marketing Solutions */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                  <Palette className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">Marketing Solutions</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We are experts in creating compelling graphics for both digital platforms and printable marketing
                  collateral. Our creative team handles everything from indoor office branding to impactful outdoor
                  advertising, focusing on innovative artwork that complements your message.
                </p>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => setShowBrandingGallery(!showBrandingGallery)}
                >
                  Glimpse of Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <Card className="bg-gray-900/50 border-orange-500/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Services Include:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {brandingServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Branding Gallery Panel */}
            {showBrandingGallery && (
              <div className="mt-12 bg-gray-900/30 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Our Branding Work</h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevBrandingSlide}
                      className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white bg-transparent"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextBrandingSlide}
                      className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white bg-transparent"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {brandingImages.slice(currentBrandingSlide, currentBrandingSlide + 5).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-32 bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 transition-all"
                      onClick={() => openImageModal(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Service 2: Media Production */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="bg-gray-900/50 border-orange-500/20 lg:order-1">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Services Include:</h3>
                  <div className="space-y-4">
                    {mediaServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="h-6 w-6 text-orange-400" />
                      <span className="text-orange-400 font-semibold">Professional Quality</span>
                    </div>
                    <p className="text-gray-300">
                      High-end equipment and experienced team ensuring broadcast-quality results.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-8 lg:order-2">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                  <Camera className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">Media Production</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our professional media division covers both social and corporate events. With a team of experienced
                  videographers and photographers, we guarantee a professional service characterized by thorough
                  planning, coordination, and the delivery of high-quality media.
                </p>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => setShowMediaGallery(!showMediaGallery)}
                >
                  View Media
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Media Gallery Panel */}
            {showMediaGallery && (
              <div className="mt-12 bg-gray-900/30 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Our Media Work</h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevMediaSlide}
                      className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white bg-transparent"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextMediaSlide}
                      className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white bg-transparent"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {mediaImages.slice(currentMediaSlide, currentMediaSlide + 5).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-32 bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 transition-all"
                      onClick={() => openImageModal(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Service 3: I.T. Solutions */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">I.T. Solutions</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  As a natural extension of our media and branding expertise, we offer bespoke I.T. solutions to bring
                  your brand to life in the interactive digital world. We build robust, scalable, and user-friendly
                  digital platforms that provide tangible value to your business and your customers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-lg">
                    <Globe className="h-5 w-5 text-orange-400" />
                    <span className="text-white">Web Apps</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-lg">
                    <Smartphone className="h-5 w-5 text-orange-400" />
                    <span className="text-white">Mobile Apps</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-orange-500/10 px-4 py-2 rounded-lg">
                    <ShoppingCart className="h-5 w-5 text-orange-400" />
                    <span className="text-white">E-commerce</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={() => setShowMajorProjects(!showMajorProjects)}
                >
                  Major Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <Card className="bg-gray-900/50 border-orange-500/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Services Include:</h3>
                  <div className="space-y-4">
                    {softwareServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                        <span className="text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Major Projects Panel */}
            {showMajorProjects && (
              <div className="mt-12 bg-gray-900/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Major Software Projects</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project 1 */}
                  <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="relative h-48 bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/images/software/corporate-logging-system.jpg"
                          alt="Corporate Client Logging System"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Developed Corporate Client Logging System (2025)
                      </h4>
                      <p className="text-gray-300">
                        A comprehensive client management and logging system designed for corporate environments.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Project 2 */}
                  <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="relative h-48 bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <Image
                          src="/images/software/my-students-track.jpg"
                          alt="My Students Track School Management System"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        My Students Track - A Comprehensive School Management Admin Software (2025)
                      </h4>
                      <p className="text-gray-300">
                        Complete school administration software for managing students, staff, and academic operations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Process</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A systematic approach to delivering exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="bg-gray-900/50 border-orange-500/20 relative">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </CardContent>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-800">
          <div className="container mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex justify-center">
              <a href="tel:+263773630814">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Schedule Consultation
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-12 px-6 border-t border-gray-800">
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
                  <div>12th Floor, Joina City, Harare</div>
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
