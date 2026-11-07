"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";

const products = [
  {
    name: "Cement",
    brand: "Dalmia Cement",
    description:
      "Premium quality cement for strong and durable construction. Ideal for foundations, columns, beams, and all structural applications.",
    image:
      "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=2940&auto=format&fit=crop",
    category: "Binding Material",
  },
  {
    name: "TMT Bars",
    brand: "Tata Tiscon",
    description:
      "High-strength thermo-mechanically treated reinforcement steel bars. Superior ductility, weldability, and seismic resistance for safe construction.",
    image:
      "https://images.unsplash.com/photo-1625527575307-616f0bb84ad2?q=80&w=2940&auto=format&fit=crop",
    category: "Reinforcement Steel",
  },
  {
    name: "Roofing Sheets",
    brand: "Visaka & Tata Sheets",
    description:
      "Durable and weather-resistant roofing solutions. Available in multiple profiles and colors for residential and industrial applications.",
    image:
      "https://images.unsplash.com/photo-1632778506495-44d045f0e428?q=80&w=2940&auto=format&fit=crop",
    category: "Roofing Solutions",
  },
  {
    name: "Structural Steel",
    brand: "Tata Structura",
    description:
      "Premium structural steel sections including beams, channels, angles, and plates. Engineered for strength and reliability in construction projects.",
    image:
      "https://images.unsplash.com/photo-1565118531796-763e5082d113?q=80&w=2940&auto=format&fit=crop",
    category: "Structural Materials",
  },
  {
    name: "Paints",
    brand: "Asian Paints",
    description:
      "Complete range of interior and exterior paints, primers, and finishes. Superior coverage, durability, and vibrant color options for all surfaces.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2940&auto=format&fit=crop",
    category: "Finishing Materials",
  },
  {
    name: "Construction Hardware",
    brand: "Premium Quality",
    description:
      "Essential construction hardware and accessories including fasteners, tools, safety equipment, and building materials for complete construction needs.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2940&auto=format&fit=crop",
    category: "Hardware & Accessories",
  },
];

export default function ProductsPage() {
  const handleWhatsAppClick = (productName: string) => {
    const message = `Hi, I'm interested in ${productName}. Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/919486579329?text=${encodedMessage}`,
      "_blank"
    );
  };

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
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-concrete text-lg md:text-xl max-w-3xl mx-auto">
              Explore our comprehensive range of premium construction materials
              from trusted brands. Quality products for every construction need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy/30 backdrop-blur-sm border border-concrete/20 rounded-lg overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-orange font-semibold mb-1">
                      {product.category}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-barlow font-bold text-2xl text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-orange font-semibold text-sm mb-3">
                    {product.brand}
                  </p>
                  <p className="text-concrete text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full bg-orange hover:bg-orange/90 text-white font-semibold py-3 rounded-md transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={18} />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="section-padding bg-navy/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2940&auto=format&fit=crop"
                alt="Quality cement bags"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590857935814-1e2fcf6dfbc6?q=80&w=2940&auto=format&fit=crop"
                alt="Steel reinforcement materials"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="bg-gradient-to-r from-orange to-orange/80 rounded-2xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6">
                Need Bulk Quantities?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                We offer competitive wholesale rates for contractors, builders,
                and large construction projects. Shipping available all over
                Kanniyakumari District.
              </p>
              <a
                href="/wholesale"
                className="inline-block bg-white text-orange font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                Explore Wholesale Options
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
