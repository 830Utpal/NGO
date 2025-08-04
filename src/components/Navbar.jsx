import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Our Works", to: "/work" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-edu text-white px-6 py-4 shadow-lg z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <span className="font-extrabold text-2xl tracking-wide select-none drop-shadow-sm">
          EduHealthEnv NGO
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          {links.map((link, index) => (
            <Link
              key={link.name}
              to={link.to}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`relative text-lg font-medium transition-colors duration-300 ease-in-out hover:text-yellow-400 ${
                hoverIndex === index ? "text-yellow-400" : "text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 rounded transition-all duration-300 ease-in-out ${
                  hoverIndex === index ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 flex flex-col space-y-4 bg-edu pb-6 rounded-lg">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-yellow-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
