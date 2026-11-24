"use client";

import {
  Truck,
  DollarSign,
  Headphones,
  Clock,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import {
  Tilt3D,
  Reveal3D,
  FloatingGeometry,
  Parallax3DImage,
} from "@/components/ThreeD";

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
      image: "/assets/images/cement-bags.jpg",
      description: "Bulk PPC and OPC cement supply - bags or tonnage. Competitive rates for construction projects, contractors, and builders.",
    },
    {
      name: "TMT Steel Bars (Tata Tiscon)",
      image: "/assets/images/tmt-steel-bars.jpg",
      description: "Wholesale TMT bars in all diameters (8mm-32mm) and grades (Fe 500, Fe 500D, Fe 550). Tonnage discounts available.",
    },
    {
      name: "Roofing Sheets (Visaka & Tata BlueScope)",
      image: "/assets/images/roofing-sheets.jpg",
      description: "Bulk fiber cement and pre-painted steel roofing sheets. Multiple profiles and colors for large-scale projects.",
    },
    {
      name: "Structural Steel (Tata Structura)",
      image: "/assets/images/structural-steel.jpg",
      description: "Wholesale structural steel sections - beams, channels, angles, columns. Tonnage supply for industrial and infrastructure projects.",
    },
    {
      name: "Paints (Asian Paints)",
      image: "/assets/images/paint-cans.jpg",
      description: "Bulk paint supply for contractors and large projects. Interior, exterior, primers, putties - all products at wholesale rates.",
    },
    {
      name: "Construction Hardware & Tools",
      image: "/assets/images/construction-tools.jpg",
      description: "Bulk hardware supplies - nails, screws, tools, safety equipment. One-stop solution for all construction accessories.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy via-navyDark to-charcoal relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10 text-center">
          <Reveal3D direction="up">
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
          </Reveal3D>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10">
          <Reveal3D className="text-center mb-16">
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              Wholesale Benefits
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              Why contractors and builders choose us for bulk material supply
            </p>
          </Reveal3D>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" style={{ perspective: "1100px" }}>
            {benefits.map((benefit, index) => (
              <Reveal3D key={benefit.title} delay={index * 0.08} direction="up">
                <Tilt3D
                  maxTilt={10}
                  className="h-full rounded-lg border border-concrete/20 bg-navy/30 p-6 text-center backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white" style={{ transform: "translateZ(30px)" }}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-barlow font-bold text-xl text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-concrete leading-relaxed">
                    {benefit.description}
                  </p>
                </Tilt3D>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-navy/30 relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10">
          <Reveal3D className="text-center mb-16">
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              Wholesale Categories
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              Get competitive quotes for bulk material requirements
            </p>
          </Reveal3D>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" style={{ perspective: "1200px" }}>
            {categories.map((category, index) => (
              <Reveal3D key={category.name} delay={index * 0.08} direction="up">
                <Tilt3D
                  hoverScale={1.03}
                  className="group h-full overflow-hidden rounded-lg border border-concrete/20 bg-charcoal/80 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:border-orange/50"
                >
                  <div className="relative h-48 overflow-hidden" style={{ transform: "translateZ(18px)" }}>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6" style={{ transform: "translateZ(32px)" }}>
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
                </Tilt3D>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" style={{ perspective: "1200px" }}>
            {[
              { src: "/assets/images/cement-bags.jpg", alt: "Bulk cement bags supply", label: "Bulk Supply" },
              { src: "/assets/images/tmt-steel-bars.jpg", alt: "Wholesale TMT steel bars", label: "Wholesale Rates" },
              { src: "/assets/images/roofing-sheets.jpg", alt: "Roofing sheets for projects", label: "Project Support" },
            ].map((item, index) => (
              <Reveal3D key={item.label} delay={index * 0.08} direction="up">
                <Tilt3D maxTilt={9} className="group h-64 overflow-hidden rounded-lg">
                  <Parallax3DImage
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full"
                    imageClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div
                    className="absolute bottom-4 left-4 text-white font-barlow font-bold text-xl"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    {item.label}
                  </div>
                </Tilt3D>
              </Reveal3D>
            ))}
          </div>

          <Reveal3D className="text-center mb-12">
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              We Serve
            </h2>
          </Reveal3D>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6" style={{ perspective: "1000px" }}>
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
              <Reveal3D key={client} delay={index * 0.04} direction="up">
                <Tilt3D maxTilt={8} className="h-full rounded-lg border border-concrete/20 bg-navy/30 p-6 text-center backdrop-blur-sm">
                  <CheckCircle className="w-8 h-8 text-orange mx-auto mb-3" />
                  <div className="text-white font-semibold">{client}</div>
                </Tilt3D>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange to-orange/80 relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10 text-center">
          <Reveal3D direction="up">
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
          </Reveal3D>
        </div>
      </section>
    </div>
  );
}
