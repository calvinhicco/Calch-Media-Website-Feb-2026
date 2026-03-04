import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, Camera, Code, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const clients = [
    "DHL",
    "Croco Motors",
    "Zimbabwe Tourism Authority",
    "Meikles",
    "Tendo",
    "ZPC",
    "Natfort Energy",
    "Scripture Union",
  ]

  const portfolioHighlights = [
    {
      title: "Natfort Energy",
      description: "Vehicle and office branding",
      category: "Marketing Solutions",
      image: "/images/portfolio/natfort-energy-branding.jpg",
    },
    {
      title: "Tendo Electronics",
      description: "Creative press advert designs",
      category: "Marketing Solutions",
      image: "/images/portfolio/tendo-electronics-ads.jpg",
    },
    {
      title: "Slushie's Restaurants",
      description: "Full shop branding and signage",
      category: "Marketing Solutions",
      image: "/images/portfolio/slushies-restaurant.jpg",
    },
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
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-white">Calch Media</div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-orange-400 transition-colors">
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
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 relative">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] relative">
              {/* Hero Image 2 - Static next to main text, only visible in hero section */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none">
                <Image
                  src="/images/hero/hero-image-2.png"
                  alt="Calch Media Work Sample 2"
                  width={1024}
                  height={1536}
                  className="object-contain"
                  style={{
                    width: "1536px",
                    height: "2304px",
                    maxWidth: "50vw",
                    maxHeight: "70vh",
                    filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                  }}
                  priority
                />
              </div>

              {/* Hero Image 1 - Static in bottom right corner, only visible in hero section */}
              <div
                className="absolute bottom-0 right-4 z-20 pointer-events-none"
                style={{ width: "15vw", height: "15vh" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/hero/hero-image-1.png"
                    alt="Calch Media Work Sample 1"
                    width={896}
                    height={1024}
                    className="object-contain"
                    style={{
                      filter: "drop-shadow(0 15px 35px rgba(249, 115, 22, 0.3))",
                    }}
                  />
                </div>
              </div>

              {/* Left Side - Text Content */}
              <div className="space-y-8 relative">
                <div className="space-y-4">
                  {/* Logo Space - Add your logo here */}
                  <div className="mb-6">
                    <Image
                      src="/images/calch-media-logo.png"
                      alt="Calch Media Logo"
                      width={200}
                      height={80}
                      className="mb-4"
                    />
                  </div>
                  <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">Calch Media</h1>
                  <p className="text-xl lg:text-2xl text-gray-300 font-light">
                    The Touch of Art in Marketing, Media & I.T. Solutions.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center space-x-4 pt-8 relative">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 border-2 border-gray-800"
                      ></div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-orange-400 mr-1" />
                      <span className="text-white font-semibold">4.9</span>
                      <span className="ml-1">from 50+ clients</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Branding Element */}
              <div className="relative w-full h-[80vh] flex items-center justify-center">
                {/* Top Left - Branding Element */}
                <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center animate-bounce z-5">
                  <Palette className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Preview Section */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2">Since 2017</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Integrated Marketing, Media & Technology Since 2017</h2>
              <div className="text-xl text-gray-300 leading-relaxed space-y-6">
                <p>
                  Founded in 2017 by Calvin Chikonodanga, Calch Media is an integrated marketing communications, media
                  production, and I.T. solutions company built to move businesses forward. We combine strategic branding,
                  professional media production, and powerful digital systems to ensure our clients are visible,
                  competitive, and operationally efficient.
                </p>
                <p>
                  From brand positioning and creative design to high-impact photography, video production, and business
                  I.T. solutions, we deliver solutions that don’t just look good — they perform.
                </p>
                <p>
                  Our commitment is to long-term partnerships driven by innovation, precision, and measurable results,
                  positioning every brand we serve for sustainable growth and lasting impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Core Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions for your brand's digital and physical presence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Palette className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Marketing Solutions</h3>
                  <p className="text-gray-300">
                    We create stunning visuals for online and print, from iconic logos to large-scale outdoor
                    advertising, ensuring your message is always clear and creative.
                  </p>
                  <Button variant="ghost" className="text-orange-400 hover:text-orange-300 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Camera className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Media Production</h3>
                  <p className="text-gray-300">
                    Our experienced media division professionally captures your corporate and social occasions with
                    high-quality videography and photography.
                  </p>
                  <Button variant="ghost" className="text-orange-400 hover:text-orange-300 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">I.T. Solutions</h3>
                  <p className="text-gray-300">
                    We architect and build powerful digital experiences, including custom web applications, mobile apps,
                    and e-commerce platforms to elevate your brand.
                  </p>
                  <Button variant="ghost" className="text-orange-400 hover:text-orange-300 p-0">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Highlights Section */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">A Glimpse of Our Work</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Showcasing some of our favorite projects and client success stories
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {portfolioHighlights.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white">{project.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/portfolio">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  View Our Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Trusted By Leading Brands</h2>
              <p className="text-xl text-gray-400">We're proud to work with industry leaders across Zimbabwe</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-orange-500/20 rounded-lg p-6 flex items-center justify-center hover:border-orange-500/40 transition-colors"
                >
                  <span className="text-white font-semibold text-lg">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-800">
          <div className="container mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Transform Your Brand?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Let's create something exceptional together. Get in touch with our team today.
            </p>
            <div className="flex justify-center">
              <a href="tel:+263773630814">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Call Now
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
                <p className="text-gray-400">The Touch of Art in Marketing, Media & I.T. Solutions.</p>
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
