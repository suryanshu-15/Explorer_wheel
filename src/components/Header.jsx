import React from 'react'
import { PHONE } from '../config'

export default function Header(){
  return (
    <header className='bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <img src='/logo.png' alt='Explorer Wheels Logo' className='h-10 w-10 object-contain' />
          <div>
            <h1 className='text-lg font-semibold'>Explorer Wheels</h1>
            <p className='text-xs text-gray-500'>Koraput • Rent • Ride • Stay • Camp</p>
          </div>
        </div>
        <nav className='hidden md:flex gap-6 items-center text-sm'>
          <a href='#services' className='hover:text-blue-600'>Services</a>
          <a href='#packages' className='hover:text-blue-600'>Packages</a>
          <a href='#destinations' className='hover:text-blue-600'>Destinations</a>
          <a href='#booking' className='hover:text-blue-600'>Booking</a>
          <a href='/admin' className='text-sm px-3 py-1 bg-blue-600 text-white rounded hidden'>Admin</a>
        </nav>
        <div className='md:hidden'>
          <a href={`https://wa.me/${PHONE.replace(/\D/g,'')}`} target='_blank' rel='noreferrer' className='text-sm px-3 py-1 bg-green-500 text-white rounded'>WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
