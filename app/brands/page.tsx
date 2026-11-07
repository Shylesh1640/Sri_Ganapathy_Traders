"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Shield } from "lucide-react";
import Link from "next/link";

const brands = [
  {
    name: "Dalmia Cement",
    category: "Cement",
    description:
      "Dalmia Cement is one of India's leading cement manufacturers with a legacy of quality and sustainability. Known for producing premium Portland Pozzolana Cement (PPC) and Ordinary Portland Cement (OPC) with superior strength characteristics. Trusted by builders and contractors for residential, commercial, and infrastructure projects across India.",
    features: [
      "High compressive strength - exceeds IS standards",
      "Low heat of hydration - prevents cracks",
      "Superior durability and longevity",
      "Eco-friendly and sustainable production",
    ],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Tata Tiscon",
    category: "TMT Steel Bars",
    description:
      "Tata Tiscon is India's most trusted brand of Thermo-Mechanically Treated (TMT) reinforcement steel bars from Tata Steel. Manufactured using advanced technology, Tiscon bars offer exceptional strength, ductility, and earthquake resistance. Ideal for all RCC structures including residential buildings, commercial complexes, bridges, and infrastructure projects.",
    features: [
      "Superior earthquake resistance",
      "High elongation and bendability",
      "Excellent corrosion resistance",
      "Enhanced weldability without strength loss",
    ],
    image:
      "https://images.unsplash.com/photo-1590857935814-1e2fcf6dfbc6?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Visaka Industries",
    category: "Roofing Solutions",
    description:
      "Visaka Industries Limited is a pioneer in fiber cement roofing sheets in India. Their roofing products offer exceptional weather resistance, durability, and fire safety. Available in various profiles including corrugated, tile profile, and industrial sheets. Suitable for residential homes, factories, warehouses, and agricultural structures across diverse climatic conditions.",
    features: [
      "Weather and UV resistant",
      "Fire retardant properties - Class 1",
      "Long service life - 25+ years",
      "Wide range of colors and profiles",
    ],
    image:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Tata BlueScope Steel",
    category: "Roofing & Cladding",
    description:
      "Tata BlueScope Steel is a joint venture between Tata Steel and BlueScope Steel (Australia), producing premium pre-painted steel roofing and wall cladding solutions. Their COLORBOND® and ZINCALUME® steel products offer superior corrosion resistance and aesthetic appeal. Widely used in industrial buildings, commercial structures, and modern residential roofing applications.",
    features: [
      "Advanced corrosion protection",
      "High tensile strength and durability",
      "Premium factory-applied finish",
      "Wide color palette and profiles",
    ],
    image:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Tata Structura",
    category: "Structural Steel",
    description:
      "Tata Structura represents Tata Steel's comprehensive range of structural steel products including I-beams, channels, angles, columns, and plates. Manufactured to international quality standards, these products offer consistent mechanical properties and dimensional accuracy. Essential for constructing multi-storey buildings, industrial sheds, bridges, and heavy engineering structures.",
    features: [
      "High structural integrity and load-bearing capacity",
      "Consistent quality as per IS 2062 standards",
      "Complete range of sections and sizes",
      "Superior surface finish and straightness",
    ],
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2940&auto=format&fit=crop",
  },
  {
    name: "Asian Paints",
    category: "Paints & Coatings",
    description:
      "Asian Paints is Asia's largest and India's most trusted paint company with a presence across 15 countries. Offering a comprehensive range of interior and exterior paints, wood finishes, protective coatings, and ancillary products. Known for innovative color solutions, superior coverage, durability, and eco-friendly formulations. Trusted by millions of homeowners and professional painters.",
    features: [
      "Widest range of 1,600+ shades",
      "Superior coverage and washability",
      "Low VOC and eco-friendly options",
      "Weather-resistant exterior finishes",
    ],
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2940&auto=format&fit=crop",
  },
];

export default function BrandsPage() {
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
              Trusted <span className="text-gradient">Brands</span>
            </h1>
            <p className="text-concrete text-lg md:text-xl max-w-3xl mx-auto">
              Since 2008, we've partnered with India's most reliable manufacturers
              to bring you authentic, premium-quality construction materials.
              Shipping available all over Kanniyakumari District.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Logos Grid */}
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
              Our Brand Partners
            </h2>
            <p className="text-concrete text-lg">
              Authentic products from trusted manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
            {[
              { name: "Dalmia Cement", logo: "/assets/brands/Dalmia.jpg" },
              { name: "Tata Tiscon", logo: "/assets/brands/Tata_Tiscon.jpg" },
              { name: "Visaka Industries", logo: "/assets/brands/visaka.png" },
              { name: "Tata BlueScope Steel", logo: "/assets/brands/Tata_Shaktee.jpg" },
              { name: "Tata Structura", logo: "/assets/brands/Tata_Structura.jpg" },
              { name: "Asian Paints", logo: "/assets/brands/Asian_paints.jpg" },
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-4 sm:p-6 flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-auto max-h-20 object-contain"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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

      {/* CTA Section */}
      <section className="section-padding bg-charcoal">
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
