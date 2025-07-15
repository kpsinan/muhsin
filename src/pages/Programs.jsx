// src/pages/Programs.jsx
import React from "react";
import ProgramCard from "../components/ProgramCard";


// Import image from src/assets
import effectiveImg from "../assets/effective.png";

export default function Programs() {
  const programs = [
    {
      title: "Effective Communication Masterclass",
      description:
        "Master the art of expressing your ideas clearly, confidently, and persuasively in any setting.",
      image: effectiveImg, // ← Use imported image
      duration: "6 weeks",
      mode: "Online",
      fee: "2999",
      link: "https://your-course-link.com",
    },
    // Add more programs here if needed
  ];

  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Training Programs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
