import React from 'react'
import hotels from '../data/hotels'

export default function Hotels(){
  return (
    <section id='hotels' className='mb-12'>
      <h3 className='text-2xl font-semibold'>Stays & Hotels</h3>
      <div className='mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {hotels.map(h => (
          <div key={h.id} className='bg-white rounded overflow-hidden shadow-sm'>
            <img src={h.img} alt={h.name} className='w-full h-40 object-cover'/>
            <div className='p-3'>
              <h4 className='font-semibold'>{h.name}</h4>
              <p className='text-sm text-gray-600 mt-1'>{h.desc}</p>
              <div className='mt-3 flex items-center justify-between'><div className='font-bold'>{h.price}</div><a href='#booking' className='px-3 py-1 bg-blue-600 text-white rounded'>Book</a></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
