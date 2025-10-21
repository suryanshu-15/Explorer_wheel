import React from "react"
import { motion } from "framer-motion"
import bikes from "../data/bikes"
import cars from "../data/cars"

export default function Services() {
  const services = [
    {
      title: "Self-Drive Bikes",
      desc: "Explore the scenic routes of Koraput with our premium bikes. Starting at ₹799/day.",
      img: bikes[0].img,
    },
    {
      title: "Self-Drive Cars",
      desc: "Flexible 12hr & 24hr rental plans for your next trip. Drive at your own pace.",
      img: cars[0].img,
    },
    {
      title: "Hotels & Stays",
      desc: "From budget stays to luxury hotels — find comfort and convenience wherever you go.",
      img: "https://cottagesinthehills.com/assets/img/intro_section/1705128667.jpg",
    },
    {
      title: "Taxi Services",
      desc: "Professional drivers and comfortable rides. Starting at ₹1999/day.",
      img: "https://suritours.in/nimg/taxi-service-in-delhi.jpg",
    },
    {
      title: "Camping & Tour Packages",
      desc: "Discover nature with guided camps and curated tour experiences around Koraput.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXtE9Df3QBXrBG-aix-xAHiU7fmHvtz-9uQ&s",
    },
    {
      title: "24/7 Support",
      desc: "Enjoy round-the-clock roadside assistance and on-call support — your safety matters.",
      img: "https://content3.jdmagicbox.com/comp/ernakulam/l1/0484px484.x484.171214194032.b5l1/catalogue/travancore-support-services-pvt-ltd-vennala-ernakulam-electricians-xlv0w.jpg",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="services" className="py-20 px-4 md:px-10 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-800 mb-3"
        >
          Our Premium Services
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg mb-14 max-w-3xl mx-auto"
        >
          Everything you need for a perfect trip — from self-drive rides to cozy stays and guided adventures.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-md overflow-hidden transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative group overflow-hidden">
                <motion.img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text */}
              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Background Animation */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-blue-300 opacity-10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </div>
    </section>
  )
}

