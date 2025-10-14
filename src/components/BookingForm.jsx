import React, { useState, useEffect } from 'react'
import { PHONE, EMAIL, ADDRESS } from '../config'

// Sample data
const bikes = [
  'Hero Splendor', 'Hero Passion Pro', 'Honda Livo', 'Honda Shine',
  'Hero CBZ', 'Hero Xtreme', 'Yamaha FZS', 'TVS Apache 160', 'Honda Hornet',
  'Royal Enfield Hunter 350', 'Royal Enfield Classic 350', 'Royal Enfield Meteor 350',
  'Benelli Imperiale 400', 'Honda Dio', 'Honda Activa', 'Yamaha Fascino 125 Fi',
  'Suzuki Access 125', 'TVS Ntorq 125'
]

const cars = [
  'Toyota Innova', 'Maruti Swift', 'Hyundai Creta'
]

const taxis = [
  'Sedan Taxi', 'SUV Taxi', 'Tempo Traveller', 'Mini Bus'
]

const hotels = [
  'Explorer Stay Bhubaneswar', 'Nature Retreat Koraput', 'Hill View Lodge Deomali'
]

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
    duration: '—'
  })

  const [error, setError] = useState('')
  const [modelOptions, setModelOptions] = useState([])

  // Automatically update model options based on selected service
  useEffect(() => {
    if (booking.service === 'Bike') setModelOptions(bikes)
    else if (booking.service === 'Car') setModelOptions(cars)
    else if (booking.service === 'Taxi') setModelOptions(taxis)
    else if (booking.service === 'Hotel') setModelOptions(hotels)
    else setModelOptions([])
    setBooking(prev => ({ ...prev, item: '' }))
  }, [booking.service])

  // Auto calculate duration
  useEffect(() => {
    if (booking.fromDate && booking.fromTime && booking.toDate && booking.toTime) {
      const from = new Date(`${booking.fromDate}T${booking.fromTime}`)
      const to = new Date(`${booking.toDate}T${booking.toTime}`)
      const diffMs = to - from
      if (diffMs > 0) {
        const totalHours = diffMs / (1000 * 60 * 60)
        const days = Math.floor(totalHours / 24)
        const hours = Math.ceil(totalHours % 24)
        setBooking(prev => ({ ...prev, duration: `${days} day(s) ${hours} hour(s)` }))
      } else {
        setBooking(prev => ({ ...prev, duration: '0 day(s) 0 hour(s)' }))
      }
    }
  }, [booking.fromDate, booking.fromTime, booking.toDate, booking.toTime])

  function openWhatsApp(payload) {
    const text = encodeURIComponent(
      `Hello Explorer Wheels!\nI would like to book: ${payload.service} - ${payload.item}\nFrom: ${payload.fromDate} ${payload.fromTime}\nTo: ${payload.toDate} ${payload.toTime}\nDuration: ${payload.duration}\nName: ${payload.name}\nPhone: ${payload.phone}`
    )
    const url = `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${text}`
    window.open(url, '_blank')
  }

  function handleSubmit(e) {
    e.preventDefault()
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
  }

  return (
    <section id='booking' className='mt-14 grid md:grid-cols-2 gap-8'>
      <div>
        <h3 className='text-2xl font-semibold'>Book Your Ride / Stay</h3>
        <p className='text-gray-600 mt-2'>Fill the form and we’ll reach out on WhatsApp.</p>

        <form onSubmit={handleSubmit} className='mt-4 bg-white p-4 rounded-2xl shadow-md border border-gray-100'>
          {error && <p className='text-red-600 mb-2'>{error}</p>}

          <div className='grid grid-cols-1 gap-3'>
            <input
              required
              className='border p-2 rounded-lg'
              placeholder='Your Name'
              value={booking.name}
              onChange={(e) => setBooking({ ...booking, name: e.target.value })}
            />
            <input
              required
              className='border p-2 rounded-lg'
              placeholder='Phone / WhatsApp Number'
              value={booking.phone}
              onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
            />

            <select
              className='border p-2 rounded-lg'
              value={booking.service}
              onChange={(e) => setBooking({ ...booking, service: e.target.value })}
            >
              <option>Bike</option>
              <option>Car</option>
              <option>Taxi</option>
              <option>Hotel</option>
              <option>Camping Kit</option>
            </select>

            {modelOptions.length > 0 && (
              <select
                className='border p-2 rounded-lg'
                value={booking.item}
                onChange={(e) => setBooking({ ...booking, item: e.target.value })}
              >
                <option value=''>Select {booking.service} Model</option>
                {modelOptions.map((m, i) => (
                  <option key={i}>{m}</option>
                ))}
              </select>
            )}

            {/* From and To datetime */}
            <div className='flex flex-col sm:flex-row gap-3'>
              <div className='flex-1'>
                <label className='text-sm text-gray-600'>From</label>
                <div className='flex gap-2'>
                  <input
                    type='date'
                    className='border p-2 rounded-lg flex-1'
                    value={booking.fromDate}
                    onChange={(e) => setBooking({ ...booking, fromDate: e.target.value })}
                  />
                  <input
                    type='time'
                    className='border p-2 rounded-lg w-24'
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
                    className='border p-2 rounded-lg flex-1'
                    value={booking.toDate}
                    onChange={(e) => setBooking({ ...booking, toDate: e.target.value })}
                  />
                  <input
                    type='time'
                    className='border p-2 rounded-lg w-24'
                    value={booking.toTime}
                    onChange={(e) => setBooking({ ...booking, toTime: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className='mt-2 text-gray-700'>
              <strong>Duration:</strong> {booking.duration}
            </div>

            <button type='submit' className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'>
              Send via WhatsApp
            </button>
          </div>
        </form>

        <div className='mt-6 text-sm text-gray-600'>
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
      </div>
    </section>
  )
}
