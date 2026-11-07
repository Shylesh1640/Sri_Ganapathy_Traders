"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `*New Enquiry from Website*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Product Interest:* ${formData.product}
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/919486579329?text=${encodedMessage}`,
      "_blank"
    );

    // Reset form
    setFormData({
      name: "",
      phone: "",
      product: "",
      message: "",
    });
  };

  const products = [
    "Cement (Dalmia)",
    "TMT Bars (Tata Tiscon)",
    "Roofing Sheets (Visaka/Tata)",
    "Structural Steel (Tata Structura)",
    "Paints (Asian Paints)",
    "Construction Hardware",
    "Wholesale Enquiry",
    "General Enquiry",
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
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-concrete text-lg md:text-xl max-w-3xl mx-auto">
              Get in touch for product enquiries, quotations, or visit our
              showroom in Nagercoil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-barlow font-bold text-4xl text-white mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="bg-navy/30 backdrop-blur-sm border border-concrete/20 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-barlow font-bold text-lg text-white mb-2">
                        Call Us
                      </h3>
                      <a
                        href="tel:+919486579329"
                        className="text-concrete hover:text-orange transition-colors duration-300 block mb-1"
                      >
                        +91 94865 79329
                      </a>
                      <a
                        href="tel:+919488229329"
                        className="text-concrete hover:text-orange transition-colors duration-300 block"
                      >
                        +91 94882 29329
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-navy/30 backdrop-blur-sm border border-concrete/20 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-barlow font-bold text-lg text-white mb-2">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/919486579329"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-concrete hover:text-orange transition-colors duration-300"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-navy/30 backdrop-blur-sm border border-concrete/20 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-barlow font-bold text-lg text-white mb-2">
                        Email Us
                      </h3>
                      <a
                        href="mailto:sriganapathiselva@gmail.com"
                        className="text-concrete hover:text-orange transition-colors duration-300 break-all"
                      >
                        sriganapathiselva@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-navy/30 backdrop-blur-sm border border-concrete/20 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-barlow font-bold text-lg text-white mb-2">
                        Visit Us
                      </h3>
                      <p className="text-concrete mb-2">
                        Nagercoil, Kanniyakumari District
                        <br />
                        Tamil Nadu, India
                      </p>
                      <a
                        href="https://maps.app.goo.gl/65LzcvXVvUZ6Gze46"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-orange hover:bg-orange/90 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 text-sm mt-2"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-navy/30 backdrop-blur-sm border border-concrete/20 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-barlow font-bold text-lg text-white mb-2">
                        Business Hours
                      </h3>
                      <p className="text-concrete mb-1">
                        Monday - Saturday: 8:00 AM - 8:00 PM
                      </p>
                      <p className="text-concrete">
                        Sunday: Holiday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-navy/30 backdrop-blur-sm border border-concrete/20 rounded-lg p-8">
                <h2 className="font-barlow font-bold text-4xl text-white mb-6">
                  Send Enquiry
                </h2>
                <p className="text-concrete mb-8">
                  Fill out the form below and we'll get back to you on WhatsApp
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-semibold mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-charcoal border border-concrete/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white font-semibold mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-charcoal border border-concrete/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Product Selection */}
                  <div>
                    <label
                      htmlFor="product"
                      className="block text-white font-semibold mb-2"
                    >
                      Product Interest *
                    </label>
                    <select
                      id="product"
                      required
                      value={formData.product}
                      onChange={(e) =>
                        setFormData({ ...formData, product: e.target.value })
                      }
                      className="w-full bg-charcoal border border-concrete/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors duration-300"
                    >
                      <option value="">Select a product</option>
                      {products.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-semibold mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-charcoal border border-concrete/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange transition-colors duration-300 resize-none"
                      placeholder="Tell us about your requirements"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-orange hover:bg-orange/90 text-white font-semibold py-4 rounded-md transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send size={18} />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="section-padding bg-navy/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-orange to-orange/80 rounded-2xl p-12 text-center"
          >
            <h2 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6">
              We Deliver Across Kanniyakumari
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Shipping available all over Kanniyakumari District for your convenience.
              Quality construction materials delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://maps.app.goo.gl/65LzcvXVvUZ6Gze46"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-orange font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                <MapPin size={20} />
                <span>View Our Location on Maps</span>
              </a>
              <a
                href="https://wa.me/919486579329"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-charcoal text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
