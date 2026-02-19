import React from "react";

const CategoryCard = ({ title, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-xl shadow-md group"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-white text-2xl font-semibold tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
