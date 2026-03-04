import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ImageModal = ({ images, onClose }) => {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!images) return null;

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center px-2"
      style={{ zIndex: 9999 }}
    >
      {/* Top-right ✕ Close Button */}
      <button
        className="absolute top-4 right-4 sm:top-6 sm:right-8 text-white text-3xl hover:opacity-70 transition"
        onClick={onClose}
      >
        ✕
      </button>

      {/* Image Container */}
      <div className="relative w-full max-w-5xl px-10 sm:px-16 flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 sm:left-2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/40 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Image */}
        <img
          src={images[index]}
          alt="portfolio"
          className="w-full max-h-[60vh] sm:max-h-[75vh] object-contain rounded-lg shadow-lg"
        />

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 sm:right-2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/40 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot counter */}
      <div className="flex gap-2 mt-5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? "bg-[#C08457] scale-125" : "bg-white/40"
              }`}
          />
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={onClose}
        className="mt-6 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full border border-white/30 backdrop-blur-sm transition duration-300 text-sm font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Portfolio
      </button>
    </div>,
    document.body
  );
};

export default ImageModal;
