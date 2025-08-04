import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const links = [
    { name: "Home", to: "/" },
    { name: "Our Works", to: "/work" },
    { name: "About", to: "/about" },  
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-edu text-white px-8 py-4 flex justify-between items-center shadow-lg z-50">
      <span className="font-extrabold text-2xl tracking-wide select-none drop-shadow-sm">
        EduHealthEnv NGO
      </span>
      <div className="flex space-x-10">
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
    </nav>
  );
}
