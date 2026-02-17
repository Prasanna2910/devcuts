import React from "react";

const portfolioImages = [
  {
    id: 1,
    title: "Wedding Ceremony",
    category: "Marriage",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    id: 2,
    title: "Candid Moments",
    category: "Candid",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 3,
    title: "Reception Night",
    category: "Event",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
  },
  {
    id: 4,
    title: "Bride Portrait",
    category: "Marriage",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    id: 5,
    title: "Birthday Event",
    category: "Event",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    id: 6,
    title: "Couple Shoot",
    category: "Candid",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#F8F5F2] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#1C1C1C]">
            My Portfolio
          </h2>
          <p className="text-[#6B6B6B] mt-4">
            A glimpse of timeless memories captured with love.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioImages.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-md"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-[#C08457] mt-2">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
