"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiTarget, FiEye, FiHeart } from "react-icons/fi";

const values = [
  {
    icon: FiTarget,
    title: "Our Mission",
    description:
      "To empower businesses of all sizes with innovative, reliable, and affordable digital solutions that drive real growth and efficiency.",
    color: "#6C63FF",
  },
  {
    icon: FiEye,
    title: "Our Vision",
    description:
      "To be the most trusted technology partner for businesses seeking digital transformation, known for quality, integrity, and results.",
    color: "#00D9FF",
  },
  {
    icon: FiHeart,
    title: "Our Values",
    description:
      "We believe in transparency, customer-first thinking, continuous innovation, and building long-lasting partnerships with every client.",
    color: "#FF6B6B",
  },
];

const milestones = [
  { year: "2019", event: "TechVibeStudio founded with a vision to empower businesses" },
  { year: "2020", event: "Launched our first desktop software product" },
  { year: "2021", event: "Expanded to web development and design services" },
  { year: "2022", event: "Crossed 20+ satisfied clients milestone" },
  { year: "2023", event: "Introduced VibeCRM and VibeInvoice products" },
  { year: "2024", event: "Partnered with GreytHR and Vyapar ecosystem" },
  { year: "2025", event: "Launched cyber security solutions division" },
  { year: "2026", event: "Continuing to innovate and expand our services" },
];

export default function AboutPage() {
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
              Who We Are
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-6">
              About TechVibeStudio
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A passionate team of developers and designers committed to
              building digital solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Your{" "}
                <span className="gradient-text">Digital Journey</span> Since
                2019
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                TechVibeStudio is a software solutions company dedicated to
                helping businesses navigate the digital landscape. With over 6
                years of experience, we specialize in developing custom desktop
                applications, web solutions, and comprehensive digital services.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                From after-sales service frameworks for electronic products to
                financial applications for the cooperative sector, our portfolio
                reflects our versatility and commitment to delivering solutions
                that truly matter to our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "6+", label: "Years of Experience" },
                  { value: "50+", label: "Projects Completed" },
                  { value: "30+", label: "Happy Clients" },
                  { value: "5+", label: "Products Launched" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-[#6C63FF]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#6C63FF]/10 to-[#00D9FF]/10 rounded-2xl p-12 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl animated-gradient flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-3xl">TV</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    TechVibeStudio
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Innovation. Quality. Results.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Journey
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 mb-8"
              >
                <div className="shrink-0 w-16 h-16 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center">
                  <span className="text-[#6C63FF] font-bold text-sm">
                    {milestone.year}
                  </span>
                </div>
                <div className="pt-3">
                  <p className="text-gray-700">{milestone.event}</p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Let&apos;s discuss your project and build something amazing
            together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#6C63FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5A52D5] transition-all"
          >
            Get in Touch <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
