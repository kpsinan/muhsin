import React from "react";
import SectionTitle from "../components/SectionTitle";
import ProgramCard from "../components/ProgramCard";
import BlogCard from "../components/BlogCard";
import TestimonialCard from "../components/TestimonialCard";
import effectiveImg from "../assets/effective.png"; // ✅ Import the image

import programs from "../data/programs";
import blogs from "../data/blogs";
import testimonials from "../data/testimonials";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Empowering You Through Learning</h1>
          <p className="text-lg text-indigo-100 mb-6">
            Join our practical training programs and explore articles crafted for growth-driven professionals.
          </p>
          <a
            href="/programs"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition"
          >
            Explore Programs
          </a>
        </div>
      </section>

      {/* Programs */}
      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="Popular Programs" subtitle="Join hundreds of learners upgrading their skills." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.slice(0, 3).map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="From the Blog" subtitle="Latest insights, ideas and how-tos." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <SectionTitle title="Testimonials" subtitle="What our learners are saying." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </section>
    </div>
  );
}
