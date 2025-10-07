import React from 'react'

export default function Admin(){
  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <div className='max-w-4xl mx-auto bg-white p-6 rounded shadow'>
        <h2 className='text-2xl font-semibold mb-4'>Explorer Wheels — Admin</h2>
        <p className='text-sm text-gray-600'>This is a placeholder admin page. When you configure Firebase (instructions in README.md) booking entries will appear here. For now, you can view bookings saved locally (if any).</p>
        <p className='mt-4 text-gray-500'>To secure this admin route in production, enable Firebase Auth and restrict access to administrators only.</p>
      </div>
    </div>
  )
}
