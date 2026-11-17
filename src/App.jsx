import React, { useState } from 'react';
import Home from './pages/Home';
import Staff from './pages/Staff';
import Children from './pages/Children';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isStaffLoggedIn, setIsStaffLoggedIn] = useState(false);
  const [currentStaff, setCurrentStaff] = useState(null);
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3500);
  };

  const handleStaffLogin = (staffMember) => {
    setIsStaffLoggedIn(true);
    setCurrentStaff(staffMember);
    setActiveTab('children');
    showToast(`Logged in as ${staffMember.name} — Children's Register Unlocked`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStaffLogout = () => {
    setIsStaffLoggedIn(false);
    setCurrentStaff(null);
    showToast('Logged out of Staff Register');
  };

  const navigateTo = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'staff', label: 'Staff' },
    { id: 'children', label: 'Children' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-paperWhite text-forest-900">
      {/* Retro Marquee Banner */}
      <div className="bg-electricPink text-forest-950 font-syne font-bold text-xs uppercase tracking-wider py-2 border-b-2 border-forest-900 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex space-x-8">
          <span>✦ NUTRITION TRACKER FOR SHANTI DEVI SHIKSHA SAMITI (SDSS) — NEW DELHI</span>
          <span>✦ TEAM COMMUNITY SPARK • ANISHA & SAATHI</span>
          <span>✦ UN SDG 2: ZERO HUNGER & SDG 3: GOOD HEALTH</span>
          <span>✦ STRICT WHO PEDIATRIC GROWTH MONITORING</span>
          <span>✦ NUTRITION TRACKER FOR SHANTI DEVI SHIKSHA SAMITI (SDSS) — NEW DELHI</span>
          <span>✦ TEAM COMMUNITY SPARK • ANISHA & SAATHI</span>
        </div>
      </div>

      {/* Primary Header */}
      <header className="bg-forest-900 text-paperWhite sticky top-0 z-40 border-b-4 border-forest-950 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <div
            onClick={() => navigateTo('home')}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-12 h-12 bg-sproutGreen text-forest-950 rounded-2xl flex items-center justify-center font-syne text-2xl font-extrabold retro-border">
              <i className="fa-solid fa-seedling"></i>
            </div>
            <div>
              <h1 className="font-syne text-xl font-extrabold tracking-tight leading-none text-paperWhite">
                Community Spark
              </h1>
              <p className="text-xs text-sproutGreen font-medium mt-1">
                SDSS Child Growth & Nutrition Engine
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-syne font-bold">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`py-2 px-4 rounded-full border-2 transition ${
                  activeTab === item.id
                    ? 'bg-electricPink text-forest-950 border-forest-950 shadow-[2px_2px_0px_#12271f]'
                    : 'border-transparent text-paperWhite hover:text-sproutGreen'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 bg-forest-900 text-paperWhite px-5 py-3.5 rounded-2xl retro-border-green z-50 flex items-center space-x-3">
          <i className="fa-solid fa-circle-check text-sproutGreen text-lg"></i>
          <span className="text-xs font-bold font-syne">{toastMsg}</span>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
        {activeTab === 'home' && <Home onNavigate={navigateTo} />}
        {activeTab === 'staff' && (
          <Staff
            isStaffLoggedIn={isStaffLoggedIn}
            currentStaff={currentStaff}
            onStaffLogin={handleStaffLogin}
            onStaffLogout={handleStaffLogout}
            onNavigate={navigateTo}
          />
        )}
        {activeTab === 'children' && (
          <Children
            isStaffLoggedIn={isStaffLoggedIn}
            currentStaff={currentStaff}
            onStaffLogin={handleStaffLogin}
            showToast={showToast}
          />
        )}
        {activeTab === 'about' && <AboutUs onNavigate={navigateTo} />}
        {activeTab === 'contact' && <Contact showToast={showToast} />}
      </main>

      {/* Footer */}
      <footer className="bg-forest-950 text-paperWhite border-t-4 border-forest-900 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-sproutGreen rounded-md text-forest-950 font-syne font-extrabold flex items-center justify-center text-xs">
              <i className="fa-solid fa-seedling"></i>
            </div>
            <p className="font-syne text-sm font-bold">
              Digital Child Nutrition & Growth Tracker
            </p>
          </div>
          <p className="text-xs text-softMint/75">
            Shanti Devi Shiksha Samiti (Jeevan Park, Uttam Nagar, New Delhi - 110059) × Team Community Spark
          </p>
        </div>
      </footer>
    </div>
  );
}
