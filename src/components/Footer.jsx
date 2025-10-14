import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-14 py-6 text-sm text-gray-600 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        © {new Date().getFullYear()} Explorer Wheels — Koraput. All rights reserved.
      </div>
    </footer>
  )
}
