import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import BlogCard from "@/components/BlogCard";
import { getAllBlogs, getBlogBySlug } from "@/data/blogs";

type BlogDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found - TechVibeStudio",
    };
  }

  return {
    title: `${blog.title} - TechVibeStudio`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = getAllBlogs()
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-14 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          <span
            className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-5"
            style={{
              backgroundColor: `${blog.color}20`,
              color: blog.color,
            }}
          >
            {blog.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              {blog.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {blog.introduction}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Takeaways
            </h2>
            <ul className="space-y-3 mb-10">
              {blog.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-[#6C63FF] mt-2 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {blog.sections.map((section) => (
              <section key={section.heading} className="mb-8 last:mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-gray-600 leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed">{blog.conclusion}</p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Related Blogs</h2>
            <Link
              href="/blogs"
              className="text-[#6C63FF] text-sm font-semibold hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((item, index) => (
              <BlogCard
                key={item.slug}
                blog={item}
                index={index}
                variant="preview"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
