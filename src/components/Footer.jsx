import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-edu text-white py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        {/* Left: Copyright */}
        <div className="mb-4 sm:mb-0 text-sm font-medium">
          &copy; 2025 EduHealthEnv NGO. All rights reserved.
        </div>

        {/* Right: Social icons */}
        <div className="flex justify-center sm:justify-end space-x-6 text-xl sm:text-2xl">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
