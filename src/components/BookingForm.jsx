// import React, { useState, useEffect } from 'react'
// import { PHONE, EMAIL, ADDRESS } from '../config'

// // Sample data
// const bikes = [
//   'Hero Splendor', 'Hero Passion Pro', 'Honda Livo', 'Honda Shine',
//   'Hero CBZ', 'Hero Xtreme', 'Yamaha FZS', 'TVS Apache 160', 'Honda Hornet',
//   'Royal Enfield Hunter 350', 'Royal Enfield Classic 350', 'Royal Enfield Meteor 350',
//   'Benelli Imperiale 400', 'Honda Dio', 'Honda Activa', 'Yamaha Fascino 125 Fi',
//   'Suzuki Access 125', 'TVS Ntorq 125'
// ]

// const cars = [
//   'Toyota Innova', 'Maruti Swift', 'Hyundai Creta'
// ]

// const taxis = [
//   'Sedan Taxi', 'SUV Taxi', 'Tempo Traveller', 'Mini Bus'
// ]

// const hotels = [
//   'Explorer Stay Bhubaneswar', 'Nature Retreat Koraput', 'Hill View Lodge Deomali'
// ]

// export default function BookingForm() {
//   const [booking, setBooking] = useState({
//     name: '',
//     phone: '',
//     service: 'Bike',
//     item: '',
//     fromDate: '',
//     fromTime: '',
//     toDate: '',
//     toTime: '',
//     duration: '—'
//   })

//   const [error, setError] = useState('')
//   const [modelOptions, setModelOptions] = useState([])

//   // Automatically update model options based on selected service
//   useEffect(() => {
//     if (booking.service === 'Bike') setModelOptions(bikes)
//     else if (booking.service === 'Car') setModelOptions(cars)
//     else if (booking.service === 'Taxi') setModelOptions(taxis)
//     else if (booking.service === 'Hotel') setModelOptions(hotels)
//     else setModelOptions([])
//     setBooking(prev => ({ ...prev, item: '' }))
//   }, [booking.service])

//   // Auto calculate duration
//   useEffect(() => {
//     if (booking.fromDate && booking.fromTime && booking.toDate && booking.toTime) {
//       const from = new Date(`${booking.fromDate}T${booking.fromTime}`)
//       const to = new Date(`${booking.toDate}T${booking.toTime}`)
//       const diffMs = to - from
//       if (diffMs > 0) {
//         const totalHours = diffMs / (1000 * 60 * 60)
//         const days = Math.floor(totalHours / 24)
//         const hours = Math.ceil(totalHours % 24)
//         setBooking(prev => ({ ...prev, duration: `${days} day(s) ${hours} hour(s)` }))
//       } else {
//         setBooking(prev => ({ ...prev, duration: '0 day(s) 0 hour(s)' }))
//       }
//     }
//   }, [booking.fromDate, booking.fromTime, booking.toDate, booking.toTime])

//   function openWhatsApp(payload) {
//     const text = encodeURIComponent(
//       `Hello Explorer Wheels!\nI would like to book: ${payload.service} - ${payload.item}\nFrom: ${payload.fromDate} ${payload.fromTime}\nTo: ${payload.toDate} ${payload.toTime}\nDuration: ${payload.duration}\nName: ${payload.name}\nPhone: ${payload.phone}`
//     )
//     const url = `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${text}`
//     window.open(url, '_blank')
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     if (!booking.name || !booking.phone) {
//       setError('Name and phone are required.')
//       return
//     }
//     if (!booking.fromDate || !booking.toDate || !booking.fromTime || !booking.toTime) {
//       setError('Please select both From and To date & time.')
//       return
//     }
//     const from = new Date(`${booking.fromDate}T${booking.fromTime}`)
//     const to = new Date(`${booking.toDate}T${booking.toTime}`)
//     if (from > to) {
//       setError('From datetime cannot be after To datetime.')
//       return
//     }

//     setError('')
//     openWhatsApp(booking)

//     const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
//       'Booking request from website'
//     )}&body=${encodeURIComponent(JSON.stringify(booking, null, 2))}`
//     window.open(mailto, '_blank')
//   }

//   return (
//     <section id='booking' className='mt-14 grid md:grid-cols-2 gap-8'>
//       <div>
//         <h3 className='text-2xl font-semibold'>Book Your Ride / Stay</h3>
//         <p className='text-gray-600 mt-2'>Fill the form and we’ll reach out on WhatsApp.</p>

//         <form onSubmit={handleSubmit} className='mt-4 bg-white p-4 rounded-2xl shadow-md border border-gray-100'>
//           {error && <p className='text-red-600 mb-2'>{error}</p>}

//           <div className='grid grid-cols-1 gap-3'>
//             <input
//               required
//               className='border p-2 rounded-lg'
//               placeholder='Your Name'
//               value={booking.name}
//               onChange={(e) => setBooking({ ...booking, name: e.target.value })}
//             />
//             <input
//               required
//               className='border p-2 rounded-lg'
//               placeholder='Phone / WhatsApp Number'
//               value={booking.phone}
//               onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
//             />

//             <select
//               className='border p-2 rounded-lg'
//               value={booking.service}
//               onChange={(e) => setBooking({ ...booking, service: e.target.value })}
//             >
//               <option>Bike</option>
//               <option>Car</option>
//               <option>Taxi</option>
//               <option>Hotel</option>
//               <option>Camping Kit</option>
//             </select>

//             {modelOptions.length > 0 && (
//               <select
//                 className='border p-2 rounded-lg'
//                 value={booking.item}
//                 onChange={(e) => setBooking({ ...booking, item: e.target.value })}
//               >
//                 <option value=''>Select {booking.service} Model</option>
//                 {modelOptions.map((m, i) => (
//                   <option key={i}>{m}</option>
//                 ))}
//               </select>
//             )}

//             {/* From and To datetime */}
//             <div className='flex flex-col sm:flex-row gap-3'>
//               <div className='flex-1'>
//                 <label className='text-sm text-gray-600'>From</label>
//                 <div className='flex gap-2'>
//                   <input
//                     type='date'
//                     className='border p-2 rounded-lg flex-1'
//                     value={booking.fromDate}
//                     onChange={(e) => setBooking({ ...booking, fromDate: e.target.value })}
//                   />
//                   <input
//                     type='time'
//                     className='border p-2 rounded-lg w-24'
//                     value={booking.fromTime}
//                     onChange={(e) => setBooking({ ...booking, fromTime: e.target.value })}
//                   />
//                 </div>
//               </div>
//               <div className='flex-1'>
//                 <label className='text-sm text-gray-600'>To</label>
//                 <div className='flex gap-2'>
//                   <input
//                     type='date'
//                     className='border p-2 rounded-lg flex-1'
//                     value={booking.toDate}
//                     onChange={(e) => setBooking({ ...booking, toDate: e.target.value })}
//                   />
//                   <input
//                     type='time'
//                     className='border p-2 rounded-lg w-24'
//                     value={booking.toTime}
//                     onChange={(e) => setBooking({ ...booking, toTime: e.target.value })}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className='mt-2 text-gray-700'>
//               <strong>Duration:</strong> {booking.duration}
//             </div>

//             <button type='submit' className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
//               Send via WhatsApp
//             </button>
//           </div>
//         </form>

//         <div className='mt-6 text-sm text-gray-600'>
//           <p><strong>Phone:</strong> {PHONE}</p>
//           <p><strong>Email:</strong> {EMAIL}</p>
//           <p><strong>Address:</strong> {ADDRESS}</p>
//         </div>
//       </div>

//       <div>
//         <h3 className='text-2xl font-semibold'>Why Explorer Wheels?</h3>
//         <ul className='mt-3 list-disc list-inside text-gray-600'>
//           <li>Locally curated vehicles & stays</li>
//           <li>Transparent pricing</li>
//           <li>Safety kits & 24/7 support</li>
//           <li>Easy WhatsApp booking</li>
//         </ul>
//       </div>
//     </section>
//   )
// }



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaCheckCircle,
  FaCar,
  FaMotorcycle,
  FaHotel,
  FaShieldAlt,
  FaTags,
  FaClock,
  FaHandsHelping,
} from "react-icons/fa";
import { PHONE } from "../config";
import bikes from "../data/bikes";
import cars from "../data/cars";
import hotels from "../data/hotels";

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponStatus, setCouponStatus] = useState("");
  const [error, setError] = useState("");

  const coupons = [
    { code: "EXPLORER10", type: "percent", value: 10 },
    { code: "REFER50", type: "flat", value: 50 },
  ];

  const dataMap = { bike: bikes, car: cars, hotel: hotels };

  const handleTypeToggle = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleItemSelect = (type, item) => {
    setSelectedItems((prev) => ({ ...prev, [type]: item }));
  };

  const getSubtotal = () =>
    Object.values(selectedItems).reduce((acc, item) => acc + item.price, 0);

  const handleCouponCheck = () => {
    const found = coupons.find(
      (c) => c.code.toUpperCase() === coupon.toUpperCase()
    );
    if (!found) {
      setCouponStatus("invalid");
      setDiscount(0);
      return;
    }
    setCouponStatus("valid");
    if (found.type === "percent")
      setDiscount((getSubtotal() * found.value) / 100);
    else setDiscount(found.value);
  };

  const handleBook = () => {
    if (Object.keys(selectedItems).length === 0) {
      setError("Please select at least one item before booking.");
      return;
    }
    const total = getSubtotal() - discount;
    const selections = Object.entries(selectedItems)
      .map(
        ([type, item]) =>
          `${type.toUpperCase()}: ${item.name} (₹${item.price.toLocaleString()})`
      )
      .join("\n");
    const text = encodeURIComponent(
      `Hello Explorer Wheels!\nI want to book:\n${selections}\nTotal Price: ₹${total.toLocaleString()}\nCoupon: ${
        coupon || "None"
      }`
    );
    window.open(
      `https://wa.me/${PHONE.replace(/\D/g, "")}?text=${text}`,
      "_blank"
    );
  };

  const steps = ["Select Type", "Choose Options", "Checkout"];

  return (
    <section className="min-h-screen bg-white text-slate-900 flex justify-center items-center py-10 px-3 sm:px-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-6">
        {/* LEFT: Booking Form */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto">
          {/* Step Indicator */}
          <div className="flex justify-between items-center mb-6">
            {steps.map((label, index) => (
              <div key={label} className="flex-1 text-center relative">
                <div
                  className={`w-9 h-9 mx-auto flex items-center justify-center mb-1 rounded-lg font-semibold ${
                    step >= index + 1
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-400 text-slate-500"
                  }`}
                >
                  {step > index + 1 ? (
                    <FaCheckCircle size={16} />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <p
                  className={`text-xs font-medium ${
                    step >= index + 1 ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  What would you like to book?
                </h2>
                <p className="text-slate-500 mb-4 text-sm">
                  You can select multiple options below
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { type: "bike", icon: <FaMotorcycle size={26} /> },
                    { type: "car", icon: <FaCar size={26} /> },
                    { type: "hotel", icon: <FaHotel size={26} /> },
                  ].map(({ type, icon }) => {
                    const isSelected = selectedTypes.includes(type);
                    return (
                      <motion.button
                        key={type}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleTypeToggle(type)}
                        className={`p-4 rounded-xl bg-white border text-sm sm:text-base flex flex-col items-center gap-2 transition-all ${
                          isSelected
                            ? "border-slate-900 bg-slate-100"
                            : "border-slate-300 hover:border-slate-500"
                        }`}
                      >
                        {icon}
                        <span className="capitalize">{type}</span>
                      </motion.button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={selectedTypes.length === 0}
                  className="mt-6 w-full bg-slate-900 text-white rounded-xl py-2 font-semibold disabled:opacity-40"
                >
                  Continue →{" "}
                  {selectedTypes.length > 0 && `(${selectedTypes.length})`}
                </button>
              </motion.div>
            )}

            {/* Step 2: Items */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-center">
                  Choose Your Options
                </h2>

                {selectedTypes.map((type) => (
                  <div key={type}>
                    <h3 className="text-lg font-semibold capitalize mb-2">
                      {type}s
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {dataMap[type]?.map((item) => (
                        <motion.div
                          key={item.name}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => handleItemSelect(type, item)}
                          className={`cursor-pointer p-3 rounded-xl border bg-white transition ${
                            selectedItems[type]?.name === item.name
                              ? "ring-2 ring-slate-900 border-slate-900"
                              : "border-slate-200 hover:border-slate-400"
                          }`}
                        >
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="rounded-lg w-full h-20 object-cover mb-2"
                            />
                          )}
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-slate-600">
                            ₹{item.price.toLocaleString()}/day
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="text-slate-500 underline text-sm"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-semibold"
                  >
                    Continue →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Checkout */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-center">
                  Checkout
                </h2>

                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  {Object.entries(selectedItems).map(([type, item]) => (
                    <div
                      key={type}
                      className="flex justify-between text-sm mb-1"
                    >
                      <p>
                        {item.name}{" "}
                        <span className="text-slate-400">({type})</span>
                      </p>
                      <p>₹{item.price.toLocaleString()}</p>
                    </div>
                  ))}
                  <hr className="my-2" />
                  <p className="flex justify-between text-sm font-semibold">
                    <span>Subtotal:</span>
                    <span>₹{getSubtotal().toLocaleString()}</span>
                  </p>
                  <p className="flex justify-between text-sm text-slate-600">
                    <span>Discount:</span>
                    <span>₹{discount}</span>
                  </p>
                  <p className="flex justify-between text-base font-bold mt-2">
                    <span>Total:</span>
                    <span>₹{(getSubtotal() - discount).toLocaleString()}</span>
                  </p>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="flex-1 border rounded-xl p-2 text-sm"
                    value={coupon}
                    onChange={(e) => {
                      setCoupon(e.target.value);
                      setCouponStatus("");
                    }}
                  />
                  <button
                    onClick={handleCouponCheck}
                    className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                  >
                    Apply
                  </button>
                </div>

                {couponStatus === "valid" && (
                  <p className="text-green-600 text-sm">✅ Coupon Applied!</p>
                )}
                {couponStatus === "invalid" && (
                  <p className="text-red-500 text-sm">❌ Invalid Code</p>
                )}

                <button
                  onClick={handleBook}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold mt-3 hover:bg-green-700"
                >
                  <FaWhatsapp size={18} /> Book via WhatsApp
                </button>

                <button
                  onClick={() => setStep(2)}
                  className="block mx-auto text-slate-500 underline text-sm"
                >
                  ← Back
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT: Why Explorer Wheels */}
        <div className="hidden lg:flex flex-col gap-5">
          <h2 className="text-3xl font-bold mb-2">Why Explorer Wheels?</h2>
          {[
            {
              icon: <FaShieldAlt className="text-3xl text-slate-900" />,
              title: "Locally Curated Vehicles & Stays",
              desc: "Verified options ensuring comfort and reliability.",
            },
            {
              icon: <FaTags className="text-3xl text-slate-900" />,
              title: "Transparent Pricing",
              desc: "No hidden charges — what you see is what you pay.",
            },
            {
              icon: <FaClock className="text-3xl text-slate-900" />,
              title: "24/7 Support & Safety Kits",
              desc: "Your safety and convenience come first.",
            },
            {
              icon: <FaHandsHelping className="text-3xl text-slate-900" />,
              title: "Easy WhatsApp Booking",
              desc: "Book rides or stays instantly via WhatsApp.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="flex gap-3 items-start bg-white border border-slate-200 rounded-xl p-4"
            >
              <div className="p-2 bg-slate-100 rounded-lg">{c.icon}</div>
              <div>
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-slate-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
