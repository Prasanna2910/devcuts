import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import ImageModal from "./ImageModal";
import { portfolioData } from "../data/portfolioData";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = Object.keys(portfolioData);

  return (
    <section id="portfolio" className="reveal bg-[#F8F5F2] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center text-[#1C1C1C]">
          Our Portfolio
        </h2>
        <p className="text-center text-[#6B6B6B] mt-3">
          Explore our work across different moments
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              title={category}
              image={portfolioData[category][0]} // cover image
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedCategory && (
          <ImageModal
            images={portfolioData[selectedCategory]}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
