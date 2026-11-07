"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/brands", label: "Brands" },
    { href: "/about", label: "About Us" },
    { href: "/wholesale", label: "Wholesale" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 p-1.5 shadow-lg">
              <img
                src="/logo.png"
                alt="Sri Ganapathy Traders Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="hidden md:block">
              <div className="font-barlow font-bold text-xl text-white">
                SRI GANAPATHY TRADERS
              </div>
              <div className="text-xs text-concrete">
                Construction Supplies Since 2008
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white font-medium hover:text-orange transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Call Button */}
          <a
            href="tel:+919486579329"
            className="hidden md:flex items-center space-x-2 bg-orange hover:bg-orange/90 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-concrete/20"
          >
            <div className="container-custom px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white font-medium text-lg py-2 hover:text-orange transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+919486579329"
                className="flex items-center justify-center space-x-2 bg-orange text-white font-semibold px-6 py-3 rounded-md w-full mt-4"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
