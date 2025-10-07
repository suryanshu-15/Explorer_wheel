import React from 'react'
import { PHONE, EMAIL } from '../config'

export default function Footer(){
  return (
    <footer className='mt-14 py-8 text-sm text-gray-600'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto px-4'>
        <div>© {new Date().getFullYear()} Explorer Wheels — Koraput. All rights reserved.</div>
        <div className='flex gap-4 items-center'><a href={`https://wa.me/${PHONE.replace(/\D/g,'')}`} target='_blank' rel='noreferrer' className='px-3 py-1 bg-green-500 text-white rounded'>WhatsApp</a><a href={`mailto:${EMAIL}`} className='px-3 py-1 bg-gray-200 rounded'>Email</a></div>
      </div>
    </footer>
  )
}
