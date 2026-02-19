import React from "react";

const SocialButton = ({ children, href, bgColors }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group cursor-pointer text-white overflow-hidden h-16 w-full rounded-md p-2 flex justify-center items-center font-semibold ${bgColors}`}
    >
      {/* Animated Circles */}
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-40 duration-500 bg-white/20"></div>
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-40 duration-500 bg-white/20"></div>
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-40 duration-500 bg-white/20"></div>
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-40 duration-500 bg-white/20"></div>

      {/* Content */}
      <div className="z-20 flex items-center gap-3 text-lg">
        {children}
      </div>
    </a>
  );
};

export default SocialButton;
