"use client";

import { Building2, Users, Award, TrendingUp, Heart, Target } from "lucide-react";
import Link from "next/link";
import {
  Tilt3D,
  Reveal3D,
  FloatingGeometry,
  Parallax3DImage,
} from "@/components/ThreeD";

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
      <section className="section-padding bg-gradient-to-br from-navy via-navyDark to-charcoal relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10 text-center">
          <Reveal3D direction="up">
            <h1 className="font-barlow font-black text-6xl md:text-7xl text-white mb-6">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-concrete text-lg md:text-xl max-w-3xl mx-auto">
              Your trusted partner for premium construction materials in
              Nagercoil and Kanniyakumari District.
            </p>
          </Reveal3D>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20">
            <Reveal3D direction="left">
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
            </Reveal3D>

            <Reveal3D direction="right" className="relative" delay={0.1}>
              <div className="grid grid-cols-2 gap-4" style={{ perspective: "1200px" }}>
                <Tilt3D maxTilt={10} className="group h-48 overflow-hidden rounded-lg">
                  <Parallax3DImage
                    src="/assets/images/cement-bags.jpg"
                    alt="Dalmia cement bags"
                    className="h-full w-full"
                    imageClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                </Tilt3D>
                <Tilt3D maxTilt={10} className="group h-48 overflow-hidden rounded-lg">
                  <Parallax3DImage
                    src="/assets/images/tmt-steel-bars.jpg"
                    alt="TMT steel reinforcement bars"
                    className="h-full w-full"
                    imageClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                </Tilt3D>
                <Tilt3D maxTilt={8} className="group col-span-2 h-48 overflow-hidden rounded-lg">
                  <Parallax3DImage
                    src="/assets/images/roofing-sheets.jpg"
                    alt="Roofing sheets"
                    className="h-full w-full"
                    imageClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                </Tilt3D>
              </div>
            </Reveal3D>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12" style={{ perspective: "1000px" }}>
            {stats.map((stat, index) => (
              <Reveal3D key={stat.label} delay={index * 0.1} direction="up">
                <Tilt3D maxTilt={8} className="rounded-xl border border-concrete/10 bg-charcoal/60 p-6 text-center backdrop-blur-sm">
                  <div className="font-barlow font-black text-5xl md:text-6xl text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-concrete font-semibold">{stat.label}</div>
                </Tilt3D>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy/30 relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10">
          <Reveal3D className="text-center mb-16">
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              Our Values
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              The principles that guide our business and service to customers
            </p>
          </Reveal3D>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" style={{ perspective: "1100px" }}>
            {values.map((value, index) => (
              <Reveal3D key={value.title} delay={index * 0.08} direction="up">
                <Tilt3D
                  maxTilt={10}
                  className="h-full rounded-lg border border-concrete/20 bg-charcoal/80 p-6 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mb-4 text-white" style={{ transform: "translateZ(30px)" }}>
                    {value.icon}
                  </div>
                  <h3 className="font-barlow font-bold text-xl text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-concrete leading-relaxed">
                    {value.description}
                  </p>
                </Tilt3D>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <Reveal3D direction="left">
              <div className="grid grid-cols-2 gap-4" style={{ perspective: "1200px" }}>
                <Tilt3D maxTilt={8} className="group col-span-2 h-52 overflow-hidden rounded-lg">
                  <Parallax3DImage
                    src="/assets/images/structural-steel.jpg"
                    alt="Structural steel beams"
                    className="h-full w-full"
                    imageClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                </Tilt3D>
                <Tilt3D maxTilt={10} className="group h-44 overflow-hidden rounded-lg">
                  <Parallax3DImage
                    src="/assets/images/paint-cans.jpg"
                    alt="Asian Paints paint cans"
                    className="h-full w-full"
                    imageClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                </Tilt3D>
                <Tilt3D maxTilt={10} className="group h-44 overflow-hidden rounded-lg">
                  <Parallax3DImage
                    src="/assets/images/construction-tools.jpg"
                    alt="Construction hardware and tools"
                    className="h-full w-full"
                    imageClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                </Tilt3D>
              </div>
            </Reveal3D>

            <Reveal3D direction="right" delay={0.1}>
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
            </Reveal3D>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange to-orange/80 relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10 text-center">
          <Reveal3D direction="up">
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
          </Reveal3D>
        </div>
      </section>
    </div>
  );
}
