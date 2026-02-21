import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#1C1C1C]/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* LEFT — Brand Name */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-white"
          style={{ fontFamily: "Lovelo, sans-serif" }}
        >
          DevCutz
        </a>

        {/* CENTER — Nav Links (absolute center) */}
        <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-white hover:text-[#C08457] transition font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* RIGHT — Book Now Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <button className="group relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none">
              
              {/* Rotating Gradient Border */}
              <span
                className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]
                bg-gradient-to-r from-[#C08457] via-[#E6B98A] to-[#A86A3D]"
              ></span>

              {/* Inner Button */}
              <span
                className="relative inline-flex items-center justify-center 
                rounded-full bg-[#1C1C1C] px-6 py-2 text-sm font-medium 
                transition-all duration-300 group-hover:bg-[#1C1C1C]/90"
              >
                {/* Left Arrow */}
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mr-2 h-4 w-4 text-[#E6B98A] transition-transform duration-300 group-hover:-translate-x-1"
                >
                  <path
                    d="M11 19l-7-7 7-7"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>

                <span
                  className="bg-gradient-to-r from-[#C08457] via-[#E6B98A] to-[#A86A3D]
                  bg-clip-text text-transparent font-semibold"
                >
                  Book Now
                </span>

                {/* Right Arrow */}
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-2 h-4 w-4 text-[#E6B98A] transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M13 5l7 7-7 7"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#1C1C1C] px-6 pb-6 space-y-4 text-center">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-[#C08457] transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="block bg-[#C08457] text-white py-2 rounded-full mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
