import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  GraduationCap,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Shield,
  WifiOff,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "My Students Track | Zimbabwe's School Management System | Calch Media",
  description:
    "My Students Track is Zimbabwe's school management system for owners, directors, and administrators. Run your school online or offline, with budget-friendly packages and a lifetime offline licence.",
}

const benefits = [
  "Monitor your entire school from anywhere.",
  "Know today's income and expenses instantly.",
  "See outstanding fees in real time.",
  "Generate financial reports with one click.",
  "Get an AI-powered, well-written daily business summary with one button.",
  "Track every dollar with confidence.",
  "Eliminate manual paperwork and errors.",
  "Manage students, transport, and school uniform sales from one system.",
  "Make faster, data-driven decisions.",
  "Secure all school records in one place.",
  "Give parents instant access to student academic reports online, with no more printing report books.",
  "Save hours on administration every week and improve accountability across your school.",
]

const offlineFeatures = [
  "Works fully offline. No internet needed.",
  "Easy to install and run on your school computer.",
  "Manages student records, fees, and balances in one place.",
  "Built-in point of sale and stock management for uniforms, books, and more.",
  "Handles school trip payments and special contributions.",
  "Generates academic reports that can be sent to parents as PDFs.",
  "Tracks school expenses and daily financial activity.",
  "Produces clear financial reports for better decision-making.",
]

const onlineExtras = [
  "Remote access for directors to financial and admin updates.",
  "AI-powered daily analysis and a written business summary.",
  "Parent portal for accessing academic reports (Premium).",
  "Online academic reports (Premium).",
]

const standardIncludes = [
  "Fees Management",
  "Transport Management",
  "Inventory Management",
  "Accounts Module",
  "AI Daily Analyzer",
  "Automatic Instant Financial Reports",
  "School Directors Online Link",
]

const platinumIncludes = [
  "Multi-school installation",
  "Custom requirements",
  "Advanced integrations",
  "Dedicated support",
  "Scalable and flexible",
]

export default function MyStudentsTrackPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-600/35 via-orange-500/30 via-orange-600/25 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-500/45 via-orange-400/35 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-amber-400/55 via-orange-300/45 to-transparent blur-xl"></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-tl from-amber-300/65 via-orange-200/55 to-transparent blur-lg animate-pulse"></div>
      </div>

      <div className="relative z-10">
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
                <Link href="/services" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Portfolio
                </Link>
                <Link href="/my-students-track" className="text-white hover:text-orange-400 transition-colors">
                  School System
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </div>
              <div className="md:hidden relative">
                <details className="group">
                  <summary className="list-none cursor-pointer select-none text-white hover:text-orange-400 transition-colors">
                    <Menu className="h-7 w-7" />
                  </summary>
                  <div className="absolute right-0 mt-3 w-56 rounded-lg border border-orange-500/20 bg-black/95 backdrop-blur-md shadow-lg overflow-hidden">
                    <Link href="/" className="block px-4 py-3 text-white hover:bg-orange-500/10">
                      Home
                    </Link>
                    <Link href="/about" className="block px-4 py-3 text-gray-200 hover:bg-orange-500/10">
                      About
                    </Link>
                    <Link href="/services" className="block px-4 py-3 text-gray-200 hover:bg-orange-500/10">
                      Services
                    </Link>
                    <Link href="/portfolio" className="block px-4 py-3 text-gray-200 hover:bg-orange-500/10">
                      Portfolio
                    </Link>
                    <Link href="/my-students-track" className="block px-4 py-3 text-gray-200 hover:bg-orange-500/10">
                      School System
                    </Link>
                    <Link href="/contact" className="block px-4 py-3 text-gray-200 hover:bg-orange-500/10">
                      Contact
                    </Link>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </nav>

        <section className="pt-32 pb-16 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2">
                  My Students Track
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Zimbabwe&apos;s Best School Management System is Here
                </h1>
                <p className="text-xl text-orange-300 font-medium">
                  School owners, directors, and administrators — this is for you.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Powerful. Reliable. Affordable. Works online or offline — your choice, and your budget. Every
                  package is budget friendly, and the system is built to grow with your school.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#packages">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                      View Packages
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a href="https://wa.me/263773630814" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white bg-transparent px-8 py-4 text-lg"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Enquire on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gray-900/50 border-orange-500/20">
                  <CardContent className="p-6 space-y-3">
                    <WifiOff className="h-8 w-8 text-orange-400" />
                    <h2 className="text-lg font-bold text-white">Offline</h2>
                    <p className="text-gray-300 text-sm">Once-off purchase with a lifetime licence. No internet required.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-orange-500/20">
                  <CardContent className="p-6 space-y-3">
                    <Globe className="h-8 w-8 text-orange-400" />
                    <h2 className="text-lg font-bold text-white">Online</h2>
                    <p className="text-gray-300 text-sm">Directors follow the school from anywhere. Parents join on Premium.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-orange-500/20">
                  <CardContent className="p-6 space-y-3">
                    <Shield className="h-8 w-8 text-orange-400" />
                    <h2 className="text-lg font-bold text-white">One system</h2>
                    <p className="text-gray-300 text-sm">Administration and finance together, with fewer errors.</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-orange-500/20">
                  <CardContent className="p-6 space-y-3">
                    <GraduationCap className="h-8 w-8 text-orange-400" />
                    <h2 className="text-lg font-bold text-white">Built to grow</h2>
                    <p className="text-gray-300 text-sm">From a single school to a multi-school installation.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-900/30">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-12 space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Benefits of using our system</h2>
              <p className="text-xl text-gray-300">
                Online and offline packages cover these needs in different ways. Compare them below and choose what
                fits your school.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start space-x-3 bg-gray-900/50 border border-orange-500/20 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Works online or offline</h2>
              <p className="text-xl text-gray-300">Your choice. And your budget.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-orange-500/40">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <Monitor className="h-8 w-8 text-orange-400" />
                      <h3 className="text-2xl font-bold text-white">Offline system</h3>
                    </div>
                    <Badge className="bg-orange-500 text-white">Most schools choose this</Badge>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    The offline system is powerful and practical for everyday use. Most schools prefer it because it is
                    reliable, fast, and does not depend on network issues. It covers administration and finance in one
                    system. It is a once-off purchase with a lifetime licence.
                  </p>
                  <div className="space-y-3">
                    {offlineFeatures.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-orange-500/20">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-8 w-8 text-orange-400" />
                    <h3 className="text-2xl font-bold text-white">Online system</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We also offer an online version when you need it. It includes the school management system in the
                    cloud, with no initial installation fee, plus remote access for directors and AI-powered daily
                    analysis. The Premium package adds a parent portal and online academic reports.
                  </p>
                  <div className="space-y-3">
                    {onlineExtras.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">
                    Parent access to academic reports online is part of the Online Premium package. The offline system
                    can still produce academic reports as PDFs for parents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="packages" className="py-20 px-6 bg-gray-900/30 scroll-mt-24">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2">
                No initial installation fee
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Packages catalog</h2>
              <p className="text-xl text-gray-300">
                Powerful. Reliable. Affordable. Choose the package that fits your school.
              </p>
            </div>

            <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
              <Card className="bg-gray-900/50 border-orange-500/20 overflow-hidden">
                <CardContent className="p-4 space-y-3">
                  <Image
                    src="/images/my-students-track/packages-flyer.jpg"
                    alt="My Students Track packages catalog flyer"
                    width={700}
                    height={1200}
                    className="w-full h-auto rounded-md"
                  />
                  <p className="text-xs text-gray-400 text-center">Official packages flyer. Terms and conditions apply.</p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-900/50 border-orange-500/20">
                  <CardContent className="p-6 space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-orange-400 text-sm font-semibold tracking-wide">ONLINE</p>
                        <h3 className="text-2xl font-bold text-white">Standard Package</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$150</div>
                        <div className="text-sm text-gray-400">per term</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {standardIncludes.map((item) => (
                        <div key={item} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-orange-500/40">
                  <CardContent className="p-6 space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-orange-400 text-sm font-semibold tracking-wide">ONLINE</p>
                        <h3 className="text-2xl font-bold text-white">Premium Package</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$320</div>
                        <div className="text-sm text-gray-400">per term</div>
                      </div>
                    </div>
                    <p className="text-gray-300">Includes everything in the Standard package, plus:</p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200">Online Academic Reports</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200">Parents Portal</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-orange-500/40">
                  <CardContent className="p-6 space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-orange-400 text-sm font-semibold tracking-wide">OFFLINE</p>
                        <h3 className="text-2xl font-bold text-white">Offline Package</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">$350</div>
                        <div className="text-sm text-gray-400">once-off</div>
                        <div className="text-sm text-orange-300">Lifetime licence</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        "All core modules included",
                        "Works offline",
                        "Secure local data",
                        "Ideal for schools with limited internet",
                      ].map((item) => (
                        <div key={item} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg bg-orange-500/10 border border-orange-500/20 px-4 py-3 text-gray-200">
                      Includes $50 per year for annual updates.
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-orange-500/20">
                  <CardContent className="p-6 space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-orange-400 text-sm font-semibold tracking-wide">MULTI-SCHOOL</p>
                        <h3 className="text-2xl font-bold text-white">Platinum Package</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">Quote</div>
                        <div className="text-sm text-gray-400 max-w-[9rem]">
                          Per client requirements and specifications
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300">Built to grow with your school, including groups that run more than one campus.</p>
                    <div className="space-y-3">
                      {platinumIncludes.map((item) => (
                        <div key={item} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-8">Terms and conditions apply.</p>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-orange-800">
          <div className="container mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Enquire with us</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Tell us about your school and we will help you choose the package that fits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/263773630814" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp +263 773 630 814
                </Button>
              </a>
              <a href="tel:+263773630814">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent px-8 py-4 text-lg"
                >
                  Call Now
                </Button>
              </a>
            </div>
            <p className="flex items-center justify-center gap-2 text-orange-100">
              <MapPin className="h-5 w-5" />
              1st Floor, Batanai Gardens, Harare
            </p>
            <p className="text-sm text-orange-100/80">Terms and conditions apply.</p>
          </div>
        </section>

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
                  <Link href="/my-students-track" className="block hover:text-orange-400">
                    My Students Track
                  </Link>
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
                  <div>1st Floor, Batanai Gardens, Harare</div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2026 Calch Media. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
