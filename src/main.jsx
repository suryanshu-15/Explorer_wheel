import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Admin from './pages/Admin'
import './index.css'
import AdminDashboard from './components/AdminDashboard.jsx'
import Login from './pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
