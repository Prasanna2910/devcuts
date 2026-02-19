import React from "react";
import logo from "../assets/devlogo.png"; // adjust if filename differs
import backgroundImage from "../assets/background.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Elegant Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Devcutz Logo"
          className="h-52 md:h-72 w-auto object-contain mb-1"
        />

        <p className="font-lovelo text-lg md:text-2xl text-white tracking-[0.25em] uppercase font-bold">
          Making memories with moments
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-[#C08457] text-white rounded-full hover:opacity-90 transition"
          >
            View Portfolio
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-[#1C1C1C] transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
