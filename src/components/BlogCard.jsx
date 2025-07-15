import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Cover Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
          {blog.title}
        </h3>

        {/* Meta Info */}
        <p className="text-sm text-gray-500 mt-1 mb-2">
          {new Date(blog.date).toLocaleDateString()}
        </p>

        {/* Summary */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {blog.summary}
        </p>

        {/* Read More */}
        <Link
          to={`/blog/${blog.slug}`}
          className="inline-block text-indigo-600 font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
