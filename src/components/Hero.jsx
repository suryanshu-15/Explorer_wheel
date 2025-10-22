import React from 'react'

export default function Hero() {
  return (
    <div className='relative mb-12'>
      <div className='relative h-72 md:h-96 overflow-hidden'>

        {/* Video background */}
        <video
          className="w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay + content */}
        <div className='absolute inset-0 bg-black/25 flex items-center justify-center rounded-lg'>
          <div className='max-w-6xl mx-auto px-6 text-center text-white'>
            <h2 className='text-3xl md:text-5xl font-extrabold'>
              Explore Koraput — Your Way
            </h2>
            <p className='mt-3 max-w-2xl mx-auto'>
              Self-drive bikes & cars, taxi packages, stays, and camping kits. Adventure-ready vehicles and curated local tours.
            </p>
            <div className='mt-6 flex gap-3 justify-center'>
              <a
                href='#booking'
                className='px-4 py-2 bg-slate-900 hover:bg-slate-700 transition text-white rounded shadow transition-transform transform active:scale-95'
              >
                Book Now
              </a>
              <a
                href='#packages'
                className='px-4 py-2 bg-transparent border border-white rounded transition-transform transform active:scale-95'
              >
                View Packages
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
