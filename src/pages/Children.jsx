import React, { useState } from 'react';
import { initialChildren, pastCalendarLogs } from '../data/mockData';

export default function Children({ isStaffLoggedIn, currentStaff, onStaffLogin, showToast }) {
  const [roleChoice, setRoleChoice] = useState(isStaffLoggedIn ? 'staff' : null);
  const [pinInput, setPinInput] = useState('');
  const [childrenList, setChildrenList] = useState(initialChildren);
  const [todaySubmitted, setTodaySubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('2026-11-18');
  const [checkupTab, setCheckupTab] = useState('weekly');

  const isViewingToday = selectedDate === '2026-11-18';
  const isLocked = !isViewingToday || todaySubmitted;

  const handleQuickStaffVerify = (e) => {
    e.preventDefault();
    if (!pinInput.trim()) return;
    onStaffLogin({
      id: 'staff-3',
      name: 'Meera Sharma',
      designation: 'Lead Caregiver & Record Keeper'
    });
    setRoleChoice('staff');
    setPinInput('');
  };

  const setAttendance = (id, status) => {
    if (isLocked) return;
    setChildrenList((prev) =>
      prev.map((c) => (c.id === id ? { ...c, presentToday: status } : c))
    );
  };

  const toggleMeal = (id, mealKey) => {
    if (isLocked) return;
    setChildrenList((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, mealsToday: { ...c.mealsToday, [mealKey]: !c.mealsToday[mealKey] } }
          : c
      )
    );
  };

  const handleFinalSubmit = () => {
    const unmarked = childrenList.some((c) => c.presentToday === null);
    if (unmarked) {
      showToast('Please mark Present or Absent for all 10 children before submitting.');
      return;
    }
    setTodaySubmitted(true);
    showToast('Daily Register Locked & Saved! Past entries are now read-only.');
  };

  // ROLE GATE POPUP
  if (!roleChoice && !isStaffLoggedIn) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="bg-paperWhite max-w-lg w-full p-8 rounded-3xl retro-border-pink text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-softMint rounded-2xl border-2 border-forest-900 flex items-center justify-center text-3xl">
            🧒🏽
          </div>
          <div className="space-y-2">
            <span className="bg-electricPink text-forest-950 font-syne text-[11px] font-extrabold uppercase px-3.5 py-1 rounded-full border border-forest-900">
              Child Privacy & Register Access
            </span>
            <h2 className="font-syne text-3xl font-extrabold text-forest-900">
              Are You Staff or Visiting?
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              To protect children's medical and growth records, full daily registers are restricted to authenticated SDSS caregivers. Visitors can explore all 10 students' dreams, specialties, and Hindi slogans!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <button
              onClick={() => setRoleChoice('visitor')}
              className="bg-sproutGreen text-forest-950 font-syne font-extrabold text-xs uppercase py-4 px-5 rounded-2xl retro-border hover:bg-pastelOrange transition"
            >
              <i className="fa-solid fa-face-smile mr-2"></i>
              I Am Visiting
            </button>
            <button
              onClick={() => setRoleChoice('staff-login')}
              className="bg-forest-900 text-paperWhite font-syne font-extrabold text-xs uppercase py-4 px-5 rounded-2xl retro-border hover:bg-electricPink hover:text-forest-950 transition"
            >
              <i className="fa-solid fa-clipboard-user mr-2"></i>
              I Am SDSS Staff
            </button>
          </div>
        </div>
      </div>
    );
  }

  // QUICK STAFF PIN GATE
  if (roleChoice === 'staff-login' && !isStaffLoggedIn) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <form
          onSubmit={handleQuickStaffVerify}
          className="bg-paperWhite max-w-md w-full p-8 rounded-3xl retro-border space-y-5"
        >
          <h3 className="font-syne text-2xl font-extrabold text-forest-900">Staff Register Verification</h3>
          <p className="text-xs text-gray-600">
            Enter your caregiver PIN (e.g. <strong>1234</strong>) to access the daily attendance and WHO growth register.
          </p>
          <input
            type="password"
            placeholder="Enter PIN (1234)"
            value={pinInput}
            onChange={(e) => setPinInput(e.target.value)}
            className="w-full p-3 text-sm font-bold rounded-xl border-2 border-forest-900 outline-none"
            required
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setRoleChoice('visitor')}
              className="flex-1 bg-softMint text-forest-900 font-syne font-bold text-xs py-3 rounded-xl border-2 border-forest-900"
            >
              Switch to Visitor
            </button>
            <button
              type="submit"
              className="flex-1 bg-electricPink text-forest-950 font-syne font-extrabold text-xs py-3 rounded-xl retro-border"
            >
              Enter Register
            </button>
          </div>
        </form>
      </div>
    );
  }

  // VISITOR VIEW: ALL 10 CHILDREN + HINDI SLOGANS & QUOTES
  if (roleChoice === 'visitor' && !isStaffLoggedIn) {
    return (
      <div className="space-y-8">
        {/* Hindi Slogan Banner */}
        <div className="bg-electricPink text-forest-950 p-6 sm:p-8 rounded-3xl retro-border text-center space-y-2">
          <span className="bg-paperWhite text-forest-950 font-syne text-[11px] font-extrabold uppercase px-3.5 py-1 rounded-full border-2 border-forest-900">
            हमारा संकल्प • Our Promise
          </span>
          <h2 className="font-syne text-2xl sm:text-4xl font-extrabold">
            “सही पोषण, उज्ज्वल भविष्य — हर बच्चे का अधिकार!”
          </h2>
          <p className="text-xs sm:text-sm font-bold text-forest-900">
            Right Nutrition, Bright Future — Every Child’s Right (SDSS Uttam Nagar, New Delhi)
          </p>
        </div>

        {/* Subheader & Staff Switch */}
        <div className="bg-softMint p-6 rounded-3xl retro-border flex flex-wrap justify-between items-center gap-4">
          <div className="space-y-1">
            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-forest-900">
              Meet Our 10 Young Stars
            </h3>
            <p className="text-xs sm:text-sm text-forest-800 font-medium">
              Hear their dreams in their own words and discover what each child loves doing best.
            </p>
          </div>

          <button
            onClick={() => setRoleChoice('staff-login')}
            className="bg-forest-900 text-paperWhite font-syne font-bold text-xs px-4 py-2.5 rounded-xl border-2 border-forest-950 hover:bg-electricPink hover:text-forest-950 transition"
          >
            Staff Login →
          </button>
        </div>

        {/* 10 Children Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {childrenList.map((child) => (
            <div key={child.id} className="bg-paperWhite p-7 rounded-3xl retro-border space-y-4">
              <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-softMint border-2 border-forest-900 flex items-center justify-center text-2xl">
                    {child.avatarEmoji}
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-extrabold text-forest-900">{child.name}</h3>
                    <p className="text-xs font-bold text-forest-800">Age: {child.age} Years</p>
                  </div>
                </div>
                <span className="bg-sproutGreen text-forest-950 font-syne text-[11px] font-extrabold px-3 py-1.5 rounded-full border-2 border-forest-900">
                  ★ {child.specialty}
                </span>
              </div>

              <div className="bg-[#f7d6da]/60 p-4 rounded-2xl border-2 border-forest-900/20 space-y-1.5">
                <p className="text-[10px] font-syne font-extrabold uppercase text-forest-800">
                  उनकी जुबानी • In Their Own Words:
                </p>
                <p className="text-base font-bold text-forest-950 leading-snug">
                  {child.hindiQuote}
                </p>
                <p className="font-editorial italic text-sm font-semibold text-forest-800">
                  {child.englishQuote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // STAFF VIEW: FULL 10-CHILD REGISTER + CALENDAR + PERIODIC CHECKUPS
  const pastRecord = pastCalendarLogs[selectedDate];

  return (
    <div className="space-y-8">
      <div className="bg-forest-900 text-paperWhite p-6 sm:p-8 rounded-3xl retro-border-pink flex flex-wrap justify-between items-center gap-4">
        <div>
          <span className="bg-sproutGreen text-forest-950 font-syne text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border border-forest-950">
            Authenticated Caregiver Register (10 Students)
          </span>
          <h2 className="font-syne text-2xl sm:text-3xl font-extrabold mt-2">
            Daily Attendance, Meal & WHO Growth Ledger
          </h2>
          <p className="text-xs text-softMint mt-1">
            Logged in as <strong>{currentStaff?.name || 'SDSS Staff'}</strong> • Once submitted for today, records lock automatically.
          </p>
        </div>
        <div className="bg-paperWhite text-forest-900 px-4 py-2.5 rounded-2xl border-2 border-forest-950 text-xs font-syne font-extrabold">
          Selected Date: {selectedDate} {isLocked ? '🔒 Locked' : '✏️ Open'}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: 10-CHILD REGISTER */}
        <div className="lg:col-span-8 bg-paperWhite p-6 rounded-3xl retro-border space-y-5">
          <div className="flex justify-between items-center border-b-2 border-forest-900 pb-3">
            <h3 className="font-syne text-xl font-extrabold text-forest-900">
              {isViewingToday ? "Today's Shelter Register (Nov 18, 2026)" : `Archived Register (${selectedDate})`}
            </h3>
            {isLocked && (
              <span className="bg-pastelOrange text-forest-950 font-syne text-[11px] font-extrabold px-3 py-1 rounded-full border border-forest-900">
                View-Only Locked
              </span>
            )}
          </div>

          {isViewingToday ? (
            <>
              <div className="space-y-4">
                {childrenList.map((child) => {
                  const whoBadge =
                    child.whoStatus === 'red'
                      ? 'bg-red-100 text-red-900 border-red-900'
                      : child.whoStatus === 'yellow'
                      ? 'bg-amber-100 text-amber-900 border-amber-900'
                      : 'bg-emerald-100 text-emerald-900 border-emerald-900';

                  return (
                    <div
                      key={child.id}
                      className="p-4 rounded-2xl border-2 border-forest-900 bg-softMint/30 space-y-3"
                    >
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <h4 className="font-syne font-extrabold text-base text-forest-900">
                          {child.avatarEmoji} {child.name}{' '}
                          <span className="text-xs font-sans font-semibold text-gray-600">
                            ({child.age} Yrs • {child.weight} kg • {child.height} cm)
                          </span>
                        </h4>
                        <span className={`text-[10px] font-syne font-extrabold uppercase px-2.5 py-0.5 rounded-md border ${whoBadge}`}>
                          WHO Status: {child.whoStatus.toUpperCase()}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-forest-900/15">
                        <div className="flex gap-2">
                          <button
                            disabled={isLocked}
                            onClick={() => setAttendance(child.id, true)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-syne font-bold border-2 border-forest-900 transition ${
                              child.presentToday === true
                                ? 'bg-sproutGreen text-forest-950'
                                : 'bg-paperWhite text-forest-900 opacity-75'
                            } ${isLocked ? 'cursor-not-allowed' : ''}`}
                          >
                            ✓ Present Today
                          </button>
                          <button
                            disabled={isLocked}
                            onClick={() => setAttendance(child.id, false)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-syne font-bold border-2 border-forest-900 transition ${
                              child.presentToday === false
                                ? 'bg-electricPink text-forest-950'
                                : 'bg-paperWhite text-forest-900 opacity-75'
                            } ${isLocked ? 'cursor-not-allowed' : ''}`}
                          >
                            ✕ Absent Today
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {['breakfast', 'lunch', 'snack'].map((meal) => (
                            <button
                              key={meal}
                              disabled={isLocked || child.presentToday === false}
                              onClick={() => toggleMeal(child.id, meal)}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-syne font-bold capitalize border border-forest-900 ${
                                child.mealsToday[meal]
                                  ? 'bg-forest-900 text-paperWhite'
                                  : 'bg-paperWhite text-forest-900'
                              } ${isLocked ? 'cursor-not-allowed opacity-70' : ''}`}
                            >
                              {child.mealsToday[meal] ? '✓ ' : '+ '}
                              {meal}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {!todaySubmitted ? (
                <button
                  onClick={handleFinalSubmit}
                  className="w-full bg-electricPink text-forest-950 font-syne font-extrabold text-xs uppercase py-4 rounded-2xl retro-border hover:bg-sproutGreen transition"
                >
                  Submit & Lock Today's Register (All 10 Students)
                </button>
              ) : (
                <div className="p-4 rounded-2xl bg-softMint border-2 border-forest-900 text-xs font-bold text-forest-900 text-center">
                  ✓ Today's register has been submitted and locked. Past entries cannot be altered.
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-pastelOrange/50 border-2 border-forest-900 text-xs space-y-1">
                <p className="font-syne font-extrabold text-forest-900">
                  Submitted By: {pastRecord?.submittedBy}
                </p>
                <p className="font-medium text-forest-800">{pastRecord?.summary}</p>
              </div>
              <div className="space-y-2">
                {pastRecord?.records.map((rec, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border-2 border-forest-900 bg-paperWhite flex justify-between items-center text-xs"
                  >
                    <span className="font-syne font-bold text-forest-900">{rec.name}</span>
                    <span className="font-semibold text-gray-700">Meals: {rec.meals}</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-md font-syne font-bold border border-forest-900 ${
                        rec.status === 'Present' ? 'bg-sproutGreen' : 'bg-electricPink'
                      }`}
                    >
                      {rec.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: CALENDAR + PERIODIC HEALTH CHECKUPS */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-paperWhite p-5 rounded-3xl retro-border space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-syne font-extrabold text-sm text-forest-900">
                November 2026 Ledger
              </h4>
              <i className="fa-regular fa-calendar text-forest-900"></i>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { date: '2026-11-15', label: 'Nov 15', status: '🔒' },
                { date: '2026-11-16', label: 'Nov 16', status: '🔒' },
                { date: '2026-11-17', label: 'Nov 17', status: '🔒' },
                { date: '2026-11-18', label: 'Today', status: todaySubmitted ? '🔒' : '●' }
              ].map((d) => (
                <button
                  key={d.date}
                  onClick={() => setSelectedDate(d.date)}
                  className={`p-2.5 rounded-xl border-2 border-forest-900 text-xs font-syne font-bold transition ${
                    selectedDate === d.date
                      ? 'bg-electricPink text-forest-950 shadow-sm'
                      : 'bg-softMint/50 text-forest-900 hover:bg-softMint'
                  }`}
                >
                  <div>{d.label}</div>
                  <div className="text-[10px] mt-0.5">{d.status}</div>
                </button>
              ))}
            </div>
            <p className="text-[11px] text-gray-600 leading-snug">
              Tap any past date to inspect locked attendance & meal history.
            </p>
          </div>

          <div className="bg-paperWhite p-5 rounded-3xl retro-border-green space-y-4">
            <div>
              <span className="bg-sproutGreen text-forest-950 font-syne text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-forest-900">
                Growth & Illness Surveillance
              </span>
              <h4 className="font-syne font-extrabold text-base text-forest-900 mt-1.5">
                Periodic Health Checkups
              </h4>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              {['weekly', 'monthly', 'yearly'].map((period) => (
                <button
                  key={period}
                  onClick={() => setCheckupTab(period)}
                  className={`py-2 rounded-xl text-xs font-syne font-extrabold capitalize border-2 border-forest-900 transition ${
                    checkupTab === period
                      ? 'bg-forest-900 text-paperWhite'
                      : 'bg-paperWhite text-forest-900 hover:bg-softMint'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {childrenList.map((child) => (
                <div
                  key={child.id}
                  className="p-3 rounded-2xl bg-softMint/40 border border-forest-900/30 space-y-1"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-syne font-bold text-xs text-forest-900">
                      {child.avatarEmoji} {child.name}
                    </span>
                    <span className="text-[10px] font-bold text-forest-800">
                      {child.weight}kg / {child.height}cm
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">{child.checks[checkupTab]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}