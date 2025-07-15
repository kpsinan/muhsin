import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <div className="text-center py-20 text-gray-500">Blog not found.</div>;

  return (
    <section className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(blog.date).toLocaleDateString()} •{" "}
        {blog.tags.map((tag) => (
          <span key={tag} className="inline-block text-indigo-600 mr-2">#{tag}</span>
        ))}
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <div className="text-gray-700 space-y-5 text-base leading-relaxed">
        <p>
          {/* Placeholder content */}
          This is where your full blog content goes. You can use Markdown or CMS integration later.
        </p>
        <p>
          For now, this demo displays the structure and layout. To make it dynamic, load content from a CMS or Markdown file.
        </p>
      </div>
    </section>
  );
}
