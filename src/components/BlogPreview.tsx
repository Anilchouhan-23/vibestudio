"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

const blogs = [
  {
    id: 1,
    title: "How Custom Software Can Boost Your Small Business",
    excerpt:
      "Discover why off-the-shelf solutions may be holding your business back and how tailored software unlocks growth.",
    date: "March 15, 2026",
    category: "Business",
    color: "#6C63FF",
  },
  {
    id: 2,
    title: "Top 5 Web Development Trends to Watch in 2026",
    excerpt:
      "From AI-driven interfaces to edge computing, explore the trends shaping the future of web development.",
    date: "March 10, 2026",
    category: "Technology",
    color: "#00D9FF",
  },
  {
    id: 3,
    title: "Why Cyber Security Should Be Your #1 Priority",
    excerpt:
      "With rising digital threats, learn essential steps to protect your business data and customer trust.",
    date: "March 5, 2026",
    category: "Security",
    color: "#FF6B6B",
  },
];

export default function BlogPreview() {
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
            Our Blog
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Stay updated with the latest tech trends, tips, and insights from
            our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div
                className="h-48 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${blog.color}20, ${blog.color}05)`,
                }}
              >
                <span
                  className="text-6xl font-bold opacity-10"
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
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <FiCalendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6C63FF] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#6C63FF]"
                >
                  Read More <FiArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 border-2 border-[#6C63FF] text-[#6C63FF] px-8 py-4 rounded-full font-semibold hover:bg-[#6C63FF] hover:text-white transition-all duration-300"
          >
            View All Posts <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
