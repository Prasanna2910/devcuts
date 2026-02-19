import React, { useState, useEffect } from "react";

const ImageModal = ({ images, onClose }) => {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images) return null;

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      
      {/* Close Button */}
      <button
        className="absolute top-6 right-8 text-white text-3xl hover:opacity-70 transition"
        onClick={onClose}
      >
        ✕
      </button>

      {/* Image Container */}
      <div className="relative w-full max-w-5xl px-6 flex items-center justify-center">
        
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/40 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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
          className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
        />

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-4 md:right-8 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/40 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
