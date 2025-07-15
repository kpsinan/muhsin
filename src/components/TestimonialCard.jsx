import React from "react";
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition">
      <img
        src={testimonial.photo}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-indigo-500"
      />
      <p className="text-gray-600 text-sm italic">"{testimonial.quote}"</p>
      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
      <p className="text-xs text-gray-500">{testimonial.title}</p>
    </div>
  );
}
