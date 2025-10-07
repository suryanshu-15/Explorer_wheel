import React from 'react'

export default function Testimonials(){
  return (
    <section className='mt-14'>
      <h3 className='text-2xl font-semibold'>What Travelers Say</h3>
      <div className='mt-6 grid sm:grid-cols-2 gap-6'>
        <div className='p-4 bg-white rounded shadow-sm'><p className='text-sm'>"Great service and well-maintained bikes — Deomali sunrise trip was unforgettable!"</p><p className='mt-3 text-xs text-gray-500'>— Ananya</p></div>
        <div className='p-4 bg-white rounded shadow-sm'><p className='text-sm'>"Explorer Wheels made planning easy. The camping kit had everything we needed."</p><p className='mt-3 text-xs text-gray-500'>— Rohit</p></div>
      </div>
    </section>
  )
}
