import React from "react";
import deva from "../assets/deva.jpg"

const About = () => {
  return (
    <section id="about" className="bg-[#F8F5F2] py-20 px-6">
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
          <h2 className="text-4xl font-semibold text-[#1C1C1C]">
            About Me
          </h2>

          <p className="text-[#6B6B6B] mt-6 leading-relaxed">
            Hello! I'm <span className="text-[#C08457] font-medium">Deva</span>, 
            a passionate photographer dedicated to capturing timeless memories. 
            With years of experience in wedding, event, and candid photography, 
            I focus on telling stories through authentic emotions and natural moments.
          </p>

          <p className="text-[#6B6B6B] mt-4 leading-relaxed">
            My approach is simple — I blend creativity with elegance to ensure 
            every photograph reflects the beauty and depth of your special day. 
            I believe the best pictures are the ones that make you feel something 
            even years later.
          </p>

          {/* Highlight Box */}
          <div className="mt-8 bg-[#FFFFFF] p-6 rounded-xl shadow-md">
            <p className="text-[#1C1C1C] font-medium">
              "Photography is not just about pictures — it’s about preserving emotions."
            </p>
          </div>

          {/* CTA Button */}
          <button className="mt-8 bg-[#C08457] text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300">
            Let’s Work Together
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
