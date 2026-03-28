"use client";

import { motion } from "framer-motion";

import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

const blogs = [
  {
    id: 1,
    title: "How Custom Software Can Boost Your Small Business",
    excerpt:
      "Discover why off-the-shelf solutions may be holding your business back and how tailored software unlocks untapped growth potential.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Business",
    color: "#6C63FF",
  },
  {
    id: 2,
    title: "Top 5 Web Development Trends to Watch in 2026",
    excerpt:
      "From AI-driven interfaces to edge computing, explore the trends shaping the future of web development and how to leverage them.",
    date: "March 10, 2026",
    readTime: "7 min read",
    category: "Technology",
    color: "#00D9FF",
  },
  {
    id: 3,
    title: "Why Cyber Security Should Be Your Top Priority",
    excerpt:
      "With rising digital threats, learn essential steps to protect your business data, customer trust, and online reputation.",
    date: "March 5, 2026",
    readTime: "6 min read",
    category: "Security",
    color: "#FF6B6B",
  },
  {
    id: 4,
    title: "The Ultimate Guide to GST Billing Software",
    excerpt:
      "Navigate the complexities of GST compliance with the right billing software. A comprehensive guide for Indian businesses.",
    date: "February 28, 2026",
    readTime: "8 min read",
    category: "Finance",
    color: "#4ECB71",
  },
  {
    id: 5,
    title: "Building a Strong Online Presence for Local Businesses",
    excerpt:
      "Practical strategies for local businesses to establish a compelling digital footprint and attract more customers online.",
    date: "February 20, 2026",
    readTime: "5 min read",
    category: "Marketing",
    color: "#FFB347",
  },
  {
    id: 6,
    title: "Desktop vs Web Apps: Which is Right for Your Business?",
    excerpt:
      "Weighing the pros and cons of desktop and web applications to help you make the best technology choice for your needs.",
    date: "February 15, 2026",
    readTime: "6 min read",
    category: "Technology",
    color: "#E040FB",
  },
  {
    id: 7,
    title: "How CRM Software Transforms Customer Relationships",
    excerpt:
      "Learn how modern CRM tools can revolutionize the way you interact with customers and drive repeat business.",
    date: "February 10, 2026",
    readTime: "5 min read",
    category: "Business",
    color: "#6C63FF",
  },
  {
    id: 8,
    title: "Protecting Your Business from Ransomware Attacks",
    excerpt:
      "A practical guide to understanding ransomware threats and implementing effective prevention strategies for businesses.",
    date: "February 5, 2026",
    readTime: "7 min read",
    category: "Security",
    color: "#FF6B6B",
  },
];

export default function BlogsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1A1A2E] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#6C63FF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#6C63FF] font-semibold text-sm uppercase tracking-wider">
              Insights & Updates
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-6">
              Our Blog
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Stay updated with the latest tech trends, tips, and insights from
              our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className="h-48 flex items-center justify-center relative"
                  style={{
                    background: `linear-gradient(135deg, ${blog.color}20, ${blog.color}05)`,
                  }}
                >
                  <span
                    className="text-7xl font-bold opacity-10"
                    style={{ color: blog.color }}
                  >
                    0{blog.id}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${blog.color}15`,
                        color: blog.color,
                      }}
                    >
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6C63FF] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" />
                        {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        {blog.readTime}
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/919881849615?text=${encodeURIComponent(`Hi TechVibeStudio! I'd like to read more about "${blog.title}". Can you share the full article?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6C63FF] hover:underline text-sm font-semibold flex items-center gap-1"
                    >
                      Read <FiArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
