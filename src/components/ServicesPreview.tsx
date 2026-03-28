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
} from "react-icons/fi";

const services = [
  {
    icon: FiMonitor,
    title: "Desktop Development",
    description:
      "Custom desktop software that streamlines your business operations with intuitive interfaces and robust performance.",
    color: "#6C63FF",
  },
  {
    icon: FiGlobe,
    title: "Web Solutions",
    description:
      "Scalable and secure web applications built with modern technologies to drive your digital transformation.",
    color: "#00D9FF",
  },
  {
    icon: FiSmartphone,
    title: "Website Designing",
    description:
      "Beautiful, responsive websites that captivate visitors and boost your brand presence across all devices.",
    color: "#FF6B6B",
  },
  {
    icon: FiCode,
    title: "Web App Development",
    description:
      "Custom-built web applications tailored to your specific business processes with ongoing maintenance support.",
    color: "#FFB347",
  },
  {
    icon: FiShield,
    title: "Cyber Security Solutions",
    description:
      "Enterprise-grade security solutions to protect your business from digital threats and vulnerabilities.",
    color: "#4ECB71",
  },
  {
    icon: FiDatabase,
    title: "After Sales & Maintenance",
    description:
      "Comprehensive service and maintenance framework for electronic, electrical, and energy products.",
    color: "#E040FB",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#6C63FF] font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From concept to deployment, we provide end-to-end digital solutions
            that help your business thrive in the modern landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                style={{
                  backgroundColor: `${service.color}15`,
                  color: service.color,
                }}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-semibold transition-colors"
                style={{ color: service.color }}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              {/* Hover gradient border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `linear-gradient(135deg, ${service.color}10, ${service.color}05)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
