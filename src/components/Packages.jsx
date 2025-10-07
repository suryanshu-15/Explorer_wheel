import React from 'react'

export default function Packages(){
  return (
    <section id='packages' className='mb-12'>
      <h3 className='text-2xl font-semibold'>Popular Packages</h3>
      <div className='mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white p-4 rounded shadow-sm'><h4 className='font-semibold'>Bike + Stay (1 Night)</h4><p className='text-sm text-gray-600 mt-2'>Bike rental plus a budget stay.</p><div className='mt-3 flex items-center justify-between'><div className='font-bold'>₹1599</div><a href='#booking' className='px-3 py-1 bg-blue-600 text-white rounded'>Book</a></div></div>
        <div className='bg-white p-4 rounded shadow-sm'><h4 className='font-semibold'>Car + Camping Kit</h4><p className='text-sm text-gray-600 mt-2'>Car rental plus camping kit for 2 days.</p><div className='mt-3 flex items-center justify-between'><div className='font-bold'>₹2499</div><a href='#booking' className='px-3 py-1 bg-blue-600 text-white rounded'>Book</a></div></div>
        <div className='bg-white p-4 rounded shadow-sm'><h4 className='font-semibold'>Taxi Tour (3 places)</h4><p className='text-sm text-gray-600 mt-2'>Full-day taxi package with driver.</p><div className='mt-3 flex items-center justify-between'><div className='font-bold'>₹1999</div><a href='#booking' className='px-3 py-1 bg-blue-600 text-white rounded'>Book</a></div></div>
      </div>
    </section>
  )
}
