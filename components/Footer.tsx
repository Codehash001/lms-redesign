import Link from "next/link";
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-8xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm leading-relaxed text-blue-100">
              Faculty of Technology, University of Sri Jayewardenepura is committed to excellence in research, education and fostering innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://www.sjp.ac.lk/tech/" className="text-blue-100 hover:text-white transition-colors">
                  Faculty of Technology
                </Link>
              </li>
              <li>
                <Link href="https://www.sjp.ac.lk" className="text-blue-100 hover:text-white transition-colors">
                  University of Sri Jayewardenepura
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Center for IT Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 justify-center">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="text-blue-100">Pitipana, Homagama, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Phone className="h-4 w-4 shrink-0" />
                <span className="text-blue-100">0113 438 555</span>
              </li>
              <li className="flex items-center gap-2 justify-center">
                <Mail className="h-4 w-4 shrink-0" />
                <span className="text-blue-100">info@tech.sjp.ac.lk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-blue-200">
          <Link href="#" className="text-blue-100 hover:text-white transition-colors">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-blue-100 hover:text-white transition-colors">
            <Youtube className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-blue-100 hover:text-white transition-colors">
            <Mail className="h-5 w-5" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-blue-100">
          <p> {currentYear} Faculty of Technology - University of Sri Jayewardenepura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
