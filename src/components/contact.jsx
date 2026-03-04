import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Initialize EmailJS
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

        // Open Gmail compose as well
        const subject = encodeURIComponent(
          `New Query from ${formData.name}`
        );
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
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

  // Contact details
  const whatsappNumber = "916379131320";
  const instagramLink = "https://www.instagram.com/_devcutz_";
  const emailAddress = "devcutz.query@gmail.com";

  // Floating Social Button Component (with brand icon colors)
  const SocialButton = ({ link, bgColor, borderColor, Icon, iconColor }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
    >
      <div className="relative w-14 h-14 rounded-full group cursor-pointer">
        {/* Floating background */}
        <div
          className={`absolute top-0 left-0 w-full h-full rounded-full ${bgColor} duration-300 group-hover:-top-6 group-hover:shadow-2xl`}
        ></div>

        {/* Icon container */}
        <div
          className={`relative z-10 w-full h-full flex items-center justify-center border-2 ${borderColor} rounded-full bg-white`}
        >
          <Icon size={22} className={`${iconColor}`} />
        </div>
      </div>
    </a>
  );

  return (
    <section id="contact" className="reveal bg-[#F8F5F2] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1C1C1C]">
            Contact
          </h2>
          <p className="text-[#6B6B6B] mt-4">
            Reach out directly or send your query
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* LEFT – Social Buttons */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-8">
              Connect with Us
            </h3>

            <div className="flex gap-8">
              {/* WhatsApp */}
              <SocialButton
                link={`https://wa.me/${whatsappNumber}`}
                bgColor="bg-green-500"
                borderColor="border-green-500"
                Icon={FaWhatsapp}
                iconColor="text-green-600"
              />

              {/* Instagram */}
              <SocialButton
                link={instagramLink}
                bgColor="bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500"
                borderColor="border-pink-500"
                Icon={FaInstagram}
                iconColor="text-purple-600"
              />

              {/* Gmail */}
              <SocialButton
                link={`mailto:${emailAddress}`}
                bgColor="bg-red-500"
                borderColor="border-red-500"
                Icon={FaEnvelope}
                iconColor="text-red-600"
              />
            </div>
          </div>

          {/* RIGHT – Query Form */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-md">
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
                  className={`p-3 rounded-lg text-center font-medium ${statusMessage.includes("✅")
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
