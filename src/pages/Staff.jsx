import React, { useState } from 'react';
import { staffMembers, initialChildren, pastCalendarLogs } from '../data/mockData';

export default function Staff({ childrenList, setChildrenList }) {
  const [localChildren, setLocalChildren] = useState(initialChildren);
  const activeChildren = childrenList || localChildren;
  const updateChildren = setChildrenList || setLocalChildren;

  const [loginTarget, setLoginTarget] = useState(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggedInStaff, setLoggedInStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState('2026-11-17');
  const [savedNotice, setSavedNotice] = useState(false);

  const openLoginModal = (member) => {
    setLoginTarget(member);
    setPasswordInput('');
    setLoginError('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!passwordInput.trim()) {
      setLoginError('Please enter any demo passcode (e.g., sdss123) to continue.');
      return;
    }
    setLoggedInStaff(loginTarget);
    setLoginTarget(null);
    setPasswordInput('');
    setLoginError('');
  };

  const toggleAttendance = (id, status) => {
    updateChildren((prev) =>
      prev.map((child) =>
        child.id === id ? { ...child, presentToday: status } : child
      )
    );
  };

  const toggleMeal = (id, mealKey) => {
    updateChildren((prev) =>
      prev.map((child) =>
        child.id === id
          ? {
              ...child,
              mealsToday: {
                ...child.mealsToday,
                [mealKey]: !child.mealsToday[mealKey],
              },
            }
          : child
      )
    );
  };

  const selectedLog = pastCalendarLogs[selectedDate];

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Original Top Green Banner */}
      <section className="bg-softMint/80 p-5 sm:p-8 rounded-2xl sm:rounded-3xl retro-border space-y-2">
        <span className="bg-sproutGreen text-forest-950 font-syne text-[10px] sm:text-xs font-extrabold uppercase px-3.5 py-1 rounded-xl border-2 border-forest-900 inline-block">
          On-Ground Operations Team
        </span>
        <h2 className="font-syne text-2xl sm:text-4xl font-extrabold text-forest-900 leading-tight">
          SDSS Caregivers, Cooks &amp; Distributors
        </h2>
        <p className="text-xs sm:text-sm text-forest-800 max-w-2xl">
          Click on any staff member&apos;s portrait icon below to log into their caregiver profile and update daily student attendance, meals, and health checkups.
        </p>
      </section>

      {/* Original 3 Staff Monogram Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {staffMembers.map((member) => {
          const isCurrentUser = loggedInStaff?.id === member.id;
          return (
            <div
              key={member.id}
              className="bg-paper-white p-6 rounded-3xl retro-border flex flex-col justify-between text-center space-y-5 hover:-translate-y-1 transition-transform"
            >
              <div className="space-y-4">
                <div>
                  <span
                    className={`${member.accent} text-forest-950 font-syne text-[10px] sm:text-[11px] font-extrabold uppercase px-3.5 py-1 rounded-xl border-2 border-forest-900 inline-block`}
                  >
                    {member.roleTag}
                  </span>
                </div>

                {/* Clickable Monogram Circle (SD / RV / MS + TAP TO LOGIN) */}
                <button
                  type="button"
                  onClick={() => openLoginModal(member)}
                  className={`w-24 h-24 mx-auto rounded-full ${member.avatarBg} border-3 border-forest-900 flex flex-col items-center justify-center relative shadow-[3px_3px_0px_#12271f] cursor-pointer group`}
                >
                  <span className="font-syne text-2xl font-extrabold leading-none">
                    {member.initials}
                  </span>
                  <span className="text-[8px] font-syne font-extrabold uppercase tracking-wider text-paperWhite/90 mt-1">
                    {isCurrentUser ? 'ACTIVE' : 'TAP TO LOGIN'}
                  </span>
                  <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-electricPink text-forest-950 border-2 border-forest-900 flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </span>
                </button>

                <div>
                  <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-forest-900">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-syne font-extrabold uppercase tracking-wider text-forest-800 mt-0.5">
                    {member.designation}
                  </p>
                </div>

                <div className="bg-softMint/60 p-4 rounded-2xl border border-forest-900/20 text-xs text-forest-900 leading-relaxed">
                  {member.note}
                </div>
              </div>

              <button
                type="button"
                onClick={() => openLoginModal(member)}
                className="w-full py-3 px-4 rounded-xl bg-forest-900 hover:bg-forest-800 text-paperWhite font-syne text-xs font-extrabold uppercase tracking-wider cursor-pointer transition-colors"
              >
                {isCurrentUser ? '✓ Logged In • Switch Profile' : 'Staff Profile Login'}
              </button>
            </div>
          );
        })}
      </section>

      {/* Individual Caregiver Login Modal */}
      {loginTarget && (
        <div className="fixed inset-0 z-50 bg-forest-950/70 flex items-center justify-center p-4">
          <div className="bg-paper-white max-w-md w-full p-6 sm:p-8 rounded-3xl retro-border-pink space-y-5">
            <div className="flex items-center justify-between border-b-2 border-forest-900 pb-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${loginTarget.avatarBg} border-2 border-forest-900 flex items-center justify-center font-syne font-extrabold`}>
                  {loginTarget.initials}
                </div>
                <div>
                  <h3 className="font-syne text-lg font-extrabold text-forest-900">
                    {loginTarget.name}
                  </h3>
                  <p className="text-xs font-bold text-forest-800">{loginTarget.designation}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLoginTarget(null)}
                className="w-8 h-8 rounded-full bg-electricPink border-2 border-forest-900 font-extrabold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block font-syne text-xs font-extrabold uppercase text-forest-900 mb-1.5">
                  Caregiver Passcode (Demo: enter any code)
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="e.g., sdss123"
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl border-2 border-forest-900 bg-white text-sm font-bold focus:outline-none"
                />
                {loginError && (
                  <p className="text-xs font-bold text-rose-700 mt-1.5">{loginError}</p>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-sproutGreen text-forest-950 font-syne text-xs font-extrabold uppercase border-2 border-forest-900 shadow-[3px_3px_0px_#12271f] cursor-pointer"
                >
                  Access Register →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLoggedInStaff(loginTarget);
                    setLoginTarget(null);
                  }}
                  className="px-4 py-3 rounded-xl bg-pastelOrange text-forest-950 font-syne text-xs font-extrabold border-2 border-forest-900 cursor-pointer"
                >
                  Quick Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Logged-In Caregiver Daily Register & Past Calendar Logs */}
      {loggedInStaff && (
        <section className="space-y-8">
          <div className="bg-paper-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl retro-border space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-forest-900 pb-4">
              <div>
                <span className="bg-sproutGreen text-forest-950 font-syne text-[10px] font-extrabold uppercase px-3 py-1 rounded-xl border-2 border-forest-900">
                  Logged in as {loggedInStaff.name} ({loggedInStaff.designation})
                </span>
                <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-forest-900 mt-2">
                  Daily Attendance &amp; Meal Log ({activeChildren.length} Students)
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSavedNotice(true)}
                  className="px-4 py-2 rounded-xl bg-electricPink text-forest-950 font-syne text-xs font-extrabold border-2 border-forest-900 shadow-[3px_3px_0px_#12271f] cursor-pointer"
                >
                  ✓ Save Today&apos;s Register
                </button>
                <button
                  type="button"
                  onClick={() => setLoggedInStaff(null)}
                  className="px-3.5 py-2 rounded-xl bg-softMint text-forest-950 font-syne text-xs font-extrabold border-2 border-forest-900 cursor-pointer"
                >
                  Log Out
                </button>
              </div>
            </div>

            {savedNotice && (
              <div className="p-3.5 rounded-2xl bg-sproutGreen/60 border-2 border-forest-900 text-xs sm:text-sm font-bold text-forest-950 flex items-center justify-between">
                <span>✅ Register saved offline by {loggedInStaff.name}!</span>
                <button
                  type="button"
                  onClick={() => setSavedNotice(false)}
                  className="font-extrabold ml-3 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeChildren.map((child) => (
                <div
                  key={child.id}
                  className="p-4 rounded-2xl bg-paper-white border-2 border-forest-900 flex flex-col justify-between gap-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{child.avatarEmoji}</span>
                      <div>
                        <p className="font-syne text-sm font-extrabold text-forest-900">
                          {child.name}
                        </p>
                        <p className="text-[11px] font-bold text-gray-600">
                          Age {child.age} • {child.weight} kg • {child.height} cm
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => toggleAttendance(child.id, true)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-syne font-extrabold border-2 border-forest-900 cursor-pointer ${
                          child.presentToday === true
                            ? 'bg-sproutGreen text-forest-950'
                            : 'bg-white text-gray-700'
                        }`}
                      >
                        Present
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleAttendance(child.id, false)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-syne font-extrabold border-2 border-forest-900 cursor-pointer ${
                          child.presentToday === false
                            ? 'bg-electricPink text-forest-950'
                            : 'bg-white text-gray-700'
                        }`}
                      >
                        Absent
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-forest-900/15">
                    {['breakfast', 'lunch', 'snack'].map((meal) => (
                      <button
                        key={meal}
                        type="button"
                        onClick={() => toggleMeal(child.id, meal)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-syne font-extrabold capitalize border-2 border-forest-900 cursor-pointer ${
                          child.mealsToday[meal]
                            ? 'bg-pastelOrange text-forest-950'
                            : 'bg-white text-gray-600'
                        }`}
                      >
                        {child.mealsToday[meal] ? '✓ ' : '+ '}
                        {meal}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Locked Calendar Logs */}
          <div className="bg-softMint/60 p-5 sm:p-7 rounded-2xl sm:rounded-3xl retro-border space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="bg-forest-900 text-paperWhite font-syne text-[10px] font-extrabold uppercase px-3 py-1 rounded-xl">
                  Locked Historical Archive
                </span>
                <h3 className="font-syne text-xl font-extrabold text-forest-900 mt-1.5">
                  Past Verified Shelter Logs
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {Object.keys(pastCalendarLogs).map((dateKey) => (
                  <button
                    key={dateKey}
                    type="button"
                    onClick={() => setSelectedDate(dateKey)}
                    className={`px-3 py-1.5 rounded-xl font-syne text-xs font-extrabold border-2 border-forest-900 cursor-pointer ${
                      selectedDate === dateKey
                        ? 'bg-electricPink text-forest-950'
                        : 'bg-paper-white text-forest-900'
                    }`}
                  >
                    {dateKey}
                  </button>
                ))}
              </div>
            </div>

            {selectedLog && (
              <div className="bg-paper-white p-4 sm:p-5 rounded-2xl border-2 border-forest-900 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-forest-900/20 pb-2">
                  <p className="font-syne text-sm font-extrabold text-forest-900">
                    {selectedLog.summary}
                  </p>
                  <span className="text-xs font-bold text-forest-800">
                    Verified by: {selectedLog.submittedBy}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedLog.records.map((rec, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-[#faf8f5] border border-forest-900/20 flex items-center justify-between"
                    >
                      <span className="font-bold text-forest-950">{rec.name}</span>
                      <span
                        className={`px-2 py-0.5 rounded-lg font-extrabold ${
                          rec.status === 'Present'
                            ? 'bg-sproutGreen text-forest-950'
                            : 'bg-electricPink text-forest-950'
                        }`}
                      >
                        {rec.status} • {rec.meals}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}