import React, { useState, useEffect } from 'react'
import { PHONE, EMAIL, ADDRESS } from '../config'

export default function BookingForm() {
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    service: 'Bike',
    item: '',
    fromDate: '',
    fromTime: '',
    toDate: '',
    toTime: '',
    duration: 1
  })

  const [error, setError] = useState('')

  // Automatically calculate duration based on from & to datetime
  useEffect(() => {
  if (booking.fromDate && booking.fromTime && booking.toDate && booking.toTime) {
    const from = new Date(`${booking.fromDate}T${booking.fromTime}`)
    const to = new Date(`${booking.toDate}T${booking.toTime}`)
    const diffMs = to - from; // difference in milliseconds
    console.log(diffMs)
    if (diffMs > 0) {
      const totalHours = diffMs / (1000 * 60 * 60)
      const days = Math.floor(totalHours / 24)
      const hours = Math.ceil(totalHours % 24)
      setBooking(prev => ({ ...prev, duration: `${days} day(s) ${hours} hour(s)` }))
    } else {
      setBooking(prev => ({ ...prev, duration: '0 day(s) 0 hour(s)' }))
    }
    console.log(booking.duration)
  }
}, [booking.fromDate, booking.fromTime, booking.toDate, booking.toTime])


  function openWhatsApp(payload) {
    const text = encodeURIComponent(
      `Hello Explorer Wheels!\nI would like to book: ${payload.service} - ${payload.item}\nFrom: ${payload.fromDate} ${payload.fromTime}\nTo: ${payload.toDate} ${payload.toTime}\nDuration: ${payload.duration} days\nName: ${payload.name}\nPhone: ${payload.phone}`
    )
    const url = `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${text}`
    window.open(url, '_blank')
  }

  function handleSubmit(e) {
    e.preventDefault()

    // Validation
    if (!booking.name || !booking.phone) {
      setError('Name and phone are required.')
      return
    }
    if (!booking.fromDate || !booking.toDate || !booking.fromTime || !booking.toTime) {
      setError('Please select both From and To date & time.')
      return
    }
    const from = new Date(`${booking.fromDate}T${booking.fromTime}`)
    const to = new Date(`${booking.toDate}T${booking.toTime}`)
    if (from > to) {
      setError('From datetime cannot be after To datetime.')
      return
    }

    setError('')
    openWhatsApp(booking)

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      'Booking request from website'
    )}&body=${encodeURIComponent(JSON.stringify(booking, null, 2))}`
    window.open(mailto, '_blank')

    alert('Booking intent sent! (WhatsApp + email) — Replace PHONE and EMAIL in src/config.js with real values.')

    // Reset form
    setBooking({
      name: '',
      phone: '',
      service: 'Bike',
      item: '',
      fromDate: '',
      fromTime: '',
      toDate: '',
      toTime: '',
      duration: 1
    })
  }

  return (
    <section id='booking' className='mt-14 grid md:grid-cols-2 gap-8' aria-label='Booking Section'>
      <div>
        <h3 className='text-2xl font-semibold'>Book Your Ride / Stay</h3>
        <p className='text-gray-600 mt-2'>Fill the form and we'll contact you on WhatsApp to confirm details.</p>

        <form onSubmit={handleSubmit} className='mt-4 bg-white p-4 rounded shadow-sm'>
          {error && <p className='text-red-600 mb-2'>{error}</p>}
          <div className='grid grid-cols-1 gap-3'>
            <input
              required
              className='border p-2 rounded'
              placeholder='Your name'
              value={booking.name}
              onChange={(e) => setBooking({ ...booking, name: e.target.value })}
            />
            <input
              required
              className='border p-2 rounded'
              placeholder='Phone / WhatsApp'
              value={booking.phone}
              onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
            />
            <select
              className='border p-2 rounded'
              value={booking.service}
              onChange={(e) => setBooking({ ...booking, service: e.target.value })}
            >
              <option>Bike</option>
              <option>Car</option>
              <option>Taxi</option>
              <option>Hotel</option>
              <option>Camping Kit</option>
            </select>
            <input
              className='border p-2 rounded'
              placeholder='Which model / package? (optional)'
              value={booking.item}
              onChange={(e) => setBooking({ ...booking, item: e.target.value })}
            />

            {/* From and To datetime in single line */}
            <div className='flex gap-2'>
              <div className='flex-1'>
                <label className='text-sm text-gray-600'>From</label>
                <div className='flex gap-2'>
                  <input
                    type='date'
                    className='border p-2 rounded flex-1'
                    value={booking.fromDate}
                    onChange={(e) => setBooking({ ...booking, fromDate: e.target.value })}
                  />
                  <input
                    type='time'
                    className='border p-2 rounded w-24'
                    value={booking.fromTime}
                    onChange={(e) => setBooking({ ...booking, fromTime: e.target.value })}
                  />
                </div>
              </div>

              <div className='flex-1'>
                <label className='text-sm text-gray-600'>To</label>
                <div className='flex gap-2'>
                  <input
                    type='date'
                    className='border p-2 rounded flex-1'
                    value={booking.toDate}
                    onChange={(e) => setBooking({ ...booking, toDate: e.target.value })}
                  />
                  <input
                    type='time'
                    className='border p-2 rounded w-24'
                    value={booking.toTime}
                    onChange={(e) => setBooking({ ...booking, toTime: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className='mt-2 text-gray-700'>
  <strong>Duration:</strong>{' '}
  {booking.fromDate && booking.fromTime && booking.toDate && booking.toTime
    ? booking.duration
    : '—'}
</div>

            <div className='flex gap-2'>
              <button type='submit' className='px-4 py-2 bg-green-600 text-white rounded'>
                Send via WhatsApp
              </button>
              <a href={`mailto:${EMAIL}`} className='px-4 py-2 bg-gray-200 rounded'>
                Email
              </a>
            </div>
          </div>
        </form>

        <div id='contact' className='mt-6 text-sm text-gray-600'>
          <p><strong>Phone:</strong> {PHONE}</p>
          <p><strong>Email:</strong> {EMAIL}</p>
          <p><strong>Address:</strong> {ADDRESS}</p>
        </div>
      </div>

      <div>
        <h3 className='text-2xl font-semibold'>Why Explorer Wheels?</h3>
        <ul className='mt-3 list-disc list-inside text-gray-600'>
          <li>Locally curated vehicles & stays</li>
          <li>Transparent pricing</li>
          <li>Safety kits & 24/7 support</li>
          <li>Easy WhatsApp booking</li>
        </ul>
        <div className='mt-6 bg-white p-4 rounded shadow-sm'>
          <h4 className='font-semibold'>Safety & Documents</h4>
          <p className='text-sm text-gray-600 mt-2'>
            Valid driving license and ID required for self-drive rentals. Security deposit applies.
          </p>
        </div>
      </div>
    </section>
  )
}
