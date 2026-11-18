import React, { useState } from 'react';
import { initialChildren } from '../data/mockData';

export default function Children({ childrenList, setChildrenList }) {
  const [localChildren, setLocalChildren] = useState(initialChildren);
  const activeChildren = childrenList || localChildren;
  const updateChildren = setChildrenList || setLocalChildren;

  const [role, setRole] = useState(null); // null | 'visitor' | 'staff'
  const [selectedChild, setSelectedChild] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

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

  const getStatusBadge = (status) => {
    if (status === 'green') {
      return {
        label: 'WHO Healthy (Green)',
        bg: 'bg-sproutGreen text-forest-950',
      };
    }
    if (status === 'yellow') {
      return {
        label: 'WHO Watch (Yellow)',
        bg: 'bg-amber-300 text-forest-950',
      };
    }
    return {
      label: 'Priority Nutrition (Red)',
      bg: 'bg-electricPink text-forest-950',
    };
  };

  // ROLE GATE SCREEN
  if (!role) {
    return (
      <div className="max-w-xl mx-auto py-4 sm:py-10 px-1">
        <div className="bg-paperWhite p-6 sm:p-10 rounded-3xl retro-border-pink text-center space-y-5">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-softMint border-3 border-forest-900 flex items-center justify-center text-3xl shadow-[3px_3px_0px_#12271f]">
            🧒🏽
          </div>

          <div className="flex justify-center">
            <span className="bg-electricPink text-forest-950 font-syne text-[10px] sm:text-xs font-extrabold uppercase tracking-wide px-4 py-1.5 rounded-xl border-2 border-forest-900 inline-block leading-snug max-w-full">
              Child Privacy &amp; Register Access
            </span>
          </div>

          <h2 className="font-syne text-2xl sm:text-4xl font-extrabold text-forest-900 leading-tight">
            Are You Staff or Visiting?
          </h2>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
            To protect children&apos;s medical and growth records, full daily registers are restricted to authenticated SDSS caregivers. Visitors can explore all 10 students&apos; dreams, specialties, and Hindi slogans.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => setRole('visitor')}
              className="w-full py-3.5 px-5 rounded-2xl bg-softMint hover:bg-sproutGreen text-forest-950 font-syne text-xs sm:text-sm font-extrabold border-3 border-forest-900 shadow-[4px_4px_0px_#12271f] transition-all cursor-pointer"
            >
              👀 I am a Visitor
            </button>
            <button
              type="button"
              onClick={() => setRole('staff')}
              className="w-full py-3.5 px-5 rounded-2xl bg-electricPink hover:bg-pastelOrange text-forest-950 font-syne text-xs sm:text-sm font-extrabold border-3 border-forest-900 shadow-[4px_4px_0px_#12271f] transition-all cursor-pointer"
            >
              📋 SDSS Staff Access
            </button>
          </div>
        </div>
      </div>
    );
  }

  const filteredChildren =
    filterStatus === 'all'
      ? activeChildren
      : activeChildren.filter((c) => c.whoStatus === filterStatus);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Top Mode & Filter Bar */}
      <div className="bg-softMint/80 p-4 sm:p-6 rounded-2xl sm:rounded-3xl retro-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="bg-electricPink text-forest-950 font-syne text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-xl border-2 border-forest-900 inline-block">
            {role === 'staff' ? 'Staff Caregiver Mode • Live Register' : 'Public Visitor Showcase'}
          </span>
          <h2 className="font-syne text-xl sm:text-3xl font-extrabold text-forest-900">
            SDSS Children Directory ({filteredChildren.length})
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {role === 'staff' && (
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All (10)' },
                { id: 'green', label: 'Green' },
                { id: 'yellow', label: 'Yellow' },
                { id: 'red', label: 'Red Alert' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilterStatus(f.id)}
                  className={`px-3 py-1.5 rounded-xl font-syne text-xs font-extrabold border-2 border-forest-900 cursor-pointer ${
                    filterStatus === f.id
                      ? 'bg-forest-900 text-paperWhite'
                      : 'bg-paperWhite text-forest-900'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setRole(role === 'staff' ? 'visitor' : 'staff')}
            className="px-3.5 py-1.5 rounded-xl bg-pastelOrange text-forest-950 font-syne text-xs font-extrabold border-2 border-forest-900 cursor-pointer"
          >
            Switch to {role === 'staff' ? 'Visitor View' : 'Staff Mode'}
          </button>
        </div>
      </div>

      {/* Children Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {filteredChildren.map((child) => {
          const statusBadge = getStatusBadge(child.whoStatus);
          return (
            <div
              key={child.id}
              className="bg-paperWhite p-5 sm:p-6 rounded-2xl sm:rounded-3xl retro-border flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-softMint border-2 border-forest-900 flex items-center justify-center text-3xl shrink-0">
                      {child.avatarEmoji}
                    </div>
                    <div>
                      <h3 className="font-syne text-lg sm:text-xl font-extrabold text-forest-900">
                        {child.name}
                      </h3>
                      <p className="text-xs font-bold text-forest-800">
                        Age: {child.age} yrs • {child.specialty}
                      </p>
                    </div>
                  </div>

                  {role === 'staff' && (
                    <span
                      className={`${statusBadge.bg} font-syne text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-xl border-2 border-forest-900 shrink-0`}
                    >
                      {statusBadge.label}
                    </span>
                  )}
                </div>

                {/* Hindi Slogan & English Translation */}
                <div className="bg-[#fff8eb] p-3.5 rounded-2xl border-2 border-forest-900/20 space-y-1">
                  <p className="text-xs sm:text-sm font-bold text-forest-950 leading-relaxed">
                    {child.hindiQuote}
                  </p>
                  <p className="text-[11px] italic text-gray-600">
                    {child.englishQuote}
                  </p>
                </div>

                {/* Staff-Only Vitals, Attendance & Meal Checkboxes */}
                {role === 'staff' && (
                  <div className="space-y-3 pt-1">
                    <div className="flex flex-wrap gap-2 text-xs font-syne font-bold">
                      <span className="bg-softMint px-3 py-1 rounded-xl border border-forest-900">
                        Weight: {child.weight} kg
                      </span>
                      <span className="bg-softMint px-3 py-1 rounded-xl border border-forest-900">
                        Height: {child.height} cm
                      </span>
                    </div>

                    {/* Attendance Buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-2 bg-paperWhite p-2.5 rounded-xl border-2 border-forest-900/15">
                      <span className="text-xs font-syne font-extrabold text-forest-900">
                        Today&apos;s Attendance:
                      </span>
                      <div className="flex gap-1.5">
                        <button
                          type="button"
                          onClick={() => toggleAttendance(child.id, true)}
                          className={`px-3 py-1 rounded-lg text-xs font-syne font-extrabold border-2 border-forest-900 cursor-pointer ${
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
                          className={`px-3 py-1 rounded-lg text-xs font-syne font-extrabold border-2 border-forest-900 cursor-pointer ${
                            child.presentToday === false
                              ? 'bg-electricPink text-forest-950'
                              : 'bg-white text-gray-700'
                          }`}
                        >
                          Absent
                        </button>
                      </div>
                    </div>

                    {/* Daily Meals */}
                    <div className="flex flex-wrap items-center justify-between gap-2 bg-paperWhite p-2.5 rounded-xl border-2 border-forest-900/15">
                      <span className="text-xs font-syne font-extrabold text-forest-900">
                        Meals Logged:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
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
                  </div>
                )}
              </div>

              {role === 'staff' && (
                <button
                  type="button"
                  onClick={() => setSelectedChild(child)}
                  className="w-full py-2.5 rounded-xl bg-forest-900 text-paperWhite font-syne text-xs font-extrabold hover:bg-forest-800 transition-colors cursor-pointer"
                >
                  View Weekly / Monthly / Yearly WHO Logs →
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal for Detailed WHO Growth Checks */}
      {selectedChild && (
        <div className="fixed inset-0 z-50 bg-forest-950/70 flex items-center justify-center p-4">
          <div className="bg-paperWhite max-w-lg w-full p-6 sm:p-7 rounded-3xl retro-border space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b-2 border-forest-900 pb-3">
              <div>
                <h3 className="font-syne text-xl font-extrabold text-forest-900">
                  {selectedChild.name} • Clinical &amp; Growth Log
                </h3>
                <p className="text-xs font-bold text-forest-800">
                  Age {selectedChild.age} • {selectedChild.weight} kg • {selectedChild.height} cm
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedChild(null)}
                className="w-9 h-9 rounded-full bg-electricPink border-2 border-forest-900 font-extrabold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-softMint/70 border-2 border-forest-900">
                <p className="font-syne font-extrabold text-forest-900">Weekly Checkup</p>
                <p className="text-gray-800 mt-1">{selectedChild.checks.weekly}</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-pastelOrange/50 border-2 border-forest-900">
                <p className="font-syne font-extrabold text-forest-900">Monthly WHO Z-Score Review</p>
                <p className="text-gray-800 mt-1">{selectedChild.checks.monthly}</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#f7d6da] border-2 border-forest-900">
                <p className="font-syne font-extrabold text-forest-900">Annual Pediatric Summary</p>
                <p className="text-gray-800 mt-1">{selectedChild.checks.yearly}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}