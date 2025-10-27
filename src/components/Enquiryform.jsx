import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function EnquiryForm() {
  const [showPopup, setShowPopup] = useState(false);
  const PHONE = "+918984192523"; // WhatsApp number

  useEffect(() => {
    const hasClosed = localStorage.getItem("popupClosed");
    // if (hasClosed) return; // Uncomment if you want to hide after closing once

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

    window.open(`https://wa.me/${PHONE}?text=${encodedMessage}`, "_blank");
    handleClose();
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center md:items-end md:justify-end p-4"
      style={{ animation: "slideUp 0.6s ease-out" }}
    >
      {/* Popup Box */}
      <div
        className="relative bg-white shadow-2xl border border-gray-200 rounded-2xl w-[90%] max-w-sm p-5 
        md:fixed md:bottom-24 md:right-6 md:w-80 md:rounded-2xl"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-slate-600 text-center">
          Have a Query?
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
            <option value="Bike Rental">Bikes</option>
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
            className="w-full bg-slate-500 hover:bg-slate-600 text-white py-2 rounded-lg transition-all"
          >
            Submit via WhatsApp
          </button>
        </form>
      </div>

      {/* Animation */}
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

        @media (max-width: 768px) {
          .fixed > div {
            margin-bottom: 4rem;
          }
        }
      `}</style>
    </div>
  );
}
