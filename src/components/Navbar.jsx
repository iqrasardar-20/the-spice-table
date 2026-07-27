import { useState } from "react";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Menu", "Gallery", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUtensils className="text-yellow-500 text-3xl" />

          <h1 className="text-3xl font-bold tracking-wide">
            <span className="text-yellow-500">The</span>{" "}
            <span className="text-white">Spice Table</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li
              key={link}
              className="relative text-white text-lg font-medium cursor-pointer transition-all duration-300 hover:text-yellow-500 hover:-translate-y-1 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Book Button */}
        <button className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20">
          Book Table
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-xl overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li
              key={link}
              className="text-white text-lg hover:text-yellow-500 transition duration-300 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </li>
          ))}

          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
            Book Table
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;