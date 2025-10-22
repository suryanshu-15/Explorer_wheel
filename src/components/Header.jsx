import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#services'); // default active

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Booking', href: '#booking' },
  ];

  const handleClick = (href, e) => {
    e.preventDefault(); // prevent default jump
    setActiveLink(href);
    setIsOpen(false); // close mobile menu on click

    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Explorer Wheels Logo" className="h-10 w-10 object-contain" />
          <div>
            <h1 className="text-lg font-semibold">Explorer Wheels</h1>
            <p className="text-xs text-gray-500">Koraput • Rent • Ride • Stay • Camp</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          {menuLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleClick(link.href, e)}
              className={`${
                activeLink === link.href
                  ? 'text-slate-600 font-semibold border-b-2 border-slate-600'
                  : 'text-gray-700 hover:text-slate-600'
              } transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-2 px-4 py-3">
            {menuLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`block ${
                    activeLink === link.href
                      ? 'text-slate-600 font-semibold'
                      : 'text-gray-700 hover:text-slate-600'
                  }`}
                  onClick={(e) => handleClick(link.href, e)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
