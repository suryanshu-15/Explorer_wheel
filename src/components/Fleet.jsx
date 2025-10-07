import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faCar } from '@fortawesome/free-solid-svg-icons'
import bikes from '../data/bikes'
import cars from '../data/cars'

export default function Fleet() {
  return (
    <section id='fleet' className='py-16 px-4 md:px-8 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <h3 className='text-3xl font-bold text-gray-800 text-center mb-3'>Our Fleet</h3>
        <p className='text-center text-gray-600 mb-12'>
          Choose your ride — bikes or cars — and start your journey today.
        </p>

        {/* ----------------- Bikes Section ----------------- */}
        <div className='mb-14'>
          <h4 className='text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-600 inline-block'>
            Two-Wheelers
          </h4>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
            {bikes.map(b => (
              <div
                key={b.id}
                className='bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden flex flex-col'
              >
                {b.img ? (
                  <img src={b.img} alt={b.name} className='w-full h-48 object-cover' />
                ) : (
                  <div className='w-full h-48 flex items-center justify-center bg-gray-100 text-gray-400 text-6xl'>
                    <FontAwesomeIcon icon={faMotorcycle} />
                  </div>
                )}

                <div className='p-5 flex flex-col justify-between flex-grow'>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-800'>
                      {b.name} <span className='text-sm text-gray-500 ml-1'>• {b.type}</span>
                    </h4>
                    <p className='text-sm text-gray-600 mt-2 line-clamp-2'>{b.desc}</p>
                  </div>
                  <div className='mt-4 flex items-center justify-between'>
                    <div className='text-lg font-bold text-blue-600'>{b.price}</div>
                    <a
                      href='#booking'
                      className='px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition'
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------- Cars Section ----------------- */}
        <div className='pt-10 border-t border-gray-200'>
          <h4 className='text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-600 inline-block'>
            Four-Wheelers
          </h4>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6'>
            {cars.map(c => (
              <div
                key={c.id}
                className='bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden flex flex-col'
              >
                {c.img ? (
                  <img src={c.img} alt={c.name} className='w-full h-48 object-cover' />
                ) : (
                  <div className='w-full h-48 flex items-center justify-center bg-gray-100 text-gray-400 text-6xl'>
                    <FontAwesomeIcon icon={faCar} />
                  </div>
                )}

                <div className='p-5 flex flex-col justify-between flex-grow'>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-800'>{c.name}</h4>
                    <p className='text-sm text-gray-600 mt-2 line-clamp-2'>{c.desc}</p>
                  </div>
                  <div className='mt-4 flex items-center justify-between'>
                    <div className='text-sm text-gray-700'>12hr / 24hr</div>
                    <a
                      href='#booking'
                      className='px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition'
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
