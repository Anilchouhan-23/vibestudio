"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";
import { BlogPost } from "@/data/blogs";

type BlogCardProps = {
  blog: BlogPost;
  index?: number;
  variant?: "preview" | "full";
};

export default function BlogCard({
  blog,
  index = 0,
  variant = "full",
}: BlogCardProps) {
  const isPreview = variant === "preview";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
    >
      <div className="h-48 relative overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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

          {isPreview && (
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <FiCalendar className="w-3 h-3" />
              {blog.date}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6C63FF] transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p
          className={`text-gray-500 text-sm leading-relaxed mb-4 ${
            isPreview ? "" : "line-clamp-3"
          }`}
        >
          {blog.excerpt}
        </p>

        <div
          className={`${
            isPreview ? "" : "flex items-center justify-between"
          }`}
        >
          {!isPreview && (
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
          )}

          <Link
            href={`/blogs/${blog.slug}`}
            className="inline-flex items-center gap-1 text-[#6C63FF] hover:underline text-sm font-semibold"
          >
            Read More <FiArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
