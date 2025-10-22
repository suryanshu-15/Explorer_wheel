import React, { useState } from 'react'

const hotels = [
  {
    id: 1,
    name: 'Hotel Alishan',
    desc: 'Experience comfort and elegance with top-class facilities and mountain views.',
    img: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqVohNl2u37-MIpj_uH3wChkjwHyLy-BAPshFIRLnU2o4r2wRHCOKP5T76enOI6SKER5WEQCpb0fRqAHThWbIxgt8qyWa2KxIkCqhuXtV6YFPj7SKx9NNPhM0keIz1aDXZ3A590gO_ql8U=s680-w680-h510-rw',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrQq2AiQlzCcS8gV_BMVUOrUawf8FuHBPTWeV_0Tz7YJPSFHCeU3CkMA5ibkJGLMiT4raEe95dcBImzZ11dzBGChIe7kszC2rPGVj37FlMdKIqKF8FClRN7lnUUIcsj1J9xbyHM3Q=s680-w680-h510-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrsAmmuv_0FVZFyVTAPMuTuOP1tf21yvH-gSSC7RUV7ybGcYP3M59BHrXbSwtGoamcW9wWdXw80o00rDzDCaCCIOYI6hDoA24stDB7MKwNql6Ghzl9IKtL6kTxFqWHOp7Qc4OxiaHz2C54w=s680-w680-h510-rw',
      'https://content.jdmagicbox.com/v2/comp/koraput/d9/9999p6852.6852.170128111642.h1d9/catalogue/hotel-alishan-manabar-koraput-restaurants-9xgd63vrsj-250.jpg'
    ],
    price: 'Starting from ₹,1500 / night'
  },
  {
    id: 2,
    name: 'Hotel Shree Krishna',
    desc: 'A peaceful retreat offering a blend of luxury and tradition.',
    img: 'https://content.jdmagicbox.com/v2/comp/koraput/g2/9999p6852.6852.250110124522.f3g2/catalogue/hotel-sri-krishna-koraput-hotels-cqrq7kiefl-250.jpg',
    images: [
      'https://gos3.ibcdn.com/d4fec3e9-489f-43ab-825b-db151277e652.jpg',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    price: 'Starting from ₹1,300 / night'
  },
  {
    id: 3,
    name: 'Krishna Dormitory',
    desc: 'Affordable, cozy, and perfect for backpackers and family stays.',
    img: 'https://r1imghtlak.mmtcdn.com/4059823a-44ef-4b79-84ba-7c3196e093ee.jpg',
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipOSSczCxNlMMJQhsRhflaCSS9DdjmN9XqzQ7jXb=s680-w680-h510-rw',
      'https://lh3.googleusercontent.com/p/AF1QipPhL0VaEzhSE1WHAH9SczNH3UYwluUlOX7i3Wym=s680-w680-h510-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrCQqXm6xFmCsk_ChzixFEPY6Ob_XZdiz1WuKtLCf7Bc9i4Ht1swaumnztfn5uEgcW2eP6oCKpwBtzzAxfB7DGG8U_sfiypXyMSANoYnWdvJE_OiVWhp2UrdRx5ztmfqiJIJ3fWcw=s680-w680-h510-rw'
    ],
    price: 'Starting from ₹200 / night'
  },
  {
    id: 4,
    name: 'Hotel Mount Heaven',
    desc: 'Nestled in the hills, offering serene ambiance and nature views.',
    img: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no1wqswtUYMFw5xohSDcJaDMiLsnCHzv_bCiwRA2rgu8Bq6Vcdhm6HpQjAF8JDjoBr5jvXq1qBfvvnPbC2KG2is76w2EkkE-j_djZSRB_MVL0taMA-GiJZKf58J-PD5l1uWrOZ7iFfsCaOj=s680-w680-h510-rw',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqQfal-FSOywjsPwsdALTt4CVu2PH0KKSA_5fNS_uIcQvcczBANewvIud5vWabaA_LmF1U8_MZMmu_5Y3U45O-6UCIoony301pSnLlRRWwIV0pitsNheMz0ACA4BoSiEFXEOL-2tw=s680-w680-h510-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqoRx-IBYE1psXAyuUgdPw48BdU7Cla56Kvxjdz9y3beYqwLhQQLAh2F9pmdalWW4S0Gc5RbxAIat8LYk_VsO7yLhmsq-sdSzTzQsjKn1I_fFwe7tytRoxB3e3ZqLtwt4YWxAI=s680-w680-h510-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrb8mAMN1dlXVWBWak_EWDCHW6zHQcexqtdjaKkfgwvk9C8M5JwWy7n2SFD20n_uqIZw_b8JshfNEI8F9LMzSc7MiIDk60yvLxzlzF4bfzVeT-3hVtwBzGTqLFD6BJ8rB6TP65A=s680-w680-h510-rw'
    ],
    price: 'Satarting from ₹1,200 / night'
  },
    {id: 5,
    name: 'Krishna Homestay',
    desc: 'Affordable, cozy, and perfect for backpackers and family stays.',
    img: 'https://r1imghtlak.mmtcdn.com/4059823a-44ef-4b79-84ba-7c3196e093ee.jpg',
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipOSSczCxNlMMJQhsRhflaCSS9DdjmN9XqzQ7jXb=s680-w680-h510-rw',
      'https://lh3.googleusercontent.com/p/AF1QipPhL0VaEzhSE1WHAH9SczNH3UYwluUlOX7i3Wym=s680-w680-h510-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrCQqXm6xFmCsk_ChzixFEPY6Ob_XZdiz1WuKtLCf7Bc9i4Ht1swaumnztfn5uEgcW2eP6oCKpwBtzzAxfB7DGG8U_sfiypXyMSANoYnWdvJE_OiVWhp2UrdRx5ztmfqiJIJ3fWcw=s680-w680-h510-rw'
    ],
    price: 'Starting from ₹1800 / night'
  },
]

export default function Hotels() {
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show Thank You popup
    setShowThankYou(true)
  }

  const handleGoHome = () => {
    // Reset everything
    setShowThankYou(false)
    setShowForm(false)
    setSelectedHotel(null)
    setFormData({ name: '', email: '', checkIn: '', checkOut: '', guests: 1 })
  }

  return (
    <section id="hotels" className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-800">Stays & Hotels</h3>

      {/* Hotel List */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((h) => (
          <div
            key={h.id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={h.img}
              alt={h.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg">{h.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{h.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="font-bold text-gray-800">{h.price}</div>
                <button
                  onClick={() => {
                    setSelectedHotel(h)
                    setShowForm(false)
                  }}
                  className="px-3 py-1 bg-slate-900 text-white rounded hover:bg-slate-700"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedHotel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-2 right-3 text-2xl text-gray-700"
              onClick={() => setSelectedHotel(null)}
            >
              ✕
            </button>

            {/* Images */}
            <div className="grid grid-cols-3 gap-2 p-3">
              {selectedHotel.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedHotel.name} ${i + 1}`}
                  className="rounded-lg object-cover w-full h-32"
                />
              ))}
            </div>

            {/* Info */}
            <div className="p-5 border-t">
              <h4 className="text-xl font-semibold mb-2">{selectedHotel.name}</h4>
              <p className="text-gray-600 mb-3">{selectedHotel.desc}</p>

              {!showForm ? (
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
                >
                  Book Now
                </button>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="number"
                    name="guests"
                    min="1"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                    className="border p-2 rounded w-full"
                    placeholder="Guests"
                  />
                  <button
                    type="submit"
                    className="sm:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  >
                    Confirm Booking
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              🎉 Thank You!
            </h2>
            <p className="text-gray-700 mb-4">
              Your booking request for <strong>{selectedHotel?.name}</strong> has been received.  
              We’ll get back to you shortly!
            </p>
            <button
              onClick={handleGoHome}
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
              Go Home
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
