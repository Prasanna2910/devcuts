import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/12200847/pexels-photo-12200847.jpeg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
          Capturing Sacred Moments
          <span className="block text-[#C08457] mt-2">
            Of Your Wedding Story
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          North Indian Weddings • Cultural Rituals • Timeless Emotions
        </p>

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
