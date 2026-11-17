import React from 'react';

export default function Contact({ showToast }) {
  const handleFeedback = (e) => {
    e.preventDefault();
    e.target.reset();
    showToast('Thank you! Your feedback has been sent to Anisha & Saathi.');
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="bg-softMint p-8 rounded-3xl retro-border space-y-2">
        <span className="bg-electricPink text-forest-950 font-syne text-xs font-extrabold uppercase px-4 py-1.5 rounded-full border-2 border-forest-900 inline-block">
          Connect & Collaborate
        </span>
        <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-forest-900">
          Contact Directory & Community Desk
        </h2>
        <p className="text-xs sm:text-sm text-forest-800 font-medium max-w-2xl">
          Reach out to Team Community Spark for platform feedback or connect directly with Shanti Devi Shiksha Samiti (SDSS) in Uttam Nagar, New Delhi.
        </p>
      </div>

      {/* 4-COLUMN CONTACT DIRECTORY */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Column 1: Team */}
        <div className="bg-paperWhite p-6 rounded-3xl retro-border space-y-4">
          <div className="w-11 h-11 rounded-2xl bg-electricPink border-2 border-forest-900 flex items-center justify-center text-forest-950 text-lg">
            <i className="fa-solid fa-users"></i>
          </div>
          <h3 className="font-syne text-xl font-extrabold text-forest-900">1. Team</h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-softMint/50 border border-forest-900/30 space-y-1">
              <p className="font-syne font-extrabold text-forest-900">Anisha Dutta</p>
              <a
                href="mailto:anisha.datta258@gmail.com"
                className="block text-gray-800 font-semibold underline hover:text-electricPink break-all"
              >
                anisha.datta258@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/anisha-dutta-8384a028a"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-syne font-bold text-forest-900 underline hover:text-electricPink pt-1"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn Profile
              </a>
            </div>

            <div className="p-3 rounded-xl bg-pastelOrange/40 border border-forest-900/30 space-y-1">
              <p className="font-syne font-extrabold text-forest-900">Saathi</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-syne font-bold text-forest-900 underline hover:text-electricPink pt-0.5"
              >
                <i className="fa-solid fa-link"></i> Connect with Saathi
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: SDSS Leadership */}
        <div className="bg-paperWhite p-6 rounded-3xl retro-border space-y-4">
          <div className="w-11 h-11 rounded-2xl bg-sproutGreen border-2 border-forest-900 flex items-center justify-center text-forest-950 text-lg">
            <i className="fa-solid fa-user-tie"></i>
          </div>
          <h3 className="font-syne text-xl font-extrabold text-forest-900">2. SDSS Leadership</h3>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-softMint/50 border border-forest-900/30 space-y-1.5">
              <span className="text-[10px] font-syne font-extrabold uppercase text-forest-800">
                Official Society Desk
              </span>
              <p className="font-syne font-bold text-forest-900">Shanti Devi Shiksha Samiti</p>
              <a
                href="mailto:sdssnewdelhi@gmail.com"
                className="block font-bold text-forest-900 underline hover:text-electricPink break-all"
              >
                sdssnewdelhi@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Address */}
        <div className="bg-paperWhite p-6 rounded-3xl retro-border space-y-4">
          <div className="w-11 h-11 rounded-2xl bg-pastelOrange border-2 border-forest-900 flex items-center justify-center text-forest-950 text-lg">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <h3 className="font-syne text-xl font-extrabold text-forest-900">3. Address</h3>

          <div className="space-y-2 text-xs text-gray-700 leading-relaxed">
            <p className="font-syne font-bold text-forest-900">
              Shanti Devi Shiksha Samiti (SDSS)
            </p>
            <p>
              Plot Number F-15/F Block,
              <br />
              Jeevan Park, Uttam Nagar,
              <br />
              New Delhi - 110059, India
            </p>
            <p className="pt-2 text-[11px] font-syne font-bold text-forest-800">
              Visiting Hours: Mon – Sat, 9:00 AM – 4:00 PM
            </p>
          </div>
        </div>

        {/* Column 4: Email & Phone */}
        <div className="bg-paperWhite p-6 rounded-3xl retro-border space-y-4">
          <div className="w-11 h-11 rounded-2xl bg-[#f7d6da] border-2 border-forest-900 flex items-center justify-center text-forest-950 text-lg">
            <i className="fa-solid fa-phone-volume"></i>
          </div>
          <h3 className="font-syne text-xl font-extrabold text-forest-900">4. Email & Phone</h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-softMint/50 border border-forest-900/30 space-y-1">
              <p className="font-syne font-bold text-forest-900">NGO Reception Phone</p>
              <a
                href="tel:+917065682028"
                className="text-gray-900 font-extrabold underline hover:text-electricPink"
              >
                +91 7065682028
              </a>
            </div>
            <div className="p-3 rounded-xl bg-softMint/50 border border-forest-900/30 space-y-1">
              <p className="font-syne font-bold text-forest-900">General Demo Desk</p>
              <p className="text-gray-800 font-semibold">helpdesk.demo@sdss-portal.org</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Box */}
      <div className="bg-forest-900 text-paperWhite p-8 rounded-3xl retro-border-pink max-w-3xl mx-auto space-y-5">
        <div>
          <span className="bg-sproutGreen text-forest-950 font-syne text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border border-forest-950">
            Help Us Improve
          </span>
          <h3 className="font-syne text-2xl font-extrabold mt-2">
            Share Suggestions With Anisha & Saathi
          </h3>
          <p className="text-xs text-softMint mt-1">
            Notice a feature we can refine for shelter caregivers or corporate partners? Let us know below.
          </p>
        </div>

        <form onSubmit={handleFeedback} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-3 rounded-xl text-xs font-bold text-forest-900 bg-paperWhite border-2 border-forest-950 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-xl text-xs font-bold text-forest-900 bg-paperWhite border-2 border-forest-950 outline-none"
            />
          </div>
          <textarea
            rows="3"
            placeholder="Write your suggestion or feedback..."
            required
            className="w-full p-3 rounded-xl text-xs font-bold text-forest-900 bg-paperWhite border-2 border-forest-950 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-electricPink text-forest-950 font-syne font-extrabold text-xs uppercase py-3 px-6 rounded-xl retro-border hover:bg-sproutGreen transition"
          >
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
}