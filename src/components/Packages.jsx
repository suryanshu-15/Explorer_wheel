import React, { useState } from "react";

export default function Packages() {
  const packages = [
    {
      title: "Deomali Explorer: Bike & Camp Adventure",
      img: "https://images.unsplash.com/photo-1533681707580-26f286e6b57c?auto=format&fit=crop&w=800&q=60",
      details:
        "Royal Enfield Classic 350 ride + Camp with Dinner near Deomali Peak. Enjoy sunrise views, pine forest trails, and a peaceful night stay.",
      price: 2999,
      duration: "2 Days / 1 Night",
    },
    {
      title: "Budget Commuter & Basic Camp",
      img: "https://images.unsplash.com/photo-1565084888279-aca607ecce0e?auto=format&fit=crop&w=800&q=60",
      details:
        "Honda Livo / Hero Splendor + Tent camping near Kolab Dam or Sabara Srikhetra. Affordable and easy for solo explorers.",
      price: 1999,
      duration: "2 Days / 1 Night",
    },
    {
      title: "All-Inclusive Waterfall Taxi Tour",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      details:
        "Full-day guided taxi trip covering Chitrakoot, Raniduduma & Galigabdar Waterfall. Perfect for families and couples.",
      price: 1999,
      duration: "1 Day",
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === "EXPLORE10") {
      setDiscount(selectedPackage.price * 0.1);
      setMessage("🎉 Coupon Applied! You got 10% off.");
    } else if (code === "REFRFRIEND") {
      setDiscount(200);
      setMessage("🎉 Referral Applied! You got ₹200 off.");
    } else {
      setDiscount(0);
      setMessage("❌ Invalid code. Try again!");
    }
  };

  const finalPrice = selectedPackage
    ? Math.max(selectedPackage.price - discount, 0)
    : 0;

  return (
    <section id="packages" className="mb-20 px-6">
      <h3 className="text-4xl font-extrabold text-center mb-12 text-slate-900 tracking-tight">
        Popular Packages
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out group"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={pkg.img}
                alt={pkg.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-[260px]">
              <div>
                <h4 className="font-semibold text-lg text-slate-900 mb-2 leading-tight">
                  {pkg.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{pkg.details}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="font-bold text-lg text-slate-800">
                    ₹{pkg.price}
                  </div>
                  <div className="text-xs text-gray-500">{pkg.duration}</div>
                </div>
                <button
                  onClick={() => {
                    setSelectedPackage(pkg);
                    setCoupon("");
                    setDiscount(0);
                    setMessage("");
                  }}
                  className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-slate-800 hover:shadow-md active:scale-95 transition-all duration-300"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Popup */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg relative animate-fadeIn">
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h4 className="text-xl font-bold text-slate-900 mb-3">
              {selectedPackage.title}
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Base Price: ₹{selectedPackage.price}
            </p>

            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon or referral code"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3 focus:ring-2 focus:ring-slate-900 focus:outline-none"
            />

            <button
              onClick={applyCoupon}
              className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-800 transition-all mb-2"
            >
              Apply Code
            </button>

            {message && (
              <p
                className={`text-sm mb-2 ${
                  message.includes("❌") ? "text-red-500" : "text-green-600"
                }`}
              >
                {message}
              </p>
            )}

            <div className="border-t pt-3 mt-3">
              <p className="text-gray-700 text-sm">
                Discount: <span className="font-semibold">₹{discount}</span>
              </p>
              <p className="text-gray-900 font-semibold text-lg mt-1">
                Final Price:{" "}
                <span className="text-slate-900 font-bold">₹{finalPrice}</span>
              </p>
            </div>

            <button
              onClick={() => alert(`Booking Confirmed for ₹${finalPrice}`)}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
