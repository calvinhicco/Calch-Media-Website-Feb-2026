import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Menu } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "My Students Track | I.T. Software Solution | Calch Media",
  description:
    "My Students Track is a major successful I.T. software solution by Calch Media. It is school management software for fees, transport, inventory, accounts, and reports, online or offline.",
}

const summaryPoints = [
  "Built by Calch Media as a major successful I.T. software solution.",
  "Made for school owners, directors, and administrators.",
  "Fees, transport, inventory, accounts, and academic reports in one system.",
  "Runs online or fully offline, including a once-off lifetime offline licence.",
  "Financial reports and an AI-powered daily business summary.",
  "Online Premium adds a parents portal and online academic reports.",
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

        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-4xl space-y-10">
            <div className="space-y-6">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2">
                I.T. Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">My Students Track</h1>
              <p className="text-xl text-orange-300">A major successful I.T. software solution by Calch Media.</p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My Students Track is Calch Media&apos;s school management system for owners, directors, and
                administrators. It keeps student records, fees, transport, uniform sales, expenses, and academic
                reports in one place. Schools can run it online or fully offline, and the offline version is a once-off
                purchase with a lifetime licence.
              </p>
            </div>

            <Card className="bg-gray-900/50 border-orange-500/20">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-bold text-white">At a glance</h2>
                {summaryPoints.map((point) => (
                  <div key={point} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://mystudentstrack.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  Open the full My Students Track website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white bg-transparent px-8 py-4 text-lg"
                >
                  Talk to Calch Media
                </Button>
              </Link>
            </div>
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
              <p>&copy; 2026 Calch Media. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
