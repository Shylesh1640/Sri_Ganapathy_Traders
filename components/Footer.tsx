import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-concrete/20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center p-2 shadow-lg">
                <img
                  src="/assets/logo.png"
                  alt="Sri Ganapathy Traders Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <div className="font-barlow font-bold text-lg text-white">
                  SRI GANAPATHY
                </div>
                <div className="text-sm text-concrete">TRADERS</div>
              </div>
            </div>
            <p className="text-concrete text-sm leading-relaxed">
              Since 2008, serving 100K+ customers with wholesale & retail
              construction supplies from 20+ trusted brands. Shipping available
              all over Kanniyakumari District.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-barlow font-bold text-lg text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-concrete hover:text-orange transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="text-concrete hover:text-orange transition-colors duration-300"
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link
                  href="/wholesale"
                  className="text-concrete hover:text-orange transition-colors duration-300"
                >
                  Wholesale
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-concrete hover:text-orange transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-concrete hover:text-orange transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-barlow font-bold text-lg text-white mb-4">
              Our Products
            </h3>
            <ul className="space-y-2 text-concrete text-sm">
              <li>Cement</li>
              <li>TMT Bars</li>
              <li>Roofing Sheets</li>
              <li>Structural Steel</li>
              <li>Paints</li>
              <li>Construction Hardware</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-barlow font-bold text-lg text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919486579329"
                  className="flex items-center space-x-3 text-concrete hover:text-orange transition-colors duration-300"
                >
                  <Phone size={18} />
                  <span className="text-sm">+91 94865 79329</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919488229329"
                  className="flex items-center space-x-3 text-concrete hover:text-orange transition-colors duration-300"
                >
                  <Phone size={18} />
                  <span className="text-sm">+91 94882 29329</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919486579329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-concrete hover:text-orange transition-colors duration-300"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sriganapathiselva@gmail.com"
                  className="flex items-center space-x-3 text-concrete hover:text-orange transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span className="text-sm">sriganapathiselva@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/65LzcvXVvUZ6Gze46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-concrete hover:text-orange transition-colors duration-300"
                >
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Nagercoil, Kanniyakumari District, Tamil Nadu
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-concrete/20 mt-12 pt-8 text-center text-concrete text-sm">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Sri Ganapathy Traders. All rights
            reserved.
          </p>
          <p className="text-xs">
            <a
              href="https://sri-ganapathy-traders.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange transition-colors duration-300"
            >
              www.sri-ganapathy-traders.vercel.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
