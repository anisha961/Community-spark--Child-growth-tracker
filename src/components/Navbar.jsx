import React, { useState } from 'react';

export default function Navbar({ activeTab, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'staff', label: 'Staff' },
    { id: 'children', label: 'Children' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSelect = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-forest-900 text-paperWhite border-b-3 border-forest-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
        {/* Brand Logo & Subtitle */}
        <button
          type="button"
          onClick={() => handleSelect('home')}
          className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group cursor-pointer min-w-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sproutGreen text-forest-950 flex items-center justify-center border-2 border-forest-950 shrink-0 group-hover:scale-105 transition-transform">
            <i className="fa-solid fa-seedling text-base sm:text-lg"></i>
          </div>
          <div className="min-w-0">
            <h1 className="font-syne text-base sm:text-xl font-extrabold tracking-tight leading-tight truncate">
              Community Spark
            </h1>
            <p className="text-[10px] sm:text-xs text-sproutGreen font-medium leading-tight truncate">
              SDSS Child Growth &amp; Nutrition Engine
            </p>
          </div>
        </button>

        {/* Desktop Single-Row Navigation (Hidden on Mobile) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-2 shrink-0"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full font-syne text-sm font-extrabold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-electricPink text-forest-950 border-2 border-forest-950 shadow-[2px_2px_0px_#0b1914]'
                    : 'text-paperWhite/90 hover:text-paperWhite hover:bg-forest-800 border-2 border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Three-Line SVG Hamburger Button (Always renders on mobile) */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          className="md:hidden w-10 h-10 rounded-xl bg-sproutGreen text-forest-950 border-2 border-forest-950 shadow-[2px_2px_0px_#0b1914] flex items-center justify-center shrink-0 cursor-pointer active:translate-y-0.5 transition-transform"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      
      {menuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-forest-950 border-t-2 border-forest-800 px-4 py-3 space-y-2"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-syne text-sm font-extrabold transition-all flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-electricPink text-forest-950 border-2 border-forest-900'
                    : 'bg-forest-900 text-paperWhite hover:bg-forest-800 border-2 border-forest-800'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span>→</span>}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}