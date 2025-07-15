import React from "react";
export default function ProgramCard({ program }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Thumbnail */}
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {program.title}
        </h3>

        <p className="text-sm text-gray-500 mb-2">{program.duration} • {program.mode}</p>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {program.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-indigo-600 font-semibold text-sm">
            ₹{program.fee}
          </span>
          <a
            href={program.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 font-medium hover:underline"
          >
            Enroll →
          </a>
        </div>
      </div>
    </div>
  );
}
