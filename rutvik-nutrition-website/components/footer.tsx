import Link from "next/link"
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">
                Rutvik <span className="text-green-500">Nutrition</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Transform your health with expert nutrition coaching and personalized wellness programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-green-500 transition-colors">
                Home
              </Link>
              <Link href="/meet-rutvik" className="block text-gray-400 hover:text-green-500 transition-colors">
                Meet Rutvik
              </Link>
              <Link href="/programs" className="block text-gray-400 hover:text-green-500 transition-colors">
                Programs
              </Link>
              <Link href="/feedback" className="block text-gray-400 hover:text-green-500 transition-colors">
                Feedback
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <div className="text-gray-400">Weight Loss Programs</div>
              <div className="text-gray-400">Weight Gain Plans</div>
              <div className="text-gray-400">Nutrition Coaching</div>
              <div className="text-gray-400">Fitness Guidance</div>
              <div className="text-gray-400">Lifestyle Transformation</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">+91 91465 41156</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">rutvik@nutrition.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">Akot, Maharashtra</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/rutvik__deoke?utm_source=ig_web_button_share_sheet&igsh=MWc3MXEyM2thaHY4ag==" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Rutvik Nutrition. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
