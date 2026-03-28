"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#1A1A2E] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#6C63FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="gradient-text">Business?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how TechVibeStudio can help you build the perfect
            digital solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2 bg-[#6C63FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5A52D5] transition-all duration-300 hover:shadow-xl hover:shadow-[#6C63FF]/25"
            >
              Start a Project
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/919881849615"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <FiMessageCircle />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
