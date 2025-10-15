import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      message: "Great service and well-maintained bikes — Deomali sunrise trip was unforgettable!",
      name: "Ananya",
    },
    {
      message: "Explorer Wheels made planning easy. The camping kit had everything we needed.",
      name: "Rohit",
    },
    {
      message: "Loved the convenience! Booked a car for weekend travel, it was clean and on time.",
      name: "Priya",
    },
    {
      message: "Affordable rates and friendly staff. My first trip to Koraput was smooth and fun!",
      name: "Satyam",
    },
    {
      message: "Rented a scooter for local sightseeing — quick pickup, no hassle at all!",
      name: "Neha",
    },
    {
      message: "We booked a taxi for family trip. Driver was polite and knowledgeable about places.",
      name: "Amit",
    },
    {
      message: "Hotel booking and bike combo was perfect! Excellent coordination by the team.",
      name: "Rakesh",
    },
    {
      message: "Very reliable service — Explorer Wheels is my go-to for all travel needs in Odisha.",
      name: "Sneha",
    },
  ];

  return (
    <section className='mt-14 text-center'>
      <h3 className='text-2xl font-semibold'>What Travelers Say</h3>

      <div className='mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left'>
        {testimonials.map((t, index) => (
          <div
            key={index}
            className='p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300'
          >
            <p className='text-sm text-gray-700'>" {t.message} "</p>
            <p className='mt-3 text-xs text-gray-500'>— {t.name}</p>
          </div>
        ))}
      </div>

      {/* Google Review Button */}
      <div className='mt-10'>
        <a
          href='https://g.page/r/CWo1VcDtIKBKEBM/review'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'
        >
           Share Your Experience on Google
        </a>
        <p className='mt-2 text-sm text-gray-500'>
          Your feedback helps us grow and serve you better.
        </p>
      </div>
    </section>
  );
}
