"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";

const products = [
  {
    name: "Cement",
    brand: "Dalmia Cement",
    description:
      "Premium Portland Pozzolana Cement (PPC) and Ordinary Portland Cement (OPC) for all construction needs. High compressive strength, low heat of hydration, and superior durability. Ideal for plastering, concrete work, foundations, columns, beams, and all RCC structures.",
    image:
      "/assets/images/cement-bags.jpg",
    category: "Binding Material",
  },
  {
    name: "TMT Steel Bars",
    brand: "Tata Tiscon",
    description:
      "Thermo-Mechanically Treated (TMT) reinforcement steel bars with superior earthquake resistance. Available in Fe 500, Fe 500D, and Fe 550 grades. Excellent ductility, bendability, and corrosion resistance. Perfect for residential, commercial, and infrastructure projects.",
    image:
      "/assets/images/tmt-steel-bars.jpg",
    category: "Reinforcement Steel",
  },
  {
    name: "Roofing Sheets",
    brand: "Visaka Industries & Tata BlueScope Steel",
    description:
      "Fiber cement and pre-painted steel roofing sheets with exceptional weather resistance. Available in corrugated, tile profile, and industrial profiles. Multiple colors and gauges. Suitable for homes, factories, warehouses, and agricultural structures.",
    image:
      "/assets/images/roofing-sheets.jpg",
    category: "Roofing Solutions",
  },
  {
    name: "Structural Steel",
    brand: "Tata Structura",
    description:
      "Complete range of structural steel products: I-beams (ISMB, ISJB, ISLB), channels (ISMC, ISJC), angles, columns, and plates. High tensile strength, dimensional accuracy, and superior finish. Essential for multi-storey buildings, industrial sheds, and bridges.",
    image:
      "/assets/images/structural-steel.jpg",
    category: "Structural Materials",
  },
  {
    name: "Paints & Coatings",
    brand: "Asian Paints",
    description:
      "Comprehensive range of interior emulsions, exterior weather-proof paints, wood finishes, primers, and putties. 1,600+ shades, low VOC eco-friendly options, superior coverage, and washability. Suitable for walls, ceilings, wood, and metal surfaces.",
    image:
      "/assets/images/paint-cans.jpg",
    category: "Finishing Materials",
  },
  {
    name: "Construction Hardware",
    brand: "Quality Hardware & Tools",
    description:
      "Essential construction hardware including nails, screws, bolts, hinges, door fittings, hand tools, power tools, safety equipment, measuring instruments, and building accessories. Everything needed for complete construction and finishing work.",
    image:
      "/assets/images/construction-tools.jpg",
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
                src="/assets/images/cement-bags.jpg"
                alt="Cement bags - Dalmia PPC and OPC"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-barlow font-bold text-2xl">
                Quality Cement
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="/assets/images/tmt-steel-bars.jpg"
                alt="TMT steel bars - reinforcement rods"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-barlow font-bold text-2xl">
                TMT Steel Bars
              </div>
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
