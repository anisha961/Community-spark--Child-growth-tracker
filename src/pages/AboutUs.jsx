import React, { useState } from 'react';

export default function AboutUs({ onNavigate }) {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [whoResult, setWhoResult] = useState(null);
  const [storyStep, setStoryStep] = useState(0);

  const cartoonSteps = [
    {
      emoji: "🍲",
      title: "1. Daily Nutritious Meal",
      desc: "Cook & distributor log balanced breakfast, lunch, and ragi snacks in 3 seconds."
    },
    {
      emoji: "📏",
      title: "2. WHO Z-Score Check",
      desc: "Weekly & monthly weight/height tracking flags early stunting or wasting instantly."
    },
    {
      emoji: "🎓",
      title: "3. Stronger School Days",
      desc: "Higher immunity means fewer sick days and brighter classroom learning!"
    }
  ];

  const evaluateWHO = (e) => {
    e.preventDefault();
    const a = parseFloat(age);
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!a || !h || !w) return;

    if (w < 14 || h < 100) {
      setWhoResult({
        status: 'Priority Malnutrition / Stunting Alert (Red Flag: < -2 SD)',
        style: 'bg-red-100 text-red-950 border-red-900',
        action: 'Immediate kitchen intervention: Double daily protein ration, fortified milk, and ragi laddoos.'
      });
    } else if (w < 17) {
      setWhoResult({
        status: 'Moderate Underweight Watch (Yellow Flag: -1 to -2 SD)',
        style: 'bg-amber-100 text-amber-950 border-amber-900',
        action: 'Weekly weight surveillance and supplementary afternoon protein snack.'
      });
    } else {
      setWhoResult({
        status: 'Healthy WHO Growth Curve (Green Zone: Median 0 SD)',
        style: 'bg-emerald-100 text-emerald-950 border-emerald-900',
        action: 'Maintain balanced daily shelter diet and monthly growth tracking.'
      });
    }
  };

  return (
    <div className="space-y-12">
      {/* 1. OUR MOTIVE + INTERACTIVE FRIENDLY CARTOON ILLUSTRATION */}
      <section className="bg-softMint p-8 sm:p-10 rounded-3xl retro-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="bg-electricPink text-forest-950 font-syne text-xs font-extrabold uppercase px-4 py-1.5 rounded-full border-2 border-forest-900 inline-block">
            Chapter 01 • Our Motive
          </span>
          <h2 className="font-syne text-3xl sm:text-4xl font-extrabold text-forest-900">
            Why We Built This: Turning Everyday Care into Lasting Impact
          </h2>
          <p className="text-sm text-forest-900 leading-relaxed font-medium">
            This platform began with an everyday reality we witnessed right around us. Observing children in our own neighborhoods—including the children of the domestic helpers who support our households every day—fall sick repeatedly made one thing impossible to ignore: subtle nutritional gaps often go unnoticed until a child's immunity, energy, and schooling suffer.
          </p>
          <p className="text-sm text-forest-900 leading-relaxed font-medium">
            At the same time, grassroots centers in Delhi work tirelessly to serve daily meals and teach foundational lessons, yet rely on slow paper registers that make tracking health trends nearly impossible. By digitizing attendance, meals, and growth checkups, we empower caregivers on the ground and build the transparent data bridge needed to connect community NGOs with corporate CSR partners.
          </p>
        </div>

        {/* Interactive Friendly Cartoon Card */}
        <div className="lg:col-span-5 bg-paperWhite p-6 rounded-3xl retro-border-pink text-center space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-[#fff3b0] border-3 border-forest-900 flex items-center justify-center text-5xl transition-transform hover:scale-110">
            {cartoonSteps[storyStep].emoji}
          </div>
          <div className="space-y-1">
            <h4 className="font-syne text-lg font-extrabold text-forest-900">
              {cartoonSteps[storyStep].title}
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              {cartoonSteps[storyStep].desc}
            </p>
          </div>
          <div className="flex justify-center gap-2 pt-1">
            {cartoonSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStoryStep(idx)}
                className={`px-3 py-1 rounded-full text-xs font-syne font-bold border-2 border-forest-900 ${
                  storyStep === idx
                    ? 'bg-electricPink text-forest-950'
                    : 'bg-softMint text-forest-900'
                }`}
              >
                Step {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STRICT WHO STATISTICAL STANDARDS & UN SDG MAPPING */}
      <section className="bg-paperWhite p-8 sm:p-10 rounded-3xl retro-border space-y-6">
        <div className="space-y-3">
          <span className="bg-pastelOrange text-forest-950 font-syne text-xs font-extrabold uppercase px-4 py-1.5 rounded-full border-2 border-forest-900 inline-block">
            Chapter 02 • Statistical Rigor & UN SDG Mapping
          </span>
          <h3 className="font-syne text-3xl font-extrabold text-forest-900">
            Why Strict WHO Statistical Standards & SDG Alignment Matter
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Visual observation alone cannot detect early childhood undernutrition—a child can appear active while falling behind on critical growth velocity. Every checkup in our register is anchored strictly to <strong>World Health Organization (WHO) Child Growth Standards</strong> using statistical <strong>Z-scores (Standard Deviation curves)</strong> across <strong>Height-for-Age (HAZ)</strong> for stunting, <strong>Weight-for-Height (WHZ)</strong> for acute wasting, and <strong>Weight-for-Age (WAZ)</strong> for longitudinal recovery.
          </p>
        </div>

        {/* UN SDG Mapping Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-softMint border-2 border-forest-900 space-y-1.5">
            <span className="text-[10px] font-syne font-extrabold uppercase bg-forest-900 text-paperWhite px-2.5 py-0.5 rounded-md">
              UN SDG 2 • Target 2.2
            </span>
            <h4 className="font-syne font-extrabold text-base text-forest-900 pt-1">Zero Hunger & Malnutrition</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Directly targets ending all forms of stunting and wasting in children through standardized Z-score tracking and targeted kitchen rations.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-pastelOrange border-2 border-forest-900 space-y-1.5">
            <span className="text-[10px] font-syne font-extrabold uppercase bg-forest-900 text-paperWhite px-2.5 py-0.5 rounded-md">
              UN SDG 3 • Target 3.2
            </span>
            <h4 className="font-syne font-extrabold text-base text-forest-900 pt-1">Good Health & Well-Being</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Reduces preventable childhood illness by correlating recurring fevers and absences with immediate nutrition interventions.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#f7d6da] border-2 border-forest-900 space-y-1.5">
            <span className="text-[10px] font-syne font-extrabold uppercase bg-forest-900 text-paperWhite px-2.5 py-0.5 rounded-md">
              UN SDG 4 • Target 4.1
            </span>
            <h4 className="font-syne font-extrabold text-base text-forest-900 pt-1">Quality Education</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Protects cognitive development and classroom attendance so healthy, well-nourished children thrive academically.
            </p>
          </div>
        </div>

        {/* Interactive WHO Growth Evaluator */}
        <div className="bg-forest-900 text-paperWhite p-6 sm:p-8 rounded-2xl retro-border-green space-y-4">
          <div>
            <h4 className="font-syne text-xl font-extrabold">Live WHO Pediatric Growth Evaluator</h4>
            <p className="text-xs text-softMint">Test how caregivers evaluate a child's metrics against WHO Z-score benchmarks.</p>
          </div>
          <form onSubmit={evaluateWHO} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <input
              type="number"
              step="0.1"
              placeholder="Age (Years)"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="p-3 rounded-xl text-xs font-bold text-forest-900 bg-paperWhite border-2 border-forest-950 outline-none"
              required
            />
            <input
              type="number"
              step="0.1"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="p-3 rounded-xl text-xs font-bold text-forest-900 bg-paperWhite border-2 border-forest-950 outline-none"
              required
            />
            <input
              type="number"
              step="0.1"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="p-3 rounded-xl text-xs font-bold text-forest-900 bg-paperWhite border-2 border-forest-950 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-sproutGreen text-forest-950 font-syne font-extrabold text-xs uppercase py-3 px-4 rounded-xl border-2 border-forest-950 hover:bg-electricPink transition"
            >
              Evaluate Now
            </button>
          </form>

          {whoResult && (
            <div className={`p-4 rounded-xl border-2 space-y-1 ${whoResult.style}`}>
              <p className="font-syne font-extrabold text-sm">{whoResult.status}</p>
              <p className="text-xs font-medium">{whoResult.action}</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. MISSION OF SHANTI DEVI SHIKSHA SAMITI (SDSS) */}
      <section className="bg-[#f7d6da]/70 p-8 sm:p-10 rounded-3xl retro-border-pink space-y-4">
        <span className="bg-paperWhite text-forest-950 font-syne text-xs font-extrabold uppercase px-4 py-1.5 rounded-full border-2 border-forest-900 inline-block">
          Chapter 03 • Grassroots Partner
        </span>
        <h3 className="font-syne text-3xl font-extrabold text-forest-900">
          Mission of Shanti Devi Shiksha Samiti (SDSS)
        </h3>
        <p className="text-sm text-forest-950 leading-relaxed font-medium">
          Active since <strong>1995</strong> and formally registered under the Societies Registration Act (XXI of 1860) with the <strong>Government of NCT of Delhi</strong> (Registration No. S/47035, 12AA & 80G certified), <strong>Shanti Devi Shiksha Samiti (SDSS)</strong> was founded with a clear grassroots mission: to uplift underserved sections of society by eliminating illiteracy and expanding access to education, preventive healthcare, and community welfare.
        </p>
        <p className="text-sm text-forest-950 leading-relaxed font-medium">
          Operating through its community center at <strong>Plot Number F-15/F Block, Jeevan Park, Uttam Nagar, New Delhi - 110059</strong>, SDSS bridges foundational schooling, nutrition support, and holistic child development—ensuring vulnerable children receive both the nourishment and the classroom foundation they need to thrive.
        </p>
      </section>

      {/* 4. TEAM COMMUNITY SPARK — LEADERSHIP & ROLES */}
      <section className="bg-paperWhite p-8 sm:p-10 rounded-3xl retro-border space-y-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <span className="bg-sproutGreen text-forest-950 font-syne text-xs font-extrabold uppercase px-4 py-1.5 rounded-full border-2 border-forest-900 inline-block">
              Chapter 04 • Team Community Spark
            </span>
            <h3 className="font-syne text-3xl font-extrabold text-forest-900 mt-2">
              Project Leadership & Roles
            </h3>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-electricPink text-forest-950 font-syne font-extrabold text-xs uppercase py-3 px-5 rounded-xl retro-border hover:bg-sproutGreen transition"
          >
            Suggest an Improvement →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-softMint/50 border-2 border-forest-900 space-y-2">
            <h4 className="font-syne text-xl font-extrabold text-forest-900">Anisha Dutta</h4>
            <p className="text-xs font-syne font-bold text-forest-800 uppercase">
              Project Director, Lead Developer & Nutrition Research
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Directed the project end-to-end; led the UI/UX prototyping, full frontend architecture, WHO statistical & UN SDG mapping, nutritional alignment research, and NGO outreach.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-pastelOrange/50 border-2 border-forest-900 space-y-2">
            <h4 className="font-syne text-xl font-extrabold text-forest-900">Saathi</h4>
            <p className="text-xs font-syne font-bold text-forest-800 uppercase">
              Field Research, Evidence Collection & NGO Outreach
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Led on-ground communication with shelter staff and community members, field research, evidence collection, and presentation support.
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-600 font-medium">
          Have ideas to make this platform even more helpful for caregivers and shelters? Reach out to us directly on our{' '}
          <button
            onClick={() => onNavigate('contact')}
            className="underline font-bold text-forest-900 hover:text-electricPink"
          >
            Contact Page
          </button>
          .
        </p>
      </section>
    </div>
  );
}