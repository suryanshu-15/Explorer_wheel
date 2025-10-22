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
    <section id='gallery' className='py-16 px-4 md:px-8 bg-white'>
      <div className='max-w-6xl mx-auto'>
        <h3 className='text-3xl font-bold text-gray-800 text-center mb-3'>Gallery</h3>
        <p className='text-center text-gray-600 mb-8'>
          Glimpses of the beauty and adventure around Koraput.
        </p>

        {/* Top Landscape Image */}
        <div className='mb-6'>
          <img
            src={images[0]}
            alt='Deomali Peak'
            className='w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-lg hover:scale-[1.02] transition'
          />
        </div>

        {/* Grid of Remaining Images */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {images.slice(1).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 2}`}
              className='w-full h-[180px] md:h-[200px] object-cover rounded-xl shadow-md hover:scale-[1.03] transition'
            />
          ))}
        </div>



        <div className='flex justify-center mt-10'>
          <Link
            to='/gallery'
            className='px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-700 transition'
          >
            View All Photos
          </Link>
        </div>
      </div>
    </section>
  )
}
