"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  FaUsers,
  FaFileInvoiceDollar,
  FaShareAlt,
  FaQrcode,
  FaChartBar,
  FaComments,
} from "react-icons/fa";

const products = [
  {
    id: "vibecrm",
    icon: FaUsers,
    name: "VibeCRM",
    tagline: "Customer Relationship Management",
    description:
      "Streamline your customer interactions, track leads, and grow your business with our intuitive CRM solution.",
    gradient: "from-[#6C63FF] to-[#5A52D5]",
    features: ["Lead Tracking", "Sales Pipeline", "Analytics Dashboard"],
  },
  {
    id: "vibeinvoice",
    icon: FaFileInvoiceDollar,
    name: "VibeInvoice",
    tagline: "GST Billing & Invoicing",
    description:
      "Create professional GST invoices, manage inventory, and keep your accounting seamless and compliant.",
    gradient: "from-[#00D9FF] to-[#0091AD]",
    features: ["GST Compliant", "Inventory Mgmt", "Auto Reports"],
  },
  {
    id: "vibesocial",
    icon: FaShareAlt,
    name: "VibeSocial",
    tagline: "Social Media Companion",
    description:
      "Manage your social media presence, schedule posts, and engage with your audience from one powerful dashboard.",
    gradient: "from-[#FF6B6B] to-[#EE5A24]",
    features: ["Post Scheduler", "Analytics", "Multi-Platform"],
  },
  {
    id: "vibeqr",
    icon: FaQrcode,
    name: "VibeQR",
    tagline: "QR Code Generator",
    description:
      "Generate custom QR codes for your business - URLs, payments, contacts, and more with full branding control.",
    gradient: "from-[#4ECB71] to-[#2EAF4D]",
    features: ["Custom Design", "Bulk Generate", "Analytics"],
  },
  {
    id: "vibeanalytics",
    icon: FaChartBar,
    name: "VibeAnalytics",
    tagline: "Business Intelligence Dashboard",
    description:
      "Transform raw data into actionable insights with real-time dashboards, custom reports, and KPI tracking.",
    gradient: "from-[#FFB347] to-[#FF8C00]",
    features: ["Real-time Data", "Custom Reports", "KPI Tracking"],
  },
  {
    id: "vibechat",
    icon: FaComments,
    name: "VibeChat",
    tagline: "Customer Support Chat Widget",
    description:
      "Embed a live chat widget on your website to engage visitors in real-time with automated bot responses.",
    gradient: "from-[#E040FB] to-[#AB47BC]",
    features: ["Live Chat", "Bot Responses", "Chat Routing"],
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#6C63FF] font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Powerful software tools designed to simplify and supercharge your
            daily business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div
                className={`bg-gradient-to-r ${product.gradient} p-8 text-white`}
              >
                <product.icon className="w-10 h-10 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-white/80 text-sm mt-1">{product.tagline}</p>
              </div>
              <div className="p-8">
                <p className="text-gray-500 mb-6">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/products#${product.id}`}
                  className="inline-flex items-center gap-2 text-[#6C63FF] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#6C63FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5A52D5] transition-all duration-300"
          >
            View All 10 Products <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
