import React from "react";

const services = [
  {
    id: 1,
    title: "Wedding Photography",
    description:
      "Capturing every sacred ritual, emotional moment, and beautiful detail of your special day with elegance and storytelling.",
  },
  {
    id: 2,
    title: "Event Photography",
    description:
      "From birthdays to corporate events, we preserve the energy, smiles, and atmosphere that make your event unforgettable.",
  },
  {
    id: 3,
    title: "Candid Photography",
    description:
      "Natural, unposed, and real moments that truly reflect emotions and authentic expressions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#F8F5F2] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-[#1C1C1C]">
            My Services
          </h2>
          <p className="text-[#6B6B6B] mt-4">
            Professional photography tailored to capture your most meaningful moments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#1C1C1C]">
                {service.title}
              </h3>

              <p className="text-[#6B6B6B] mt-4 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-6 text-[#C08457] font-medium hover:underline">
                Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
