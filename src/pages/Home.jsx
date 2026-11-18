import React from 'react';
import { monthlyStars, gazetteLetter } from '../data/mockData';

export default function Home({ onNavigate }) {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* LACE HERO BANNER WITH SLOGAN & 3 MONTHLY STARS */}
      <section className="bg-softMint/70 lace-box rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="h-3 lace-trim bg-electricPink/40 border-b-2 border-forest-900/20"></div>

        <div className="p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
          {/* Slogan Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 pt-1">
            <span className="bg-electricPink text-forest-950 font-syne text-[10px] sm:text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full border-2 border-forest-900 inline-block leading-snug">
              SDSS × Team Community Spark • Uttam Nagar, New Delhi
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-extrabold text-forest-900 leading-tight break-words">
              Small Logs Today, Stronger Futures Tomorrow.
            </h2>
            <p className="text-xs sm:text-sm text-forest-800 font-medium max-w-2xl mx-auto leading-relaxed">
              Replacing paper registers with offline-first care—because every meal tracked and every milestone celebrated builds healthier, unstoppable kids.
            </p>
          </div>

          {/* 3 Compartmentalized Student Spotlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {monthlyStars.map((star) => (
              <div
                key={star.id}
                className="bg-paperWhite p-5 sm:p-6 rounded-2xl retro-border flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform"
              >
                <div className="space-y-4">
                  <div className="text-center">
                    <span className={`${star.badgeColor} text-forest-950 font-syne text-[10px] sm:text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border-2 border-forest-900 inline-block`}>
                      {star.title}
                    </span>
                  </div>

                  {/* Emoji Avatar Badge */}
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full ${star.cartoonBg} border-3 border-forest-900 flex items-center justify-center relative shadow-[3px_3px_0px_#12271f]`}>
                    <span className="text-3xl sm:text-4xl">{star.emoji}</span>
                    <span className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-paperWhite border-2 border-forest-900 flex items-center justify-center text-xs sm:text-sm">
                      {star.subEmoji}
                    </span>
                  </div>

                  {/* Name with Age Directly Below */}
                  <div className="text-center">
                    <h3 className="font-syne text-lg sm:text-xl font-extrabold text-forest-900">{star.name}</h3>
                    <p className="text-xs font-syne font-bold text-forest-800 mt-0.5">{star.age}</p>
                    <p className="text-xs text-gray-700 mt-2 leading-relaxed">{star.highlight}</p>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-dashed border-forest-900/20 text-center">
                  <span className="text-[11px] font-syne font-bold text-forest-800">
                    ✦ {star.streak}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-3 lace-trim bg-electricPink/40 border-t-2 border-forest-900/20"></div>
      </section>

      {/* LOWER SPLIT: BRIDGERTON-STYLE GAZETTE LETTER + HEART COLLAGE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left: The Letter */}
        <div className="lg:col-span-6 bg-[#f7d6da] p-5 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl retro-border-pink space-y-5 relative">
          <div className="flex items-center justify-between gap-3 border-b-2 border-forest-900 pb-3">
            <div>
              <p className="text-[10px] sm:text-[11px] font-syne font-extrabold uppercase tracking-widest text-forest-800">
                {gazetteLetter.issue}
              </p>
              <h3 className="font-editorial italic text-2xl sm:text-4xl font-bold text-forest-950 mt-0.5">
                The Letter
              </h3>
            </div>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-paperWhite border-2 border-forest-900 flex items-center justify-center text-forest-900 shrink-0">
              <i className="fa-solid fa-feather-pointed"></i>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-forest-950 leading-relaxed font-medium">
            <p className="font-editorial italic text-base sm:text-lg font-bold">{gazetteLetter.salutation}</p>
            {gazetteLetter.paragraphs.map((para, index) => (
              <p key={index} className="border-b border-forest-900/15 pb-3">
                {para}
              </p>
            ))}
            <p className="font-editorial italic text-sm sm:text-base font-bold text-right pt-1">
              — {gazetteLetter.signOff}
            </p>
          </div>
        </div>

        {/* Right: 3 Photo Heart Frames + Scattered Small Red, Yellow & Purple Hearts */}
        <div className="lg:col-span-6 bg-paperWhite p-5 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl retro-border space-y-6 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="bg-sproutGreen text-forest-950 font-syne text-[10px] sm:text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border-2 border-forest-900">
                Snapshots of Joy
              </span>
              <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-forest-900 mt-2">
                Life at Shanti Devi Shiksha Samiti
              </h3>
            </div>
            <button
              onClick={() => onNavigate('children')}
              className="text-xs font-syne font-extrabold underline text-forest-900 hover:text-electricPink cursor-pointer"
            >
              Meet All 10 Kids →
            </button>
          </div>

          {/* 3 Main Photo Hearts with Small Red, Yellow & Purple Hearts */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center py-4">
            {/* Scattered Small Red, Yellow & Purple Hearts */}
            <i className="fa-solid fa-heart text-red-500 text-base sm:text-lg absolute top-1 left-4 sm:left-6 -rotate-12 pointer-events-none"></i>
            <i className="fa-solid fa-heart text-amber-400 text-lg sm:text-xl absolute top-2 right-6 sm:right-10 rotate-12 pointer-events-none"></i>
            <i className="fa-solid fa-heart text-purple-500 text-sm sm:text-base absolute top-1/2 left-2 sm:left-3 -rotate-6 pointer-events-none"></i>
            <i className="fa-solid fa-heart text-red-500 text-xs sm:text-sm absolute top-1/2 right-3 sm:right-4 rotate-12 pointer-events-none"></i>
            <i className="fa-solid fa-heart text-amber-400 text-base sm:text-lg absolute bottom-8 sm:bottom-10 left-8 sm:left-12 -rotate-12 pointer-events-none"></i>
            <i className="fa-solid fa-heart text-purple-500 text-lg sm:text-xl absolute bottom-6 sm:bottom-8 right-8 sm:right-12 rotate-6 pointer-events-none"></i>
            <i className="fa-solid fa-heart text-red-500 text-sm sm:text-base absolute top-32 left-1/2 -translate-x-1/2 pointer-events-none"></i>

            {/* Heart 1: Real Photo */}
            <div className="relative group text-center z-10">
              <div className="w-[190px] h-[182px] sm:w-[220px] sm:h-[210px] bg-electricPink p-2 heart-clip flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                  alt="Children learning together"
                  className="w-full h-full object-cover heart-clip"
                />
              </div>
              <span className="block text-xs font-syne font-bold text-forest-900 mt-1.5">
                Morning Learning Circle
              </span>
            </div>

            {/* Heart 2: Real Photo */}
            <div className="relative group text-center z-10">
              <div className="w-[190px] h-[182px] sm:w-[220px] sm:h-[210px] bg-sproutGreen p-2 heart-clip flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80"
                  alt="Art and creative learning"
                  className="w-full h-full object-cover heart-clip"
                />
              </div>
              <span className="block text-xs font-syne font-bold text-forest-900 mt-1.5">
                Creative Art &amp; Mentorship
              </span>
            </div>

            {/* Heart 3: Real Photo */}
            <div className="sm:col-span-2 relative group text-center z-10">
              <div className="w-[190px] h-[182px] sm:w-[220px] sm:h-[210px] bg-pastelOrange p-2 heart-clip flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=600&q=80"
                  alt="Nutritious meals and smiles"
                  className="w-full h-full object-cover heart-clip"
                />
              </div>
              <span className="block text-xs font-syne font-bold text-forest-900 mt-1.5">
                Nutritious Daily Meals Together
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}