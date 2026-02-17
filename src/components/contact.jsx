import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [activeForm, setActiveForm] = useState("email");
  const emailFormRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const messageTimeoutRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "Wedding",
    message: "",
  });

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  // Clear message after 4 seconds
  useEffect(() => {
    if (message) {
      messageTimeoutRef.current = setTimeout(() => {
        setMessage("");
      }, 4000);
    }
    return () => {
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }
    };
  }, [message]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "916379131320"; // Replace with photographer number (with country code)

    const text = `Hi, I'm ${formData.name}.
I am interested in ${formData.eventType} photography.
${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Format email in proper structure
    const formattedMessage = `Name: ${formData.name}
Email: ${formData.email}
Event Type: ${formData.eventType}

---

${formData.message}`;

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formattedMessage,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            eventType: "Wedding",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setMessage("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#F8F5F2] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#1C1C1C]">Contact Me</h2>
          <p className="text-[#6B6B6B] mt-4">
            Choose how you'd like to reach out.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-2 rounded-full shadow-md flex gap-2">
            <button
              onClick={() => setActiveForm("email")}
              className={`px-6 py-2 rounded-full transition ${
                activeForm === "email"
                  ? "bg-[#C08457] text-white"
                  : "text-[#1C1C1C]"
              }`}
            >
              Email
            </button>

            <button
              onClick={() => setActiveForm("whatsapp")}
              className={`px-6 py-2 rounded-full transition ${
                activeForm === "whatsapp"
                  ? "bg-[#C08457] text-white"
                  : "text-[#1C1C1C]"
              }`}
            >
              WhatsApp
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          {/* EMAIL FORM */}
          {activeForm === "email" && (
            <form ref={emailFormRef} onSubmit={handleEmailSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C08457] focus:outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C08457] focus:outline-none"
                required
              />

              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C08457] focus:outline-none"
              >
                <option>Wedding</option>
                <option>Event</option>
                <option>Candid Shoot</option>
              </select>

              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your event..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C08457] focus:outline-none"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C08457] text-white py-3 rounded-full hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Email"}
              </button>

              {message && (
                <div
                  className={`p-3 rounded-lg text-center font-medium ${
                    message.includes("✅")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          )}

          {/* WHATSAPP FORM */}
          {activeForm === "whatsapp" && (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C08457] focus:outline-none"
                required
              />

              <select
                name="eventType"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C08457] focus:outline-none"
              >
                <option>Wedding</option>
                <option>Event</option>
                <option>Candid Shoot</option>
              </select>

              <textarea
                name="message"
                rows="4"
                placeholder="Additional details..."
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#C08457] focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-full hover:opacity-90 transition"
              >
                Send via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
