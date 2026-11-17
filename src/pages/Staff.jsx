import React, { useState } from 'react';
import { staffMembers } from '../data/mockData';

export default function Staff({ isStaffLoggedIn, currentStaff, onStaffLogin, onStaffLogout, onNavigate }) {
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setError('Please enter your staff PIN (any demo PIN like 1234 works).');
      return;
    }
    onStaffLogin(selectedStaff);
    setSelectedStaff(null);
    setPasscode('');
    setError('');
  };

  return (
    <div className="space-y-10">
      {/* Header Banner */}
      <div className="bg-softMint p-8 rounded-3xl retro-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-2">
          <span className="bg-sproutGreen text-forest-950 font-syne text-xs font-extrabold uppercase px-3.5 py-1 rounded-full border-2 border-forest-900">
            On-Ground Operations Team
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-forest-900">
            SDSS Caregivers, Cooks & Distributors
          </h2>
          <p className="text-xs sm:text-sm text-forest-800 font-medium max-w-2xl">
            Click on any staff member's portrait icon below to log into their caregiver profile and update daily student attendance, meals, and health checkups.
          </p>
        </div>

        {isStaffLoggedIn && currentStaff && (
          <div className="bg-paperWhite p-4 rounded-2xl retro-border-green space-y-2">
            <p className="text-xs font-syne font-extrabold text-forest-900">
              ✓ Active Session: {currentStaff.name}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('children')}
                className="bg-sproutGreen text-forest-950 font-syne font-bold text-xs px-3 py-1.5 rounded-xl border-2 border-forest-900"
              >
                Open Register →
              </button>
              <button
                onClick={onStaffLogout}
                className="bg-electricPink text-forest-950 font-syne font-bold text-xs px-3 py-1.5 rounded-xl border-2 border-forest-900"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Staff Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {staffMembers.map((member) => (
          <div
            key={member.id}
            className="bg-paperWhite p-7 rounded-3xl retro-border flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4 text-center">
              <span className={`${member.accent} text-forest-950 font-syne text-[11px] font-extrabold uppercase px-3.5 py-1 rounded-full border-2 border-forest-900 inline-block`}>
                {member.roleTag}
              </span>

              {/* Clickable Portrait Icon -> Redirects to Login Modal */}
              <button
                type="button"
                onClick={() => {
                  setSelectedStaff(member);
                  setError('');
                }}
                title={`Click to log in as ${member.name}`}
                className={`w-28 h-28 mx-auto rounded-full ${member.avatarBg} border-4 border-forest-900 flex flex-col items-center justify-center relative group cursor-pointer hover:scale-105 transition-transform shadow-md`}
              >
                <span className="font-syne text-3xl font-extrabold">{member.initials}</span>
                <span className="text-[10px] font-syne uppercase tracking-wider mt-0.5 opacity-90">
                  Tap to Login
                </span>
                <span className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-electricPink text-forest-950 border-2 border-forest-900 flex items-center justify-center text-xs">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </span>
              </button>

              <div>
                <h3 className="font-syne text-2xl font-extrabold text-forest-900">{member.name}</h3>
                <p className="text-xs font-syne font-bold text-forest-800 uppercase tracking-wide mt-0.5">
                  {member.designation}
                </p>
              </div>

              <p className="text-xs text-gray-700 leading-relaxed bg-softMint/50 p-4 rounded-2xl border border-forest-900/20">
                {member.note}
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedStaff(member);
                setError('');
              }}
              className="w-full bg-forest-900 text-paperWhite font-syne font-extrabold text-xs uppercase py-3 rounded-xl border-2 border-forest-950 hover:bg-electricPink hover:text-forest-950 transition"
            >
              Staff Profile Login
            </button>
          </div>
        ))}
      </div>

      {/* Staff Login Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 bg-forest-950/70 z-50 flex items-center justify-center p-4">
          <div className="bg-paperWhite max-w-md w-full p-7 rounded-3xl retro-border-pink space-y-5">
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-electricPink text-forest-950 font-syne text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-forest-900">
                  Staff Portal Authentication
                </span>
                <h3 className="font-syne text-2xl font-extrabold text-forest-900 mt-2">
                  Welcome, {selectedStaff.name}
                </h3>
                <p className="text-xs text-gray-600">{selectedStaff.designation}</p>
              </div>
              <button
                onClick={() => setSelectedStaff(null)}
                className="w-8 h-8 rounded-full bg-softMint border-2 border-forest-900 font-bold text-forest-900"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-syne font-bold text-forest-900 mb-1">
                  Staff ID
                </label>
                <input
                  type="text"
                  readOnly
                  value={`${selectedStaff.id.toUpperCase()} • SDSS-17A`}
                  className="w-full p-3 text-xs font-bold bg-softMint/60 rounded-xl border-2 border-forest-900 text-forest-900"
                />
              </div>

              <div>
                <label className="block text-xs font-syne font-bold text-forest-900 mb-1">
                  Enter Caregiver PIN (Demo: 1234)
                </label>
                <input
                  type="password"
                  placeholder="••••"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full p-3 text-sm font-bold rounded-xl border-2 border-forest-900 outline-none focus:border-electricPink"
                />
                {error && <p className="text-xs text-red-600 font-bold mt-1">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-sproutGreen text-forest-950 font-syne font-extrabold text-xs uppercase py-3.5 rounded-xl retro-border hover:bg-electricPink transition"
              >
                Unlock Children's Register →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}