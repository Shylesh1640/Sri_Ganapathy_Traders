"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Shield } from "lucide-react";
import Link from "next/link";

const brands = [
  {
    name: "Dalmia Cement",
    category: "Cement",
    description:
      "One of India's leading cement manufacturers, known for premium quality and sustainability. Dalmia Cement offers superior strength and durability for all construction applications.",
    features: [
      "High compressive strength",
      "Low heat of hydration",
      "Eco-friendly manufacturing",
      "Consistent quality",
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Tata Tiscon",
    category: "TMT Bars",
    description:
      "India's most trusted TMT bar brand from the Tata Steel family. Engineered for superior strength, ductility, and seismic resistance in modern construction projects.",
    features: [
      "Superior seismic resistance",
      "High ductility and bendability",
      "Corrosion resistant",
      "Excellent weldability",
    ],
    image:
      "https://images.unsplash.com/photo-1590857935814-1e2fcf6dfbc6?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Visaka Sheets",
    category: "Roofing Solutions",
    description:
      "Premium roofing sheets with exceptional weather resistance and durability. Visaka offers a wide range of profiles and colors for residential and industrial applications.",
    features: [
      "Weather resistant",
      "UV protection",
      "Long-lasting durability",
      "Multiple color options",
    ],
    image:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Tata Sheets",
    category: "Roofing Solutions",
    description:
      "High-quality roofing sheets from Tata Steel, engineered for strength and longevity. Superior finish and corrosion resistance for reliable roofing solutions.",
    features: [
      "Corrosion resistant coating",
      "High tensile strength",
      "Premium finish",
      "Easy installation",
    ],
    image:
      "https://images.unsplash.com/photo-1628624747186-a5cf8d879f04?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Tata Structura",
    category: "Structural Steel",
    description:
      "Premium structural steel products from Tata Steel. Engineered steel sections for robust and reliable construction with consistent quality and performance.",
    features: [
      "High structural integrity",
      "Consistent quality",
      "Multiple section types",
      "Superior finish",
    ],
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Asian Paints",
    category: "Paints & Finishes",
    description:
      "Asia's largest paint company, offering a complete range of decorative and protective coatings. Superior coverage, durability, and vibrant colors for all surfaces.",
    features: [
      "Wide color range",
      "Superior coverage",
      "Long-lasting finish",
      "Eco-friendly options",
    ],
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2940&auto=format&fit=crop",
  },
];

export default function BrandsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy to-charcoal">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-barlow font-black text-6xl md:text-7xl text-white mb-6">
              20+ Trusted <span className="text-gradient">Brands</span>
            </h1>
            <p className="text-concrete text-lg md:text-xl max-w-3xl mx-auto">
              Since 2008, we've partnered with India's most reliable manufacturers
              to bring you authentic, premium-quality construction materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Branded Products */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Guaranteed Quality",
                description: "Authentic products with manufacturer warranties",
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Proven Performance",
                description: "Tested and trusted by professionals nationwide",
              },
              {
                icon: <CheckCircle className="w-10 h-10" />,
                title: "Technical Support",
                description: "Expert guidance and product specifications",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="font-barlow font-bold text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-concrete">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="section-padding bg-navy/30">
        <div className="container-custom">
          <div className="space-y-12">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="text-orange font-barlow font-bold text-sm tracking-widest mb-2">
                    {brand.category}
                  </div>
                  <h2 className="font-barlow font-bold text-4xl text-white mb-4">
                    {brand.name}
                  </h2>
                  <p className="text-concrete text-lg leading-relaxed mb-6">
                    {brand.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {brand.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-orange flex-shrink-0" />
                        <span className="text-concrete">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/products" className="btn-primary inline-block">
                    View Products
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Brands Grid */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-4">
              More Premium Brands
            </h2>
            <p className="text-concrete text-lg">
              Complete range from trusted manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Birla Cement",
              "JSW Steel",
              "Kamdhenu TMT",
              "Everest Industries",
              "Berger Paints",
              "Nerolac Paints",
              "Hettich Hardware",
              "Saint-Gobain",
              "Shree Cement",
              "Hindware",
              "Kajaria Tiles",
              "Somany Ceramics",
              "Greenply",
              "Century Plyboards",
            ].map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-navy/30 backdrop-blur-sm border border-concrete/20 rounded-lg p-6 text-center hover:border-orange/30 hover:bg-navy/40 transition-all duration-300 min-h-[120px] flex items-center justify-center"
              >
                <div className="font-barlow font-bold text-white text-lg">
                  {brand}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy/30">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-orange to-orange/80 rounded-2xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6">
                Get Expert Product Guidance
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Our team can help you choose the right products for your specific
                construction requirements.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-orange font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
