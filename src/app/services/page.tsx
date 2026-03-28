"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiMonitor,
  FiGlobe,
  FiSmartphone,
  FiShield,
  FiCode,
  FiDatabase,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

const services = [
  {
    icon: FiDatabase,
    title: "After Sales (Service & Maintenance)",
    description:
      "We have 6+ years of experience in developing after-sales service and maintenance frameworks for electronic, electrical, and energy products. Our solutions specialize in applications for servicing inverters, batteries, and more.",
    features: [
      "Service ticket management",
      "Warranty tracking",
      "Spare parts inventory",
      "Technician dispatching",
      "Real-time service reports",
    ],
    color: "#E040FB",
  },
  {
    icon: FiMonitor,
    title: "Cooperative & Business Solutions",
    description:
      "Expertise in financial applications for the cooperative sector. Our software solutions streamline banking operations, agent activities, and financial record-keeping for cooperative societies.",
    features: [
      "Agent management",
      "Financial record-keeping",
      "Savings & deposits tracking",
      "Compliance reporting",
      "Multi-branch support",
    ],
    color: "#6C63FF",
  },
  {
    icon: FiCode,
    title: "Desktop Development",
    description:
      "Custom desktop software development that improves user experience and delivers tailored business solutions. We build performant, reliable applications that work seamlessly on your infrastructure.",
    features: [
      "Cross-platform compatibility",
      "Offline-first architecture",
      "Database integration",
      "Custom UI/UX design",
      "Auto-update mechanism",
    ],
    color: "#00D9FF",
  },
  {
    icon: FiSmartphone,
    title: "Website Designing",
    description:
      "Professional web design services that boost your business and strengthen your online presence. We create visually stunning, responsive websites with a hassle-free experience from concept to launch.",
    features: [
      "Responsive design",
      "SEO optimization",
      "Brand-consistent visuals",
      "Fast load times",
      "CMS integration",
    ],
    color: "#FF6B6B",
  },
  {
    icon: FiGlobe,
    title: "Web Application Development",
    description:
      "Custom-built web applications and ongoing maintenance services designed specifically for your business processes. Scalable, secure, and built with the latest technologies.",
    features: [
      "Progressive Web Apps",
      "API development",
      "Cloud deployment",
      "Real-time features",
      "Third-party integrations",
    ],
    color: "#FFB347",
  },
  {
    icon: FiShield,
    title: "Cyber Security Solutions",
    description:
      "Comprehensive cyber security solutions for businesses and homes. We provide antivirus solutions, security audits, and protection strategies to keep your digital assets safe.",
    features: [
      "Antivirus deployment",
      "Security audits",
      "Threat monitoring",
      "Data encryption",
      "Employee training",
    ],
    color: "#4ECB71",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1A1A2E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#6C63FF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#6C63FF] font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-6">
              Our Services
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              End-to-end digital solutions crafted with expertise and passion to
              help your business thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Visual */}
                <div className="flex-1 w-full">
                  <div
                    className="relative rounded-2xl p-12 flex items-center justify-center min-h-[300px]"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                    }}
                  >
                    <service.icon
                      className="w-24 h-24"
                      style={{ color: service.color, opacity: 0.6 }}
                    />
                    <div
                      className="absolute top-6 right-6 w-16 h-16 rounded-full blur-2xl"
                      style={{ backgroundColor: `${service.color}30` }}
                    />
                    <div
                      className="absolute bottom-6 left-6 w-24 h-24 rounded-full blur-3xl"
                      style={{ backgroundColor: `${service.color}20` }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <FiCheck
                          className="w-5 h-5 shrink-0"
                          style={{ color: service.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    Get Started <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Tell us about your project and we&apos;ll craft the perfect solution
            for your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#6C63FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5A52D5] transition-all"
          >
            Contact Us <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
