import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "50+", label: "Happy Clients" },
    { number: "200+", label: "Projects Completed" },
    { number: "3", label: "Core Services" },
  ]

  const team = [
    {
      name: "Calvin Chikonodanga",
      role: "Founder & Creative Director",
      image: "/images/team/calvin-chikonodanga.jpg",
    },
    {
      name: "Lisa Chawuya",
      role: "Non-Executive Director",
      image: "/images/team/lisa-chawuya.jpg",
    },
    {
      name: "Emmanuel Vurandi",
      role: "Production Executive",
      image: "/images/team/emmanuel-vurandi.jpg",
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
                <Link href="/about" className="text-white hover:text-orange-400 transition-colors">
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
        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2">
                About Calch Media
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">Crafting Excellence Since 2017</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We deliver integrated Marketing Solutions, Media Production, and I.T. Solutions that help brands grow,
                stay visible, and operate efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-orange-400">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Story</h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    CALCH ASCEND PVT LTD, trading as CALCH MEDIA, was founded in 2017 as a dedicated branding and media
                    house. We specialize in providing fully integrated marketing communication and media services
                    designed to make our clients succeed.
                  </p>
                  <p>
                    Quality is at the heart of what we do; our systematic workflows are continuously updated to maintain
                    peak efficiency, and our work is meticulously proofread before production. The driving force behind
                    our success is our highly dedicated staff, who are committed to the growth of our organization and,
                    most importantly, to our customers' satisfaction.
                  </p>
                  <p>
                    Over the years, we have expanded our services to include I.T. solutions, making us a one-stop
                    solution for Marketing Solutions, Media Production, and digital systems that help your business grow.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/office/joina-city-office.jpg"
                  alt="Calch Media Office"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">2017</div>
                    <div className="text-sm">Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Objective */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                  <p className="text-gray-300">
                    To provide quality services that exceed the expectations of our esteemed customers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  <p className="text-gray-300">
                    To build long-term relationships with our customers by providing exceptional customer service and
                    pursuing innovation to create a satisfactory customer experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Objective</h3>
                  <p className="text-gray-300">
                    To be Zimbabwe's market leader in innovative marketing communications and digital solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Meet Our Team</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">The creative minds behind Calch Media's success</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group"
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-orange-400">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-800">
          <div className="container mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Work With Us?</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who trust Calch Media with their brand.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
