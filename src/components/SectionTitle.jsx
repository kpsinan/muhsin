import React from "react";
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}
