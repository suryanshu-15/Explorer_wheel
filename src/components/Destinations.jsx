import React from "react"
import destinations from "../data/destinations"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Autoplay } from "swiper/modules"

export default function Destinations() {
  // Use the URL for your hosted Commutes & Transit solution
  // This URL points to the pre-built HTML page that contains the map and its logic.
  const commutesMapSrc = "https://storage.googleapis.com/maps-solutions-675yca80ha/commutes/olhg/commutes.html";
{<iframe
  title="Koraput Commutes Map"
  src={commutesMapSrc} // <-- This points to the map application
  width="100%"
  height="600px"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>}
  return (
    <section id="destinations" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h3 className="text-3xl font-bold text-gray-800">Explore Koraput</h3>
        <p className="text-gray-600 mt-2">Handpicked local attractions we cover.</p>

        {/* Swiper Slider */}
        <div className="mt-10">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 3,
              slideShadows: false,
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 2.5, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {destinations.map(d => (
              <SwiperSlide key={d.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
                  <img src={d.img} alt={d.name} className="w-full h-48 object-cover" />
                  <div className="p-5 text-left">
                    <h4 className="font-semibold text-gray-800 text-lg">{d.name}</h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{d.short}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Google Map Section - Now embedding the Commutes & Transit solution */}
        <div className="mt-14">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Find All Destinations on Map</h4>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              title="Koraput Commutes Map" // Give it a more specific title
              src={commutesMapSrc} // Use the URL for your commutes solution
              width="100%"
              height="600px" // Adjust height as needed for the UI
              style={{ border: 0 }} // React uses camelCase for style properties
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
