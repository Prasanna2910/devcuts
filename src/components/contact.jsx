import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaInstagram, FaGoogle } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams
      )
      .then(() => {
        setStatusMessage("✅ Query sent successfully!");
        setLoading(false);

        const subject = encodeURIComponent(
          `New Query from ${formData.name}`
        );
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=devcutz.query@gmail.com&su=${subject}&body=${body}`,
          "_blank"
        );

        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatusMessage("❌ Failed to send.");
        setLoading(false);
      });
  };

  const whatsappNumber = "916379131320";
  const instagramLink = "https://www.instagram.com/_devcutz_";
  const emailAddress = "devcutz.query@gmail.com";

  // Reusable animated button
  const AnimatedButton = ({ href, children, colorClasses }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group cursor-pointer text-white overflow-hidden h-16 w-full rounded-md flex justify-center items-center font-semibold ${colorClasses}`}
    >
      {/* Animated circles */}
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-0 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-40 duration-500 bg-black/20"></div>
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-0 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-40 duration-500 bg-black/20"></div>
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-0 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-40 duration-500 bg-black/20"></div>
      <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-0 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-40 duration-500 bg-black/20"></div>

      <div className="z-10 flex items-center gap-3 text-lg">
        {children}
      </div>
    </a>
  );

  return (
    <section id="contact" className="bg-[#F8F5F2] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-[#1C1C1C]">
            Contact
          </h2>
          <p className="text-[#6B6B6B] mt-4">
            Reach out directly or send your query
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-7">
              Connect with Us
            </h3>

            <AnimatedButton
              href={`https://wa.me/${whatsappNumber}`}
              colorClasses="bg-green-500"
            >
              <FaWhatsapp size={22} />
              WhatsApp
            </AnimatedButton>

            <AnimatedButton
              href={instagramLink}
              colorClasses="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            >
              <FaInstagram size={22} />
              Instagram
            </AnimatedButton>

            <AnimatedButton
              href={`mailto:${emailAddress}`}
              colorClasses="bg-red-500"
            >
              <FaGoogle size={22} />
              Gmail
            </AnimatedButton>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-6">
              Send a Query
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C08457] focus:outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C08457] focus:outline-none"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Write your query..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C08457] focus:outline-none"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C08457] text-white py-3 rounded-full hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Query"}
              </button>

              {statusMessage && (
                <div
                  className={`p-3 rounded-lg text-center font-medium ${
                    statusMessage.includes("✅")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
