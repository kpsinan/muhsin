import React from "react";
import siteConfig from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {/* Brand */}
        <div>
          <h3 className="text-indigo-600 font-semibold text-lg">
            {siteConfig.siteName}
          </h3>
          <p className="text-sm">{siteConfig.tagline}</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-medium mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            {["/", "/about", "/programs", "/blog", "/contact"].map((p, i) => (
              <li key={i}>
                <a href={p} className="hover:text-indigo-600">
                  {p === "/" ? "Home" : p.slice(1).charAt(0).toUpperCase() + p.slice(2)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <p className="text-sm">📧 {siteConfig.contactEmail}</p>
          <p className="text-sm">📍 {siteConfig.location}</p>
          <div className="mt-2 flex space-x-4 text-sm">
            {Object.entries(siteConfig.socials).map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
      </div>
    </footer>
  );
}
