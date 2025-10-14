import React from 'react'
import bikes from '../data/bikes'
import cars from '../data/cars'
import hotels from '../data/hotels'

export default function Services() {
  return (
    <section id='services' className='py-16 px-4 md:px-8 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <h3 className='text-3xl font-bold text-gray-800 mb-4 text-center'>Our Services</h3>
        <p className='text-center text-gray-600 mb-12'>
          Self-drive rides, stays, taxi, camping and tour packages — everything you need for your next journey.
        </p>

        <div className='grid md:grid-cols-2 gap-10 items-stretch'>
          {/* Left Section - Visual Service Cards */}
          <div className='flex flex-col justify-between space-y-8'>
            <div className='flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition min-h-[130px]'>
              <img src={bikes[0].img} alt='bike' className='w-28 h-20 rounded-xl object-cover' />
              <div>
                <h4 className='font-semibold text-lg text-gray-800'>Self-Drive Bikes</h4>
                <p className='text-sm text-gray-600'>Starting at ₹799/day</p>
              </div>
            </div>

            <div className='flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition min-h-[130px]'>
              <img src={cars[0].img} alt='car' className='w-28 h-20 rounded-xl object-cover' />
              <div>
                <h4 className='font-semibold text-lg text-gray-800'>Self-Drive Cars</h4>
                <p className='text-sm text-gray-600'>12hr & 24hr flexible plans</p>
              </div>
            </div>

            <div className='flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition min-h-[130px]'>
              <img src='https://cottagesinthehills.com/assets/img/intro_section/1705128667.jpg  ' alt='hotel' className='w-28 h-20 rounded-xl object-cover' />
              <div>
                <h4 className='font-semibold text-lg text-gray-800'>Hotels & Stays</h4>
                <p className='text-sm text-gray-600'>Budget to luxury options available</p>
              </div>
            </div>
          </div>

          {/* Right Section - Info Boxes */}
          <div className='flex flex-col justify-between space-y-8'>
            <div className='flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition min-h-[130px]'>
              <img src="https://suritours.in/nimg/taxi-service-in-delhi.jpg" alt='Taxi' className='w-28 h-20 rounded-xl object-cover' />
              <div>
                <h4 className='font-semibold text-lg text-gray-800'>Taxi Services</h4>
                <p className='text-sm text-gray-600'>Starting at ₹1999/day</p>
              </div>
            </div>

            <div className='flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition min-h-[130px]'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxXtE9Df3QBXrBG-aix-xAHiU7fmHvtz-9uQ&s" alt='bike' className='w-28 h-20 rounded-xl object-cover' />
              <div>
                <h4 className='font-semibold text-lg text-gray-800'>Camping Services & Tour Packages</h4>
                <p className='text-sm text-gray-600'>Explore scenic destinations with guided camps and local tours.</p>
              </div> 
            </div>

            <div className='flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition min-h-[130px]'>
              <img src="https://content3.jdmagicbox.com/comp/ernakulam/l1/0484px484.x484.171214194032.b5l1/catalogue/travancore-support-services-pvt-ltd-vennala-ernakulam-electricians-xlv0w.jpg" alt='bike' className='w-28 h-20 rounded-xl object-cover' />
              <div>
                <h4 className='font-semibold text-lg text-gray-800'>24/7 Support</h4>
                <p className='text-sm text-gray-600'>Enjoy 24/7 roadside support and on-call assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
