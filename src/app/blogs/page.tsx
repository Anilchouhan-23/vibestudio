"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { getAllBlogs } from "@/data/blogs";

export default function BlogsPage() {
  const blogs = getAllBlogs();

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
              <BlogCard key={blog.slug} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
