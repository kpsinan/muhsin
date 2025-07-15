import React from "react";
import profileImage from "../assets/profile.png";

export default function About() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={profileImage}
          alt="Trainer"
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500"
        />

        <div>
          <p className="text-gray-700 mb-4">
            Hello! I'm <strong>Muhsin CA</strong>, a professional trainer with over 7 years of experience in delivering impactful programs in productivity, communication, and personal development.
          </p>
          <p className="text-gray-700 mb-4">
            I’ve trained over 1,500 professionals across India and have a passion for simplifying complex skills into easy-to-learn systems. Whether you’re just starting out or scaling your career, my goal is to help you become your best self.
          </p>
          <p className="text-gray-700">
            Let’s grow together — one skill at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
