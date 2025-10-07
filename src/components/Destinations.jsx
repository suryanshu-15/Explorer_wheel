import React from "react"
import destinations from "../data/destinations"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Autoplay } from "swiper/modules"

export default function Destinations() {
  return (
    <section id="destinations" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h3 className="text-3xl font-bold text-gray-800">Explore Koraput</h3>
        <p className="text-gray-600 mt-2">Handpicked local attractions we cover.</p>

        <div className="mt-10">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 3,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {destinations.map((d) => (
              <SwiperSlide key={d.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 text-left">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {d.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {d.short}
                    </p>
                    <div className="mt-4 flex justify-end">
                      <a
                        href="#booking"
                        className="text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        View Package
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
