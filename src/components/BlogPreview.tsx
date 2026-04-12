"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import BlogCard from "@/components/BlogCard";
import { getFeaturedBlogs } from "@/data/blogs";

export default function BlogPreview() {
  const blogs = getFeaturedBlogs(3);

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
            <BlogCard
              key={blog.slug}
              blog={blog}
              index={index}
              variant="preview"
            />
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
