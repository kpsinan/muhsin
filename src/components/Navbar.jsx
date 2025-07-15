import React from "react";
import { Link } from "react-router-dom";
import siteConfig from "../data/siteConfig";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-indigo-600">
            {siteConfig.siteName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
