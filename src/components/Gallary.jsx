import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {
  const images = [
    '/gallary/1.jpeg',
    '/gallary/2.jpeg',
    '/gallary/3.jpeg',
    '/gallary/4.jpeg',
    // '/gallary/5.jpeg',
    // '/gallary/6.jpeg'
  ]

  return (
    <section id='gallery' className='py-12 px-3 sm:px-6 md:px-8 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <h3 className='text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2 sm:mb-3'>
          Gallery
        </h3>
        <p className='text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base'>
          Glimpses of the beauty and adventure around Koraput.
        </p>

        {/* Top Landscape Image */}
        <div className='mb-4 sm:mb-6'>
          <img
            src={images[0]}
            alt='Deomali Peak'
            className='w-full h-[180px] sm:h-[300px] md:h-[450px] object-cover rounded-lg sm:rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300'
          />
        </div>

        {/* Grid of Remaining Images */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4'>
          {images.slice(1).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 2}`}
              className='w-full h-[100px] sm:h-[180px] md:h-[200px] object-cover rounded-lg shadow-md hover:scale-[1.03] transition-transform duration-300'
            />
          ))}
        </div>

        {/* View All Button */}
        <div className='flex justify-center mt-6 sm:mt-10'>
          <Link
            to='/gallery'
            className='px-4 sm:px-6 py-2 sm:py-3 bg-slate-900 text-white text-sm sm:text-base rounded-lg font-medium hover:bg-slate-700 transition'
          >
            View All Photos
          </Link>
        </div>
      </div>
    </section>
  )
}
