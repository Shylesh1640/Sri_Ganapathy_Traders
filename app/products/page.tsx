"use client";

import { MessageCircle } from "lucide-react";
import {
  Tilt3D,
  Reveal3D,
  FloatingGeometry,
  Parallax3DImage,
} from "@/components/ThreeD";

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
      <section className="section-padding bg-gradient-to-br from-navy via-navyDark to-charcoal relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10 text-center">
          <Reveal3D direction="up">
            <h1 className="font-barlow font-black text-6xl md:text-7xl text-white mb-6">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-concrete text-lg md:text-xl max-w-3xl mx-auto">
              Explore our comprehensive range of premium construction materials
              from trusted brands. Quality products for every construction need.
            </p>
          </Reveal3D>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"
        />
        <div className="container-custom relative z-10" style={{ perspective: "1200px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <Reveal3D key={product.name} delay={index * 0.08} direction="up">
                <Tilt3D
                  hoverScale={1.03}
                  className="group h-full overflow-hidden rounded-lg border border-concrete/20 bg-navy/30 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-shadow duration-500 hover:shadow-[0_10px_40px_rgba(244,119,33,0.22)]"
                >
                  <div className="relative h-64 overflow-hidden" style={{ transform: "translateZ(20px)" }}>
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

                  <div className="p-6" style={{ transform: "translateZ(35px)" }}>
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
                </Tilt3D>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="section-padding bg-navy/30 relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10" style={{ perspective: "1200px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Reveal3D direction="left">
              <Tilt3D className="group h-80 overflow-hidden rounded-lg">
                <Parallax3DImage
                  src="/assets/images/cement-bags.jpg"
                  alt="Cement bags - Dalmia PPC and OPC"
                  className="h-full w-full"
                  imageClassName="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-barlow font-bold text-2xl" style={{ transform: "translateZ(30px)" }}>
                  Quality Cement
                </div>
              </Tilt3D>
            </Reveal3D>
            <Reveal3D direction="right" delay={0.1}>
              <Tilt3D className="group h-80 overflow-hidden rounded-lg">
                <Parallax3DImage
                  src="/assets/images/tmt-steel-bars.jpg"
                  alt="TMT steel bars - reinforcement rods"
                  className="h-full w-full"
                  imageClassName="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-barlow font-bold text-2xl" style={{ transform: "translateZ(30px)" }}>
                  TMT Steel Bars
                </div>
              </Tilt3D>
            </Reveal3D>
          </div>

          <Reveal3D direction="up">
          <div className="bg-gradient-to-r from-orange to-orange/80 rounded-2xl p-12 text-center">
            <div>
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
            </div>
          </div>
          </Reveal3D>
        </div>
      </section>
    </div>
  );
}
