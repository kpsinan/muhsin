import React from "react";
import BlogCard from "../components/BlogCard";
import SectionTitle from "../components/SectionTitle";
import blogs from "../data/blogs";

export default function Blog() {
  return (
    <section className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Blog & Insights"
        subtitle="Read curated insights on skill-building, mindset, and career growth."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
