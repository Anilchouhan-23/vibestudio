"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiExternalLink } from "react-icons/fi";
import {
  FaUsers,
  FaFileInvoiceDollar,
  FaShareAlt,
  FaQrcode,
  FaChartBar,
  FaComments,
  FaCloudUploadAlt,
  FaHeadset,
  FaEnvelopeOpenText,
  FaFileSignature,
} from "react-icons/fa";

const products = [
  {
    id: "vibecrm",
    icon: FaUsers,
    name: "VibeCRM",
    tagline: "Customer Relationship Management",
    description:
      "Streamline your customer interactions, manage leads efficiently, and track sales pipelines with our powerful yet intuitive CRM solution designed for growing businesses.",
    gradient: "from-[#6C63FF] to-[#5A52D5]",
    features: [
      "Lead & Contact Management",
      "Sales Pipeline Visualization",
      "Analytics & Reporting Dashboard",
      "Email & Communication Tracking",
      "Task & Follow-up Reminders",
      "Custom Fields & Workflows",
    ],
  },
  {
    id: "vibeinvoice",
    icon: FaFileInvoiceDollar,
    name: "VibeInvoice",
    tagline: "GST Billing & Invoicing",
    description:
      "Create professional GST-compliant invoices, manage inventory, and keep your accounting seamless. Perfect for small to mid-size businesses looking for a hassle-free billing experience.",
    gradient: "from-[#00D9FF] to-[#0091AD]",
    features: [
      "GST Compliant Invoicing",
      "Inventory Management",
      "Automated Tax Calculations",
      "Payment Tracking & Reminders",
      "Multi-format Export (PDF, Excel)",
      "Recurring Invoice Support",
    ],
  },
  {
    id: "vibesocial",
    icon: FaShareAlt,
    name: "VibeSocial",
    tagline: "Social Media Companion",
    description:
      "Manage your social media presence from a single dashboard. Schedule posts, track engagement, and grow your audience across multiple platforms effortlessly.",
    gradient: "from-[#FF6B6B] to-[#EE5A24]",
    features: [
      "Multi-platform Post Scheduling",
      "Engagement Analytics",
      "Content Calendar",
      "Automated Posting",
      "Audience Insights",
      "Hashtag & Trend Analysis",
    ],
  },
  {
    id: "vibeqr",
    icon: FaQrcode,
    name: "VibeQR",
    tagline: "QR Code Generator",
    description:
      "Generate custom-branded QR codes for any purpose — URLs, payments, contacts, WiFi, and more. Full design customization with analytics tracking built right in.",
    gradient: "from-[#4ECB71] to-[#2EAF4D]",
    features: [
      "Custom Design & Branding",
      "Bulk QR Generation",
      "Dynamic QR Codes",
      "Scan Analytics & Tracking",
      "Multiple Content Types",
      "High-resolution Export",
    ],
  },
  {
    id: "vibeanalytics",
    icon: FaChartBar,
    name: "VibeAnalytics",
    tagline: "Business Intelligence Dashboard",
    description:
      "Transform raw data into actionable insights. VibeAnalytics provides real-time dashboards, custom reports, and KPI tracking to help you make smarter business decisions.",
    gradient: "from-[#FFB347] to-[#FF8C00]",
    features: [
      "Real-time Data Dashboards",
      "Custom Report Builder",
      "KPI & Goal Tracking",
      "Data Visualization Charts",
      "Automated Report Scheduling",
      "Multi-source Data Integration",
    ],
  },
  {
    id: "vibechat",
    icon: FaComments,
    name: "VibeChat",
    tagline: "Customer Support Chat Widget",
    description:
      "Embed a powerful live chat widget on your website to engage visitors in real-time. Includes automated responses, chat routing, and a full conversation history for your support team.",
    gradient: "from-[#E040FB] to-[#AB47BC]",
    features: [
      "Live Chat Widget",
      "Automated Bot Responses",
      "Multi-agent Chat Routing",
      "Conversation History & Search",
      "Canned Replies & Templates",
      "Visitor Activity Tracking",
    ],
  },
  {
    id: "vibebackup",
    icon: FaCloudUploadAlt,
    name: "VibeBackup",
    tagline: "Cloud Data Backup Solution",
    description:
      "Protect your business-critical data with automated cloud backups. Supports scheduled backups, encryption, and one-click restore so you never lose important files again.",
    gradient: "from-[#26C6DA] to-[#00897B]",
    features: [
      "Automated Scheduled Backups",
      "End-to-End Encryption",
      "One-click Data Restore",
      "Incremental Backup Support",
      "Multi-device Compatibility",
      "Backup Health Monitoring",
    ],
  },
  {
    id: "vibedesk",
    icon: FaHeadset,
    name: "VibeDesk",
    tagline: "IT Help Desk & Ticketing",
    description:
      "Streamline your internal IT support with a modern ticketing system. Track issues, assign priorities, manage SLAs, and keep your team productive with VibeDesk.",
    gradient: "from-[#5C6BC0] to-[#3949AB]",
    features: [
      "Ticket Management System",
      "SLA Tracking & Alerts",
      "Priority & Category Sorting",
      "Knowledge Base Integration",
      "Team Performance Reports",
      "Email-to-Ticket Conversion",
    ],
  },
  {
    id: "vibemail",
    icon: FaEnvelopeOpenText,
    name: "VibeMail",
    tagline: "Email Marketing Platform",
    description:
      "Design beautiful email campaigns, build subscriber lists, and track open rates and click-throughs. VibeMail makes email marketing simple and effective for businesses of all sizes.",
    gradient: "from-[#EF5350] to-[#C62828]",
    features: [
      "Drag & Drop Email Builder",
      "Subscriber List Management",
      "Campaign Analytics & Reports",
      "A/B Testing Support",
      "Automated Drip Campaigns",
      "Template Library",
    ],
  },
  {
    id: "vibesign",
    icon: FaFileSignature,
    name: "VibeSign",
    tagline: "Digital Signature & Documents",
    description:
      "Send, sign, and manage documents digitally with legally-binding e-signatures. Streamline your document workflows with audit trails, templates, and bulk signing capabilities.",
    gradient: "from-[#66BB6A] to-[#2E7D32]",
    features: [
      "Legally-binding E-signatures",
      "Document Templates",
      "Audit Trail & Compliance",
      "Bulk Document Signing",
      "Real-time Status Tracking",
      "Multi-party Signing Workflows",
    ],
  },
];

const partnerProducts = [
  {
    name: "GreytHR",
    description: "Cloud-based HR & Payroll management platform for businesses of all sizes.",
    category: "HR & Payroll",
  },
  {
    name: "Vyapar",
    description: "India's #1 GST billing and accounting app for small businesses.",
    category: "Billing & Accounting",
  },
  {
    name: "Quick Heal",
    description: "Enterprise-grade antivirus and endpoint security solutions for complete protection.",
    category: "Cyber Security",
  },
  {
    name: "Tally Prime",
    description: "Comprehensive business management software for accounting, GST, and inventory.",
    category: "Accounting & ERP",
  },
  {
    name: "Zoho",
    description: "All-in-one business suite with CRM, email, project management, and more.",
    category: "Business Suite",
  },
  {
    name: "Busy Accounting",
    description: "Integrated business accounting software with GST, TDS, and inventory management.",
    category: "Accounting",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1A1A2E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#6C63FF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#6C63FF] font-semibold text-sm uppercase tracking-wider">
              Our Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-6">
              Our Products
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Powerful software tools built to simplify your business operations
              and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center scroll-mt-24`}
            >
              {/* Visual Card */}
              <div className="flex-1 w-full">
                <div
                  className={`bg-gradient-to-br ${product.gradient} rounded-2xl p-12 text-white min-h-[350px] flex flex-col justify-center`}
                >
                  <product.icon className="w-16 h-16 mb-6 opacity-90" />
                  <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                  <p className="text-white/80">{product.tagline}</p>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <FiCheck className="w-4 h-4 text-[#6C63FF] shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#6C63FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5A52D5] transition-all"
                  >
                    Get Started <FiArrowRight />
                  </Link>
                  <a
                    href={`https://wa.me/919881849615?text=${encodeURIComponent(`Hi TechVibeStudio! I'm interested in ${product.name}. Can I get a demo?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-[#6C63FF] hover:text-[#6C63FF] transition-all"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Products */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#6C63FF] font-semibold text-sm uppercase tracking-wider">
              Partner Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Partner Products
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              We are authorized resellers and implementation partners for these industry-leading solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnerProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <span className="text-xs font-semibold text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {product.description}
                </p>
                <a
                  href={`https://wa.me/919881849615?text=${encodeURIComponent(`Hi TechVibeStudio! I'm interested in ${product.name}. Can you share more details?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#6C63FF] text-sm font-semibold hover:underline"
                >
                  Enquire Now <FiExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A1A2E] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#6C63FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We build custom software solutions tailored to your exact business requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#6C63FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5A52D5] transition-all"
          >
            Request Custom Solution <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
