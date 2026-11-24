"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Tilt3D as TiltCard,
  Reveal3D,
  FloatingGeometry,
  CubeShowcase,
  OrbitLogos,
  Parallax3DImage,
} from "@/components/ThreeD";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Hammer,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  Phone,
  MessageCircle,
  Star,
  Award,
  Package,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let start = 0;
        const duration = 2000;
        const step = 16;
        const increment = target / (duration / step);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, step);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// Floating particles
function HeroParticles() {
  const particles = useRef<{ x: number; y: number; size: number; duration: number; delay: number }[]>([]);
  if (particles.current.length === 0) {
    for (let i = 0; i < 25; i++) {
      particles.current.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 8,
      });
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {particles.current.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background:
              i % 3 === 0
                ? "rgba(244,119,33,0.6)"
                : i % 3 === 1
                ? "rgba(255,255,255,0.4)"
                : "rgba(0,100,160,0.5)",
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, (i % 2 === 0 ? 1 : -1) * 30, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const heroImages = [
    "/assets/images/home/img1.jpg",
    "/assets/images/home/img2.jpg",
    "/assets/images/home/img3.jpg",
    "/assets/images/home/img4.jpg",
    "/assets/images/home/img5.jpg",
  ];

  const heroImagesLength = heroImages.length;

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === heroImagesLength - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImagesLength]);

  // Mouse parallax on hero
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.height / 2) / rect.height;
      setMousePos({ x, y });
    };
    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // GSAP scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger cards
      gsap.utils.toArray(".stagger-item").forEach((el: any, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.12,
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Scroll fade-in
      gsap.utils.toArray(".animate-on-scroll").forEach((el: any) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });

      // Parallax images
      gsap.utils.toArray(".parallax-image").forEach((el: any) => {
        gsap.to(el, {
          y: -60,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // Stats reveal
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, scale: 0.5, rotation: -5 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Horizontal text marquee
      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      name: "Cement",
      brand: "Dalmia",
      image: "/assets/images/cement-bags.jpg",
      desc: "OPC & PPC grades for all construction needs",
    },
    {
      name: "TMT Bars",
      brand: "Tata Tiscon",
      image: "/assets/images/tmt-steel-bars.jpg",
      desc: "High-strength reinforcement steel bars",
    },
    {
      name: "Roofing Sheets",
      brand: "Visaka & Tata",
      image: "/assets/images/roofing-sheets.jpg",
      desc: "Durable AC & GI roofing solutions",
    },
    {
      name: "Structural Steel",
      brand: "Tata Structura",
      image: "/assets/images/structural-steel.jpg",
      desc: "Angles, channels & hollow sections",
    },
    {
      name: "Paints",
      brand: "Asian Paints",
      image: "/assets/images/paint-cans.jpg",
      desc: "Interior, exterior & waterproof coatings",
    },
    {
      name: "Hardware",
      brand: "Premium Quality",
      image: "/assets/images/construction-tools.jpg",
      desc: "Fasteners, tools & accessories",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Every product is sourced directly from manufacturers with full certification and quality checks.",
      color: "from-blue-500 to-navy",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Our trained team helps you choose the right material for every project requirement.",
      color: "from-orange to-amber-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Wholesale & Retail",
      description: "Flexible pricing and supply options for contractors, builders, and homeowners alike.",
      color: "from-green-600 to-emerald-400",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Complete Range",
      description: "Everything from foundation to finish — cement, steel, paint, and hardware under one roof.",
      color: "from-purple-600 to-violet-400",
    },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: 100000, suffix: "+", label: "Happy Customers" },
    { icon: <Award className="w-8 h-8" />, value: 15, suffix: "+ Yrs", label: "Trusted Since 2008" },
    { icon: <Package className="w-8 h-8" />, value: 20, suffix: "+", label: "Premium Brands" },
    { icon: <Truck className="w-8 h-8" />, value: 5000, suffix: "+", label: "Orders Delivered" },
  ];

  const marqueeItems = [
    "DALMIA CEMENT", "TATA TISCON", "VISAKA", "ASIAN PAINTS",
    "TATA STRUCTURA", "JSPL", "ULTRATECH", "BERGER PAINTS",
    "DALMIA CEMENT", "TATA TISCON", "VISAKA", "ASIAN PAINTS",
    "TATA STRUCTURA", "JSPL", "ULTRATECH", "BERGER PAINTS",
  ];

  return (
    <div ref={heroRef}>
      {/* ─── HERO ─── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* BG carousel layers with mouse parallax */}
        <div className="absolute inset-0" style={{ perspective: "800px" }}>
          {heroImages.map((image, index) => (
            <motion.div
              key={image}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${image}')`,
                transformStyle: "preserve-3d",
              }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                x: mousePos.x * -20,
                y: mousePos.y * -12,
                scale: 1.08,
              }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                x: { duration: 0.6, ease: "easeOut" },
                y: { duration: 0.6, ease: "easeOut" },
                scale: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" },
              }}
            />
          ))}

          {/* Deep shadow overlay */}
          <div className="absolute inset-0 hero-gradient z-[1]" />

          {/* Noise/grain texture */}
          <div className="absolute inset-0 z-[1] noise-overlay" />

          {/* Inner vignette */}
          <div className="absolute inset-0 z-[1] vignette-overlay" />
        </div>

        {/* Floating 3D geometry */}
        <FloatingGeometry />

        {/* Particles */}
        <HeroParticles />

        {/* Floating depth grid lines */}
        <div className="absolute inset-0 z-[2] grid-overlay pointer-events-none" />

        {/* Content — moves opposite to mouse for 3D depth */}
        <motion.div
          ref={heroContentRef}
          className="relative z-10 container-custom px-4 md:px-8 text-center"
          animate={{
            x: mousePos.x * 15,
            y: mousePos.y * 10,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-orange font-barlow font-bold text-sm md:text-base tracking-[0.3em] mb-4 uppercase">
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1.5, delay: 0.4 }}
              >
                Sri Ganapathy Traders · Est. 2008
              </motion.span>
            </div>

            <h1 className="font-barlow font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight mb-6">
              {["BUILD", " STRONG.", <br key="br" />, "BUILD WITH", " "].map((word, i) =>
                typeof word === "string" ? (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ) : (
                  word
                )
              )}
              <motion.span
                className="text-gradient relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0, type: "spring", bounce: 0.3 }}
              >
                TRUST.
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-orange rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-concrete max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Since 2008, serving{" "}
            <span className="text-white font-semibold">100,000+ satisfied customers</span> with
            premium construction materials from{" "}
            <span className="text-orange font-semibold">20+ trusted brands</span>. From
            foundations to finishing touches.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/products" className="btn-primary magnetic-btn relative overflow-hidden">
              <span className="relative z-10">Explore Products</span>
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <a
              href="https://wa.me/919486579329"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-2 magnetic-btn"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Carousel controls */}
        <button
          onClick={() =>
            setCurrentImageIndex((p) => (p === 0 ? heroImagesLength - 1 : p - 1))
          }
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange/60 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() =>
            setCurrentImageIndex((p) => (p === heroImagesLength - 1 ? 0 : p + 1))
          }
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange/60 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentImageIndex
                  ? "bg-orange w-8 shadow-[0_0_10px_rgba(244,119,33,0.8)]"
                  : "bg-white/40 w-2 hover:bg-white/70"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-concrete/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-orange rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ─── MARQUEE BRAND STRIP ─── */}
      <div className="bg-orange/10 border-y border-orange/20 py-4 overflow-hidden">
        <div className="marquee-inner flex whitespace-nowrap" style={{ width: "200%" }}>
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="inline-block px-8 text-orange/80 font-barlow font-bold text-sm tracking-widest uppercase"
            >
              {item}
              <span className="mx-6 text-concrete/30">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── STATS ─── */}
      <section className="stats-section section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,61,91,0.4)_0%,transparent_70%)]" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-item text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto mb-4">
                  {/* Spinning ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-orange/30 border-t-orange"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="w-14 h-14 bg-orange/10 rounded-full flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="font-barlow font-black text-4xl md:text-5xl text-white mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-concrete text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS GRID ─── */}
      <section className="section-padding bg-navy/20 relative overflow-hidden">
        {/* Background depth grid */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="container-custom relative z-10">
          <div className="animate-on-scroll text-center mb-16">
            <span className="text-orange font-barlow font-bold text-sm tracking-widest uppercase mb-3 block">
              What We Offer
            </span>
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              Our Products
            </h2>
            <p className="text-concrete text-lg max-w-2xl mx-auto">
              Premium construction materials from India's most trusted brands
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            style={{ perspective: "1200px" }}
          >
            {products.map((product, index) => (
              <TiltCard
                key={product.name}
                className="group relative stagger-item"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-charcoal/80 backdrop-blur-sm border border-concrete/20 rounded-lg overflow-hidden h-full
                             shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_40px_rgba(244,119,33,0.25)] transition-shadow duration-500"
                  style={{ transform: "translateZ(0px)" }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                    {/* Overlay badge */}
                    <div className="absolute top-3 right-3 bg-orange/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.brand}
                    </div>
                  </div>
                  <div className="p-6" style={{ transform: "translateZ(20px)" }}>
                    <h3 className="font-barlow font-bold text-2xl text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-concrete text-sm mb-5">{product.desc}</p>
                    <Link
                      href="/products"
                      className="inline-flex items-center text-orange hover:text-white group/link transition-colors duration-300"
                    >
                      <span className="relative">
                        View Details
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange group-hover/link:w-full transition-all duration-300" />
                      </span>
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3D PRODUCT SHOWCASE ─── */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal3D direction="left" className="order-2 lg:order-1">
              <CubeShowcase
                images={[
                  "/assets/images/cement-bags.jpg",
                  "/assets/images/tmt-steel-bars.jpg",
                  "/assets/images/roofing-sheets.jpg",
                  "/assets/images/structural-steel.jpg",
                  "/assets/images/paint-cans.jpg",
                  "/assets/images/construction-tools.jpg",
                ]}
              />
            </Reveal3D>

            <Reveal3D direction="right" className="order-1 lg:order-2">
              <span className="text-orange font-barlow font-bold text-sm tracking-widest uppercase mb-3 block">
                Interactive Showcase
              </span>
              <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6">
                Every Material You Need,
                <span className="block text-gradient">Under One Roof</span>
              </h2>
              <p className="text-concrete text-lg leading-relaxed mb-8">
                Explore our rotating showcase of premium construction materials.
                Hover over the cube to pause it and take a closer look at the
                range we stock for every stage of your project.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Cement & Concrete", "TMT Reinforcement", "Roofing Solutions", "Structural Steel", "Paints & Coatings", "Tools & Hardware"].map((item) => (
                  <div key={item} className="flex items-center space-x-2 text-concrete">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/products" className="btn-primary inline-flex items-center space-x-2">
                <span>Explore Full Range</span>
                <ArrowRight size={18} />
              </Link>
            </Reveal3D>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        {/* Decorative 3D shape */}
        <motion.div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange/5 border border-orange/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-navy/20 border border-navy/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="text-orange font-barlow font-bold text-sm tracking-widest mb-4 uppercase">
                About Us
              </div>
              <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6">
                Your Trusted Construction
                <span className="block text-gradient">Materials Partner</span>
              </h2>
              <p className="text-concrete text-lg leading-relaxed mb-6">
                Since 2008, Sri Ganapathy Traders has been serving over{" "}
                <strong className="text-white">100,000 satisfied customers</strong> as a
                leading wholesale and retail supplier of construction materials in Nagercoil,
                with shipping available all over Kanniyakumari District.
              </p>
              <p className="text-concrete text-lg leading-relaxed mb-8">
                We provide premium quality materials from trusted brands including cement, TMT
                bars, roofing sheets, structural steel, paints, and construction hardware.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["ISO Certified", "Authorised Dealers", "15+ Yrs Experience"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-orange/10 border border-orange/30 text-orange text-sm font-semibold rounded-full"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
              <Link href="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>

            <div className="animate-on-scroll" style={{ perspective: "800px" }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/assets/images/cement-bags.jpg", alt: "Cement bags", span: "" },
                  { src: "/assets/images/tmt-steel-bars.jpg", alt: "TMT bars", span: "" },
                  { src: "/assets/images/roofing-sheets.jpg", alt: "Roofing sheets", span: "col-span-2" },
                ].map((img) => (
                  <TiltCard
                    key={img.src}
                    maxTilt={8}
                    hoverScale={1.03}
                    className={`h-44 overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
                  >
                    <Parallax3DImage
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full"
                      imageClassName="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* 3D edge glow */}
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-orange/40 transition-all duration-300" />
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="section-padding bg-navy/20 relative overflow-hidden">
        <FloatingGeometry />
        <div className="container-custom relative z-10">
          <div className="animate-on-scroll text-center mb-16">
            <span className="text-orange font-barlow font-bold text-sm tracking-widest uppercase mb-3 block">
              Our Strengths
            </span>
            <h2 className="font-barlow font-bold text-5xl md:text-6xl text-white mb-4">
              Why Choose Us
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            style={{ perspective: "1000px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card group relative stagger-item"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8, z: 30 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="bg-charcoal/80 backdrop-blur-sm border border-concrete/20 rounded-xl p-7 h-full text-center
                             hover:border-orange/40 transition-all duration-500
                             shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(244,119,33,0.2)]"
                >
                  {/* Icon with 3D ring */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto mb-5">
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-orange/20 border-dashed"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="w-14 h-14 bg-orange/10 rounded-full flex items-center justify-center text-orange
                                 group-hover:bg-orange group-hover:text-white transition-all duration-400"
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>

                  <h3 className="font-barlow font-bold text-xl text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-concrete text-sm leading-relaxed">{feature.description}</p>

                  {/* Bottom accent */}
                  <motion.div
                    className="mt-5 h-0.5 bg-gradient-to-r from-transparent via-orange to-transparent mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL STRIP ─── */}
      <section className="section-padding bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,119,33,0.08)_0%,transparent_60%)]" />
        <div className="container-custom relative z-10 text-center">
          <div className="animate-on-scroll max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-orange text-orange" />
              ))}
            </div>
            <blockquote className="font-barlow text-2xl md:text-3xl text-white font-bold italic mb-6 leading-relaxed">
              "Best place for all construction material needs. Quality products, fair pricing,
              and always on time. Highly recommended!"
            </blockquote>
            <div className="text-orange font-semibold">— Rajesh Kumar, Nagercoil Contractor</div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange via-orange/90 to-amber-600" />
        {/* Animated 3D geometric shapes */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 border border-white/10"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5 border border-white/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <div className="container-custom relative z-10 text-center">
          <div className="animate-on-scroll">
            <motion.h2
              className="font-barlow font-bold text-4xl md:text-6xl text-white mb-6"
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your Project?
            </motion.h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Get in touch for product enquiries, quotations, and expert guidance on
              construction materials.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-orange font-barlow font-bold text-lg px-10 py-4 rounded-md
                           transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919486579329"
                className="bg-charcoal text-white font-barlow font-bold text-lg px-10 py-4 rounded-md
                           transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2
                           hover:shadow-2xl hover:shadow-black/20"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
