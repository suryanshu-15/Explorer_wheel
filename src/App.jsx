import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Packages from './components/Packages'
import Destinations from './components/Destinations'
import Hotels from './components/Hotels'
import BookingForm from './components/BookingForm'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Gallery from './components/Gallary'
import AdminDashboard from './components/AdminDashboard'; 


export default function App(){
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800'>
      <Header/>
      <Hero/>
      <main className='max-w-7xl mx-auto px-4 py-8'>
        <Services/>
        <Gallery/>
        <Fleet/>
        {/* <Packages   /> */}
        <Destinations/>
        <Hotels/>
        <BookingForm/>
        <Testimonials/>
      </main>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}
