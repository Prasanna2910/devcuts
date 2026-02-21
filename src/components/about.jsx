import React from "react";
import deva from "../assets/deva.jpg";

const About = () => {
  const phoneNumber = "916379131320"; // Replace with your WhatsApp number

  return (
    <section id="about" className="reveal bg-[#F8F5F2] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full">
          <img
            src={deva}
            alt="Photographer"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-semibold text-[#1C1C1C]">About</h2>

          <p className="text-[#6B6B6B] mt-4 leading-relaxed">
            I’m <span className="text-[#C08457] font-medium">Deva</span>, the
            founder of Devcutz Photography — a dynamic creative media brand
            powered by passion, innovation, and a strong team. We specialize in
            weddings, college culturals, aerial photography, event management,
            celebrity management, promotions, and complete A–Z media services,
            delivering cinematic visuals and professional excellence in every
            project we handle.
          </p>

          {/* Highlight Box */}
          <div className="mt-8 bg-[#FFFFFF] p-6 rounded-xl shadow-md">
            <p className="text-[#1C1C1C] font-medium">
              "Photography is not just about pictures — it’s about preserving
              emotions."
            </p>
          </div>

          {/* CTA Button */}
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-[#C08457] text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300"
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
