"use client";

import { motion } from "framer-motion";
import {
  Truck,
  DollarSign,
  Headphones,
  Clock,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function WholesalePage() {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Bulk Pricing",
      description:
        "Get the best rates for large quantity orders. Special pricing for contractors and builders.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Priority Service",
      description:
        "Fast quotations and dedicated support for wholesale customers and large projects.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "100% authentic products with manufacturer warranties and quality certification.",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Expert Consultation",
      description:
        "Professional guidance on material selection and quantity estimation for your project.",
    },
  ];

  const handleWhatsAppClick = (category: string) => {
    const message = `Hi, I'm interested in wholesale enquiry for ${category}. Please provide quotation and details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/919486579329?text=${encodedMessage}`,
      "_blank"
    );
  };

  const categories = [
    {
      name: "Cement (Dalmia)",
      image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&auto=format&fit=crop",
      description: "Bulk cement supply for large construction projects",
    },
    {
      name: "TMT Bars (Tata Tiscon)",
      image: "https://images.unsplash.com/photo-1625527575307-616f0bb84ad2?q=80&w=400&auto=format&fit=crop",
      description: "Wholesale TMT reinforcement steel in all standard sizes",
    },
    {
      name: "Roofing Sheets (Visaka & Tata)",
      image: "https://images.unsplash.com/photo-1632778506495-44d045f0e428?q=80&w=400&auto=format&fit=crop",
      description: "Bulk roofing solutions for residential and industrial projects",
    },
    {
      name: "Structural Steel (Tata Structura)",
      image: "https://images.unsplash.com/photo-1565118531796-763e5082d113?q=80&w=400&auto=format&fit=crop",
      description: "Complete structural steel requirements for your projects",
    },
    {
      name: "Paints (Asian Paints)",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=400&auto=format&fit=crop",
      description: "Wholesale supply of paints and finishes for large projects",
    },
    {
      name: "Construction Hardware",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=400&auto=format&fit=crop",
      description: "Bulk supply of essential construction hardware and accessories",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy via-navyDark to-charcoal">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-barlow font-black text-6xl md:text-7xl text-white mb-6">
              Wholesale <span className="text-gradient">Supply</span>
            </h1>
            <p className="text-concrete text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Since 2008, serving 100,000+ customers with competitive bulk rates.
              Quality materials from trusted brands at wholesale prices for
              contractors, builders, and large projects. Shipping available all over
              Kanniyakumari District.
            </p>
            <a
              href="https://wa.me/919486579329?text=Hi%2C%20I%27m%20interested%20in%20wholesale%20enquiry.%20Please%20provide%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              <span>Get Wholesale Quote on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              Wholesale Benefits
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              Why contractors and builders choose us for bulk material supply
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy/30 backdrop-blur-sm border border-concrete/20 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="font-barlow font-bold text-xl text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-concrete leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-navy/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              Wholesale Categories
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              Get competitive quotes for bulk material requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal/80 backdrop-blur-sm border border-concrete/20 rounded-lg overflow-hidden hover:border-orange/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-barlow font-bold text-2xl text-white mb-3">
                    {category.name}
                  </h3>
                  <p className="text-concrete mb-6">{category.description}</p>
                  <button
                    onClick={() => handleWhatsAppClick(category.name)}
                    className="w-full bg-orange hover:bg-orange/90 text-white font-semibold py-3 rounded-md transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={18} />
                    <span>Get Quote</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=2940&auto=format&fit=crop"
                alt="Bulk construction materials supply"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-barlow font-bold text-xl">
                Bulk Supply
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop"
                alt="Construction warehouse"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-barlow font-bold text-xl">
                Wholesale Rates
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop"
                alt="Construction project delivery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-barlow font-bold text-xl">
                Project Support
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Building Contractors",
              "Construction Companies",
              "Civil Engineers",
              "Builders & Developers",
              "Construction Firms",
              "Masons & Workers",
              "Project Managers",
              "Infrastructure Projects",
            ].map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-navy/30 backdrop-blur-sm border border-concrete/20 rounded-lg p-6 text-center"
              >
                <CheckCircle className="w-8 h-8 text-orange mx-auto mb-3" />
                <div className="text-white font-semibold">{client}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange to-orange/80">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Order in Bulk?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for competitive wholesale quotations and expert guidance
              on material requirements for your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919486579329"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-orange font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:+919486579329"
                className="inline-flex items-center space-x-2 bg-charcoal text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                <span>Call: +91 94865 79329</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
