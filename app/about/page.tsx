"use client";

import { motion } from "framer-motion";
import { Building2, Users, Award, TrendingUp, Heart, Target } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality First",
      description:
        "We supply only authentic products from trusted manufacturers, ensuring reliability and performance.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We provide personalized service and expert guidance for every project.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Competitive Pricing",
      description:
        "Fair and transparent pricing for both retail and wholesale customers without compromising on quality.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continuous Growth",
      description:
        "We constantly expand our product range to meet evolving construction industry needs.",
    },
  ];

  const stats = [
    { number: "12+", label: "Premium Brands" },
    { number: "100K+", label: "Happy Customers" },
    { number: "2008", label: "Established Since" },
    { number: "100%", label: "Authentic Products" },
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
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-concrete text-lg md:text-xl max-w-3xl mx-auto">
              Your trusted partner for premium construction materials in
              Nagercoil and Kanniyakumari District.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-orange font-barlow font-bold text-sm tracking-widest mb-4">
                OUR STORY
              </div>
              <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6">
                Building Trust Through Quality
              </h2>
              <div className="space-y-4 text-concrete text-lg leading-relaxed">
                <p>
                  Since 2008, Sri Ganapathy Traders has been a leading wholesale
                  and retail supplier of construction materials in Nagercoil,
                  serving over 100,000 satisfied customers including contractors,
                  builders, civil engineers, and individual customers across
                  Kanniyakumari District, Tamil Nadu.
                </p>
                <p>
                  We specialize in supplying premium construction materials from
                  trusted brands, including Dalmia Cement, Tata Tiscon TMT Steel
                  Bars, Visaka Industries and Tata BlueScope Roofing Sheets, Tata
                  Structura Structural Steel, Asian Paints, and a comprehensive
                  range of construction hardware and tools.
                </p>
                <p>
                  Our commitment to quality, competitive pricing, and customer
                  satisfaction has made us a preferred choice for construction
                  projects of all scales. We offer convenient shipping services
                  all over Kanniyakumari District.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=2940&auto=format&fit=crop"
                    alt="Dalmia cement bags"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1625527575307-616f0bb84ad2?q=80&w=2940&auto=format&fit=crop"
                    alt="TMT steel reinforcement bars"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1628624747186-a5cf8d879f04?q=80&w=2940&auto=format&fit=crop"
                    alt="Roofing sheets"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="font-barlow font-black text-5xl md:text-6xl text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-concrete font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              The principles that guide our business and service to customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal/80 backdrop-blur-sm border border-concrete/20 rounded-lg p-6"
              >
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="font-barlow font-bold text-xl text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-concrete leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-52 rounded-lg overflow-hidden col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1565118531796-763e5082d113?q=80&w=2940&auto=format&fit=crop"
                    alt="Structural steel beams"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2940&auto=format&fit=crop"
                    alt="Asian Paints paint cans"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-44 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2940&auto=format&fit=crop"
                    alt="Construction hardware and tools"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-orange font-barlow font-bold text-sm tracking-widest mb-4">
                WHAT WE OFFER
              </div>
              <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6">
                Complete Construction Solutions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <Building2 className="w-6 h-6" />,
                    title: "Retail Supply",
                    description:
                      "Individual customers and small projects can purchase materials in required quantities.",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Wholesale Supply",
                    description:
                      "Competitive bulk rates for contractors, builders, and large construction projects.",
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Expert Consultation",
                    description:
                      "Professional guidance on product selection and material requirements for your project.",
                  },
                ].map((service) => (
                  <div
                    key={service.title}
                    className="flex space-x-4 items-start"
                  >
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-barlow font-bold text-lg text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-concrete">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Let's Build Together
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us for product enquiries, quotations, or to visit
              our showroom in Nagercoil.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-orange font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="bg-charcoal text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
