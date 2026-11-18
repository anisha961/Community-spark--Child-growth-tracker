import React from 'react';

export default function Navbar({ activeTab, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'staff', label: 'Staff' },
    { id: 'children', label: 'Children' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-forest-900 text-paperWhite border-b-3 border-forest-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Brand Logo & Subtitle */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-sproutGreen text-forest-950 flex items-center justify-center border-2 border-forest-950 shrink-0 group-hover:scale-105 transition-transform">
            <i className="fa-solid fa-seedling text-lg"></i>
          </div>
          <div className="min-w-0">
            <h1 className="font-syne text-lg sm:text-xl font-extrabold tracking-tight leading-none truncate">
              Community Spark
            </h1>
            <p className="text-[11px] sm:text-xs text-sproutGreen font-medium mt-0.5 truncate">
              SDSS Child Growth &amp; Nutrition Engine
            </p>
          </div>
        </button>

        {/* Responsive Navigation Pills */}
        <nav
          aria-label="Primary Navigation"
          className="flex flex-wrap items-center justify-start md:justify-end gap-1.5 sm:gap-2"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 py-2 sm:px-4 sm:py-1.5 rounded-full font-syne text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
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
      </div>
    </header>
  );
}