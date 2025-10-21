import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function EnquiryForm() {
  const [showPopup, setShowPopup] = useState(false);
  const PHONE = "+918984192523"; // WhatsApp number

  useEffect(() => {
    const hasClosed = localStorage.getItem("popupClosed");
    // if (hasClosed) return; // Uncomment if you want to hide permanently after closing once

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowPopup(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("popupClosed", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const service = e.target.service.value;
    const message = e.target.message.value.trim();

    const encodedMessage = encodeURIComponent(
      `Hello, I'm ${name}. My mobile number is ${phone}. I'm interested in your ${service} service. ${
        message ? `Message: ${message}` : ""
      }`
    );

    // Open WhatsApp chat directly
    window.open(`https://wa.me/${PHONE}?text=${encodedMessage}`, "_blank");

    handleClose();
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed bottom-24 right-6 z-50 animate-slideUp"
      style={{ animation: "slideUp 0.6s ease-out" }}
    >
      <div className="relative bg-white shadow-2xl border border-gray-200 rounded-2xl w-80 p-5">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-indigo-600 text-center">
          Have a Query ?
        </h2>
        <p className="text-gray-500 text-center mb-3 text-sm">
           Contact us on WhatsApp!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 outline-none"
          />

          <input
            type="tel"
            name="phone"
            required
            pattern="[0-9]{10}"
            placeholder="Mobile Number"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 outline-none"
          />

          {/* Enquiry Type Dropdown */}
          <select
            name="service"
            required
            defaultValue=""
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 outline-none text-gray-600"
          >
            <option value="" disabled>
              Enquiry About...
            </option>
            <option value="Car Rental">Cars</option>
            <option value="Bike Rental">Bike</option>
            <option value="Hotel Booking">Hotel</option>
            <option value="Taxi Service">Taxi</option>
            <option value="Camping Service">Camping</option>
          </select>

          <textarea
            name="message"
            rows="2"
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-all"
          >
            Submit via WhatsApp
          </button>
        </form>
      </div>

      {/* Add CSS for animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
