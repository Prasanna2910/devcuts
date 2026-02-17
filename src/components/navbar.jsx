import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FFFFFF] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-semibold text-[#1C1C1C] tracking-wide">
          Devcutz
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-[#1C1C1C] hover:text-[#C08457] transition duration-300">
            Home
          </a>
          <a href="#portfolio" className="text-[#1C1C11C] hover:text-[#C08457] transition duration-300">
            Portfolio
          </a>
          <a href="#services" className="text-[#1C1C1C] hover:text-[#C08457] transition duration-300">
            Services
          </a>
          <a href="#about" className="text-[#1C1C1C] hover:text-[#C08457] transition duration-300">
            About
          </a>
          <a href="#contact" className="text-[#1C1C1C] hover:text-[#C08457] transition duration-300">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-[#C08457] text-white px-5 py-2 rounded-full hover:opacity-90 transition duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-[#1C1C1C] text-2xl">
            ☰
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
