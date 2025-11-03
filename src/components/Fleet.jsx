import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faCar, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import bikes from '../data/bikes'
import cars from '../data/cars'

export default function Fleet() {
  const [selectedBike, setSelectedBike] = useState(bikes[0])
  const [selectedCar, setSelectedCar] = useState(cars[0])

  return (
    <section id='fleet' className='py-16 px-4 md:px-8 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <h3 className='text-3xl font-bold text-gray-800 text-center mb-3'>Our Fleet</h3>
        <p className='text-center text-gray-600 mb-12'>
          Choose your ride — bikes or cars — and start your journey today.
        </p>

        {/* ---------- Mobile View (Dropdown Mode) ---------- */}
        <div className='md:hidden'>
          {/* ---------------- Bikes Section ---------------- */}
          <div className='mb-10'>
            <h4 className='text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2'>
              <FontAwesomeIcon icon={faMotorcycle} className='text-blue-600' /> Two-Wheelers
            </h4>

            <div className='bg-white rounded-xl shadow-md overflow-hidden'>
              <img
                src={selectedBike.img}
                alt={selectedBike.name}
                className='w-full h-44 object-cover'
              />
              <div className='p-4 text-center'>
                <h4 className='text-lg font-semibold text-gray-800'>{selectedBike.name}</h4>
                <p className='text-sm text-gray-500 mt-1'>₹{selectedBike.price}</p>
                <a
                  href='#booking'
                  className='mt-3 inline-block px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-700 transition'
                >
                  Book
                </a>

                {/* Highlighted Dropdown */}
                <div className='mt-5 text-left'>
                  <label className='block text-xs text-gray-500 mb-1'>
                    Select another bike:
                  </label>
                  <div className='relative'>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className='absolute right-3 top-3 text-gray-500 pointer-events-none transition-transform duration-200 group-hover:rotate-180'
                    />
                    <select
                      onChange={e =>
                        setSelectedBike(bikes.find(b => b.id === Number(e.target.value)))
                      }
                      className='w-full border-2 border-blue-500 bg-blue-50 rounded-lg p-2 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white cursor-pointer font-medium'
                      value={selectedBike.id}
                    >
                      {bikes.map(b => (
                        <option key={b.id} value={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- Cars Section ---------------- */}
          <div>
            <h4 className='text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2'>
              <FontAwesomeIcon icon={faCar} className='text-slate-600' /> Four-Wheelers
            </h4>

            <div className='bg-white rounded-xl shadow-md overflow-hidden'>
              <img
                src={selectedCar.img}
                alt={selectedCar.name}
                className='w-full h-44 object-cover'
              />
              <div className='p-4 text-center'>
                <h4 className='text-lg font-semibold text-gray-800'>{selectedCar.name}</h4>
                
                <a
                  href='#booking'
                  className='mt-3 inline-block px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-700 transition'
                >
                  Book
                </a>

                {/* Highlighted Dropdown */}
                <div className='mt-5 text-left'>
                  <label className='block text-xs text-gray-500 mb-1'>
                    Select another car:
                  </label>
                  <div className='relative'>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className='absolute right-3 top-3 text-gray-500 pointer-events-none transition-transform duration-200'
                    />
                    <select
                      onChange={e =>
                        setSelectedCar(cars.find(c => c.id === Number(e.target.value)))
                      }
                      className='w-full border-2 border-slate-600 bg-slate-100 rounded-lg p-2 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white cursor-pointer font-medium'
                      value={selectedCar.id}
                    >
                      {cars.map(c => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Desktop View (Original Grid) ---------- */}
        <div className='hidden md:block'>
          {/* Bikes */}
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
                        {b.name}{' '}
                        <span className='text-sm text-gray-500 ml-1'>• {b.type}</span>
                      </h4>
                      <p className='text-sm text-gray-600 mt-2 line-clamp-2'>{b.desc}</p>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                      <div className='text-lg font-bold text-slate-700'>{b.price}</div>
                      <a
                        href='#booking'
                        className='px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-700 transition'
                      >
                        Book
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cars */}
          <div className='pt-10 border-t border-gray-200'>
            <h4 className='text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-slate-600 inline-block'>
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
                        className='px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-700 transition'
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
      </div>
    </section>
  )
}
