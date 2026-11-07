"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Hammer,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero background animation
      gsap.to(".hero-bg", {
        scale: 1.1,
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });

      // Scroll animations for sections
      gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });

      // Stagger animation for cards
      gsap.utils.toArray(".stagger-item").forEach((element: any, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Parallax effect for images
      gsap.utils.toArray(".parallax-image").forEach((element: any) => {
        gsap.to(element, {
          y: -50,
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      name: "Cement",
      brand: "Dalmia",
      image: "/assets/images/cement-bags.jpg"
    },
    {
      name: "TMT Bars",
      brand: "Tata Tiscon",
      image: "/assets/images/tmt-steel-bars.jpg"
    },
    {
      name: "Roofing Sheets",
      brand: "Visaka & Tata",
      image: "/assets/images/roofing-sheets.jpg"
    },
    {
      name: "Structural Steel",
      brand: "Tata Structura",
      image: "/assets/images/structural-steel.jpg"
    },
    {
      name: "Paints",
      brand: "Asian Paints",
      image: "/assets/images/paint-cans.jpg"
    },
    {
      name: "Construction Hardware",
      brand: "Premium Quality",
      image: "/assets/images/construction-tools.jpg"
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Authentic products from trusted brands",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Professional consultation for your projects",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Wholesale & Retail",
      description: "Flexible supply for all order sizes",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Complete Range",
      description: "One-stop shop for construction needs",
    },
  ];

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/images/cement-bags.jpg')",
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-barlow font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight mb-6">
              BUILD STRONG.<br />
              BUILD WITH{" "}
              <span className="text-gradient">TRUST.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-concrete max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Since 2008, serving 100,000+ satisfied customers with premium
            construction materials from 20+ trusted brands. From foundations to
            finishing touches, quality you can count on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/products" className="btn-primary">
              Explore Products
            </Link>
            <a
              href="https://wa.me/919486579329"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Contact on WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-navy/20">
        <div className="container-custom">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              Our Products
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              Premium construction materials from India's most trusted brands
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-charcoal/80 backdrop-blur-sm border border-concrete/20 rounded-lg overflow-hidden card-hover stagger-item"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-barlow font-bold text-2xl text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-orange font-semibold mb-4">{product.brand}</p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-white hover:text-orange transition-colors duration-300"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="text-orange font-barlow font-bold text-sm tracking-widest mb-4">
                ABOUT US
              </div>
              <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6">
                Your Trusted Construction Materials Partner
              </h2>
              <p className="text-concrete text-lg leading-relaxed mb-6">
                Since 2008, Sri Ganapathy Traders has been serving over 100,000
                satisfied customers as a leading wholesale and retail supplier
                of construction materials in Nagercoil, with shipping available
                all over Kanniyakumari District.
              </p>
              <p className="text-concrete text-lg leading-relaxed mb-8">
                We provide premium quality materials from trusted brands
                including cement, TMT bars, roofing sheets, structural steel,
                paints, and construction hardware.
              </p>
              <Link href="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>

            <div className="animate-on-scroll">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative h-36 sm:h-48 rounded-lg overflow-hidden">
                  <img
                    src="/assets/images/cement-bags.jpg"
                    alt="Cement bags for construction"
                    className="w-full h-full object-cover parallax-image"
                  />
                </div>
                <div className="relative h-36 sm:h-48 rounded-lg overflow-hidden">
                  <img
                    src="/assets/images/tmt-steel-bars.jpg"
                    alt="TMT steel bars and reinforcement"
                    className="w-full h-full object-cover parallax-image"
                  />
                </div>
                <div className="relative h-36 sm:h-48 rounded-lg overflow-hidden col-span-2">
                  <img
                    src="/assets/images/roofing-sheets.jpg"
                    alt="Roofing sheets and materials"
                    className="w-full h-full object-cover parallax-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-navy/20">
        <div className="container-custom">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="font-barlow font-bold text-xl text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-concrete">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange to-orange/80">
        <div className="container-custom text-center">
          <div className="animate-on-scroll">
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us for product enquiries, quotations, and expert
              guidance on construction materials.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="bg-white text-orange font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919486579329"
                className="bg-charcoal text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
