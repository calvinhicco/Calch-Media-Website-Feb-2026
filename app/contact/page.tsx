"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@calchmedia.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+263 773 630 814",
      description: "Call us during business hours",
    },
    {
      icon: MapPin,
      title: "Office 1",
      details: "12th Floor, Joina City, Harare",
      description: "Our main office location",
    },
    {
      icon: MapPin,
      title: "Office 2",
      details: "4th Floor Karigamombe Building, Harare",
      description: "Our secondary office location",
    },
  ]

  const services = [
    "Marketing Solutions",
    "Media Production",
    "I.T. Solutions",
    "Other",
  ]

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
                <Link href="/portfolio" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Portfolio
                </Link>
                <Link href="/contact" className="text-white hover:text-orange-400 transition-colors">
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
              {/* Logo and Tagline */}
              <div className="mb-8">
                <Image
                  src="/images/calch-media-logo.png"
                  alt="Calch Media Logo"
                  width={200}
                  height={80}
                  className="mx-auto mb-4"
                />
                <p className="text-lg text-gray-300">The Touch of Art in Marketing Solutions, Media Production & I.T. Solutions.</p>
              </div>

              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2">Get In Touch</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">Let's Create Together</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Have a project in mind or want to learn more about our services? We would love to hear from you. Reach
                out today, and let's build something exceptional.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold text-white">Send us a message</h2>
                      <p className="text-gray-400">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white">Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white">Company</label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white">Email *</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white">Phone</label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+263 xxx xxx xxx"
                            className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Service of Interest</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:border-orange-500 focus:outline-none"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Your Message *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={5}
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500"
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-white">Get in touch</h2>
                  <p className="text-gray-400 text-lg">
                    We're here to help and answer any question you might have. We look forward to hearing from you.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20 hover:border-orange-500/40 transition-colors"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                            <p className="text-orange-400 font-medium">{info.details}</p>
                            <p className="text-gray-400 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                        <div className="space-y-1 text-gray-400">
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 9:00 AM - 1:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-white">Other Ways to Connect</h2>
              <p className="text-xl text-gray-400">Choose the method that works best for you</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Call Directly</h3>
                  <p className="text-gray-300">
                    Speak with our team directly during business hours for immediate assistance.
                  </p>
                  <a href="tel:+263773630814">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Call Now</Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Facebook</h3>
                  <p className="text-gray-300">Follow us on Facebook for updates and connect with our community.</p>
                  <a href="https://facebook.com/calchmedia" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Follow Us</Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Instagram</h3>
                  <p className="text-gray-300">See our latest work and behind-the-scenes content on Instagram.</p>
                  <a href="https://instagram.com/calchmedia" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Follow Us</Button>
                  </a>
                </CardContent>
              </Card>
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
