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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2.5">
        {/* Brand Logo & Subtitle */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sproutGreen text-forest-950 flex items-center justify-center border-2 border-forest-950 shrink-0 group-hover:scale-105 transition-transform">
            <i className="fa-solid fa-seedling text-base sm:text-lg"></i>
          </div>
          <div className="min-w-0">
            <h1 className="font-syne text-base sm:text-xl font-extrabold tracking-tight leading-tight">
              Community Spark
            </h1>
            <p className="text-[10px] sm:text-xs text-sproutGreen font-medium leading-tight truncate">
              SDSS Child Growth &amp; Nutrition Engine
            </p>
          </div>
        </button>

        {/* Single-Row Navigation Strip on Mobile & Desktop */}
        <nav
          aria-label="Primary Navigation"
          className="flex items-center justify-between sm:justify-start md:justify-end gap-1 sm:gap-2 overflow-x-auto no-scrollbar pb-0.5 md:pb-0"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`whitespace-nowrap px-2.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full font-syne text-[11px] sm:text-sm font-extrabold transition-all cursor-pointer shrink-0 ${
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