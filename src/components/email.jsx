import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const messageTimeoutRef = useRef(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn("EmailJS public key not configured");
    }
  }, []);

  // Clear message after 5 seconds
  useEffect(() => {
    if (message) {
      messageTimeoutRef.current = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 5000);
    }
    return () => {
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }
    };
  }, [message]);

  const validateForm = () => {
    const formData = new FormData(form.current);
    const name = formData.get("from_name")?.trim();
    const email = formData.get("reply_to")?.trim();
    const messageText = formData.get("message")?.trim();

    if (!name || name.length < 2) {
      setMessage("Please enter a valid name");
      setMessageType("error");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      setMessageType("error");
      return false;
    }

    if (!messageText || messageText.length < 10) {
      setMessage("Message must be at least 10 characters");
      setMessageType("error");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage("");

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      setMessage("Email service not configured. Please contact support.");
      setMessageType("error");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current)
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          setMessageType("success");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setMessage(
            "❌ Failed to send message. Please try again or contact support."
          );
          setMessageType("error");
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message (at least 10 characters)"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-3 rounded-lg text-center font-medium ${
            messageType === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Contact;
