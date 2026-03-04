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
  {
    id: 4,
    title: "Drone Photography",
    description:
      "Stunning aerial shots and cinematic perspectives that add a breathtaking view to weddings, events, and special occasions.",
  },
  {
    id: 5,
    title: "Photo Frames",
    description:
      "Premium custom photo framing for your cherished memories, including frames for your existing artwork and photographs captured by us.",
  },
  {
    id: 6,
    title: "Printables",
    description:
      "High-quality customized prints including T-shirts, ID cards, banners, flex, and other personalized branding and event materials.",
  },
];

const Services = () => {
  const phoneNumber = "916379131320";

  return (
    <section id="services" className="reveal bg-[#F8F5F2] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1C1C1C]">
            Our Services
          </h2>
          <p className="text-[#6B6B6B] mt-4">
            Professional photography tailored to capture your most meaningful
            moments.
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

              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[#C08457] font-medium hover:underline"
              >
                Connect with us →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
