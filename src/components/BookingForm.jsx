import React, { useState } from 'react'
import { PHONE, EMAIL, ADDRESS } from '../config'

export default function BookingForm(){
  const [booking, setBooking] = useState({ name:'', phone:'', service:'Bike', item:'', date:'', duration:1 })

  function openWhatsApp(payload){
    const text = encodeURIComponent(`Hello Explorer Wheels!\nI would like to book: ${payload.service} - ${payload.item} \nDate: ${payload.date} \nDuration: ${payload.duration} days\nName: ${payload.name} \nPhone: ${payload.phone}`)
    const url = `https://wa.me/${PHONE.replace(/\D/g,'')}?text=${text}`
    window.open(url, '_blank')
  }

  function handleSubmit(e){
    e.preventDefault()
    openWhatsApp(booking)
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent('Booking request from website')}&body=${encodeURIComponent(JSON.stringify(booking, null, 2))}`
    window.open(mailto, '_blank')
    alert('Booking intent sent! (WhatsApp + email) — Replace PHONE and EMAIL in src/config.js with real values.')
    setBooking({ name:'', phone:'', service:'Bike', item:'', date:'', duration:1 })
  }

  return (
    <section id='booking' className='mt-14 grid md:grid-cols-2 gap-8' aria-label='Booking Section'>
      <div>
        <h3 className='text-2xl font-semibold'>Book Your Ride / Stay</h3>
        <p className='text-gray-600 mt-2'>Fill the form and we'll contact you on WhatsApp to confirm details.</p>
        <form onSubmit={handleSubmit} className='mt-4 bg-white p-4 rounded shadow-sm'>
          <div className='grid grid-cols-1 gap-3'>
            <input required className='border p-2 rounded' placeholder='Your name' value={booking.name} onChange={(e)=>setBooking({...booking,name:e.target.value})} />
            <input required className='border p-2 rounded' placeholder='Phone / WhatsApp' value={booking.phone} onChange={(e)=>setBooking({...booking,phone:e.target.value})} />
            <select className='border p-2 rounded' value={booking.service} onChange={(e)=>setBooking({...booking,service:e.target.value})}><option>Bike</option><option>Car</option><option>Taxi</option><option>Hotel</option><option>Camping Kit</option></select>
            <input className='border p-2 rounded' placeholder='Which model / package? (optional)' value={booking.item} onChange={(e)=>setBooking({...booking,item:e.target.value})} />
            <input type='date' className='border p-2 rounded' value={booking.date} onChange={(e)=>setBooking({...booking,date:e.target.value})} />
            <input type='number' min='1' className='border p-2 rounded' value={booking.duration} onChange={(e)=>setBooking({...booking,duration:e.target.value})} />
            <div className='flex gap-2'><button type='submit' className='px-4 py-2 bg-green-600 text-white rounded'>Send via WhatsApp</button><a href={`mailto:${EMAIL}`} className='px-4 py-2 bg-gray-200 rounded'>Email</a></div>
          </div>
        </form>
        <div id='contact' className='mt-6 text-sm text-gray-600'><p><strong>Phone:</strong> {PHONE}</p><p><strong>Email:</strong> {EMAIL}</p><p><strong>Address:</strong> {ADDRESS}</p></div>
      </div>
      <div>
        <h3 className='text-2xl font-semibold'>Why Explorer Wheels?</h3>
        <ul className='mt-3 list-disc list-inside text-gray-600'><li>Locally curated vehicles & stays</li><li>Transparent pricing</li><li>Safety kits & 24/7 support</li><li>Easy WhatsApp booking</li></ul>
        <div className='mt-6 bg-white p-4 rounded shadow-sm'><h4 className='font-semibold'>Safety & Documents</h4><p className='text-sm text-gray-600 mt-2'>Valid driving license and ID required for self-drive rentals. Security deposit applies.</p></div>
      </div>
    </section>
  )
}
