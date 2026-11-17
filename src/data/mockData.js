export const monthlyStars = [
  {
    id: "genius",
    title: "Genius of the Month",
    name: "Aarav Kumar",
    age: "Age: 9 Years",
    badgeColor: "bg-sproutGreen",
    cartoonBg: "bg-[#d8f3dc]",
    emoji: "🧠",
    subEmoji: "📚",
    highlight: "Completed 15 foundational logic puzzles and led peer reading circles all week.",
    streak: "100% Meal & Attendance Streak"
  },
  {
    id: "butterfly",
    title: "Social Butterfly of the Month",
    name: "Ananya Das",
    age: "Age: 8 Years",
    badgeColor: "bg-electricPink",
    cartoonBg: "bg-[#f7d6da]",
    emoji: "🦋",
    subEmoji: "🌻",
    highlight: "Welcomed three new shelter children and organized the afternoon storytelling club.",
    streak: "Active Peer Mentor"
  },
  {
    id: "athlete",
    title: "Athlete of the Month",
    name: "Rohan Singh",
    age: "Age: 10 Years",
    badgeColor: "bg-pastelOrange",
    cartoonBg: "bg-[#ffcca7]/60",
    emoji: "🏅",
    subEmoji: "⚡",
    highlight: "Clocked the fastest sprint in Friday's relay games and championed warm-up drills.",
    streak: "Healthy WHO Growth Curve"
  }
];

export const gazetteLetter = {
  issue: "Vol. IV • The Jeevan Park Chronicle",
  salutation: "Dearest Readers & Gentle Friends of SDSS,",
  paragraphs: [
    "Word travels swiftly through the corridors of Jeevan Park in Uttam Nagar, and this author is delighted to confirm the season's most delicious scandal: our kitchen's newly introduced Roasted Ragi & Jaggery Laddoos have officially stolen the spotlight from every afternoon snack in recent memory. Not a single crumb survived Tuesday's tea bell.",
    "Equally remarkable are the triumphs unfolding in our classrooms and courtyard. Between Aarav's unbeaten arithmetic streak and Rohan's lightning-fast relay sprints, it seems a steady regimen of fortified milk and sprouted moong works wonders far superior to any tonic in New Delhi.",
    "Until next week's ledger is inked—stay curious, eat your greens, and never underestimate the power of a well-logged lunch."
  ],
  signOff: "Yours in Perpetual Observation, The Chronicler of SDSS"
};

export const staffMembers = [
  {
    id: "staff-1",
    name: "Sunita Devi",
    designation: "Head Shelter Cook",
    roleTag: "Kitchen & Nutrition",
    accent: "bg-pastelOrange",
    avatarBg: "bg-forest-900 text-pastelOrange",
    initials: "SD",
    cartoonEmoji: "👩‍🍳",
    note: "Prepares daily high-protein meals, fortified milk, and seasonal produce tailored to children flagged on the WHO watch list."
  },
  {
    id: "staff-2",
    name: "Ramesh Verma",
    designation: "Meal & Ration Distributor",
    roleTag: "Portion & Supply",
    accent: "bg-sproutGreen",
    avatarBg: "bg-forest-900 text-sproutGreen",
    initials: "RV",
    cartoonEmoji: "🧺",
    note: "Manages portion distribution across breakfast, lunch, and evening snacks while verifying zero food wastage across age groups."
  },
  {
    id: "staff-3",
    name: "Meera Sharma",
    designation: "Lead Caregiver & Record Keeper",
    roleTag: "Attendance & Health Logs",
    accent: "bg-electricPink",
    avatarBg: "bg-forest-900 text-electricPink",
    initials: "MS",
    cartoonEmoji: "📋",
    note: "Logs daily attendance, tracks individual meal intake in the digital register, and monitors weekly weight and wellness checks."
  }
];

export const initialChildren = [
  {
    id: 1,
    name: "Aarav Kumar",
    age: 9,
    weight: 26.5,
    height: 131,
    whoStatus: "green",
    avatarEmoji: "👦🏽",
    specialty: "Mental Math & Origami",
    hindiQuote: "“पढ़ेंगे और आगे बढ़ेंगे — मैं ऐसे पुल बनाऊँगा जो बारिश में कभी न हिलें!”",
    englishQuote: "We will study and move forward — I want to build bridges that never shake in the rain!",
    presentToday: null,
    mealsToday: { breakfast: false, lunch: false, snack: false },
    checks: {
      weekly: "No fever or fatigue; appetite strong across all 6 shelter days.",
      monthly: "Gained +0.4 kg this month; HAZ & WAZ aligned with WHO median (0 SD).",
      yearly: "Annual pediatric screening clear; zero missed school days due to illness."
    }
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 6,
    weight: 16.2,
    height: 109,
    whoStatus: "yellow",
    avatarEmoji: "👧🏽",
    specialty: "Watercolor Painting",
    hindiQuote: "“मेरा पसंदीदा रंग आम जैसा पीला है, क्योंकि यह कागज़ पर धूप जैसा चमकता है।”",
    englishQuote: "My favorite color is mango yellow because it shines like sunshine on paper.",
    presentToday: null,
    mealsToday: { breakfast: false, lunch: false, snack: false },
    checks: {
      weekly: "Mild cold early in the week; recovered well with extra warm dal soup.",
      monthly: "Weight-for-age at -1.2 SD (Yellow Watch); added extra boiled egg/banana ration.",
      yearly: "Steady upward catch-up growth over the last 8 months."
    }
  },
  {
    id: 3,
    name: "Rohan Singh",
    age: 10,
    weight: 30.0,
    height: 137,
    whoStatus: "green",
    avatarEmoji: "🏃🏽‍♂️",
    specialty: "Track Sprints & Football",
    hindiQuote: "“जब मैं मैदान में तेज़ दौड़ता हूँ, तो लगता है जैसे पेड़ों के ऊपर उड़ रहा हूँ!”",
    englishQuote: "When I run fast on the field, it feels like I am flying over the trees!",
    presentToday: null,
    mealsToday: { breakfast: false, lunch: false, snack: false },
    checks: {
      weekly: "High energy levels; 100% breakfast and lunch completion.",
      monthly: "Optimal BMI-for-age Z-score; strong muscle recovery and hydration.",
      yearly: "Passed annual physical fitness and vision checkup with top marks."
    }
  },
  {
    id: 4,
    name: "Kabir Das",
    age: 5,
    weight: 13.8,
    height: 101,
    whoStatus: "red",
    avatarEmoji: "🧒🏽",
    specialty: "Clay Sculpting & Singing",
    hindiQuote: "“मैंने दीदी के लिए मिट्टी का छोटा हाथी बनाया है ताकि वह हमारी कक्षा की रक्षा करे।”",
    englishQuote: "I made a tiny clay elephant for Didi so it can guard our classroom.",
    presentToday: null,
    mealsToday: { breakfast: false, lunch: false, snack: false },
    checks: {
      weekly: "Flagged for low appetite twice this week; closely monitored by caregiver.",
      monthly: "Priority Watch: WHZ below -2 SD; receiving double protein & ragi supplement.",
      yearly: "Enrolled in intensive quarterly nutrition recovery plan with SDSS coordinator."
    }
  },
  {
    id: 5,
    name: "Ananya Das",
    age: 8,
    weight: 23.0,
    height: 124,
    whoStatus: "green",
    avatarEmoji: "👧🏻",
    specialty: "Storytelling & Drama",
    hindiQuote: "“हर बच्चे को प्यार, कहानी और पौष्टिक खाना मिलना चाहिए — यही हमारी ताकत है!”",
    englishQuote: "Every child deserves love, stories, and nutritious food — that is our strength!",
    presentToday: null,
    mealsToday: { breakfast: false, lunch: false, snack: false },
    checks: {
      weekly: "Active and cheerful; completed all daily meals and peer reading duties.",
      monthly: "Healthy growth velocity (+0.35 kg/month); normal WHO height & weight curves.",
      yearly: "Zero nutritional deficiencies; strong attendance across all 4 quarters."
    }
  },
  {
    id: 6,
    name: "Vivaan Verma",
    age: 7,
    weight: 18.4,
    height: 115,
    whoStatus: "yellow",
    avatarEmoji: "👦🏻",
    specialty: "Tabla & Rhythm Beats",
    hindiQuote: "“स्वस्थ तन में ही स्वस्थ मन बसता है — मुझे तबला बजाना सबसे अच्छा लगता है।”",
    englishQuote: "A healthy mind lives in a healthy body — playing the tabla is my favorite thing.",
    presentToday: null,
    mealsToday: { breakfast: false, lunch: false, snack: false },
    checks: {
      weekly: "Recovered from seasonal viral fever; appetite returning steadily.",
      monthly: "Mildly underweight (-1.1 SD); added evening roasted chana and jaggery.",
      yearly: "Consistent height gain; monitored monthly for steady weight recovery."
    }
  },
  {
    id: 7,
    name: "Meera Kumari",
    age: 9,
    weight: 25.8,
    height: 130,
    whoStatus: "green",
    avatarEmoji: "👧🏽",
    specialty: "Science Experiments & Gardening",
    hindiQuote: "“जैसे पौधों को पानी और धूप चाहिए, वैसे ही हमें सही पोषण और शिक्षा चाहिए।”",
    englishQuote: "Just like plants need water and sunlight, we need right nutrition and education.",
    presentToday: null,
    mealsToday: { breakfast: false, lunch: false, snack: false },
    checks: {
      weekly: "Excellent energy; helps tend the SDSS kitchen herb garden.",
      monthly: "All WHO Z-scores squarely inside the healthy green median zone.",
      yearly: "Clear dental, vision, and hemoglobin checkup."
    }
  },
  {
    id: 8,
    name: "Devansh Yadav",
    age: 6,
    weight: 14.9,
    height: 105,
    whoStatus: "red",
    avatarEmoji: "🧒🏻",
    specialty: "Building Blocks & Puzzles",
    hindiQuote: "“बड़ा होकर मैं डॉक्टर बनूँगा और अपने मोहल्ले के सभी बच्चों का इलाज करूँगा।”",
    englishQuote: "When I grow up I will become a doctor and care for all the children in my neighborhood.",
    presentToday: null,
    mealsToday: { breakfast: false, lunch: false, snack: false },
    checks: {
      weekly: "Requires caregiver encouragement at lunch; finished full dal & roti today.",
      monthly: "Red Alert (-2.1 SD WAZ): Assigned fortified milk + ragi laddoo double ration.",
      yearly: "Gained 1.6 kg since joining SDSS; requires continued priority nutrition."
    }
  },
  {
    id: 9,
    name: "Kavya Joshi",
    age: 8,
    weight: 22.4,
    height: 122,
    whoStatus: "green",
    avatarEmoji: "👧🏽",
    specialty: "Classical Dance & Poetry",
    hindiQuote: "“सपने वो नहीं जो नींद में आएँ, सपने वो हैं जो हमें हर सुबह मुस्कुराकर जगाएँ!”",
    englishQuote: "Dreams are not what we see in sleep; dreams are what wake us up smiling every morning!",
    presentToday: null,
    mealsToday: { breakfast: false, lunch: false, snack: false },
    checks: {
      weekly: "No illness reported; high stamina during afternoon dance practice.",
      monthly: "Steady weight and height progression along the 50th WHO percentile.",
      yearly: "Full annual immunization and wellness check verified."
    }
  },
  {
    id: 10,
    name: "Arjun Rawat",
    age: 11,
    weight: 33.2,
    height: 142,
    whoStatus: "green",
    avatarEmoji: "🧑🏽",
    specialty: "Chess & Peer Tutoring",
    hindiQuote: "“सही पोषण, उज्ज्वल भविष्य — हम सब मिलकर अपने सपनों को सच करेंगे!”",
    englishQuote: "Right nutrition, bright future — together we will turn our dreams into reality!",
    presentToday: null,
    mealsToday: { breakfast: false, lunch: false, snack: false },
    checks: {
      weekly: "100% attendance and meal intake; mentors younger children in math.",
      monthly: "Strong growth velocity; healthy BMI-for-age and hemoglobin levels.",
      yearly: "Top physical and academic readiness evaluation for formal school."
    }
  }
];

export const pastCalendarLogs = {
  "2026-11-15": {
    locked: true,
    submittedBy: "Meera Sharma (Lead Caregiver)",
    summary: "10/10 Present • 100% Breakfast & Lunch Logged",
    records: [
      { name: "Aarav Kumar", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Priya Sharma", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Rohan Singh", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Kabir Das", status: "Present", meals: "Breakfast, Lunch, Snack (+Ragi)" },
      { name: "Ananya Das", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Vivaan Verma", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Meera Kumari", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Devansh Yadav", status: "Present", meals: "Breakfast, Lunch, Snack (+Ragi)" },
      { name: "Kavya Joshi", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Arjun Rawat", status: "Present", meals: "Breakfast, Lunch, Snack" }
    ]
  },
  "2026-11-16": {
    locked: true,
    submittedBy: "Meera Sharma (Lead Caregiver)",
    summary: "9/10 Present • 1 Excused (Family Visit)",
    records: [
      { name: "Aarav Kumar", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Priya Sharma", status: "Absent", meals: "N/A" },
      { name: "Rohan Singh", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Kabir Das", status: "Present", meals: "Breakfast, Lunch, Snack (+Ragi)" },
      { name: "Ananya Das", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Vivaan Verma", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Meera Kumari", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Devansh Yadav", status: "Present", meals: "Breakfast, Lunch, Snack (+Ragi)" },
      { name: "Kavya Joshi", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Arjun Rawat", status: "Present", meals: "Breakfast, Lunch, Snack" }
    ]
  },
  "2026-11-17": {
    locked: true,
    submittedBy: "Ramesh Verma (Distributor)",
    summary: "10/10 Present • Weekly Weight & WHO Check Completed",
    records: [
      { name: "Aarav Kumar", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Priya Sharma", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Rohan Singh", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Kabir Das", status: "Present", meals: "Breakfast, Lunch, Snack (+Ragi)" },
      { name: "Ananya Das", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Vivaan Verma", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Meera Kumari", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Devansh Yadav", status: "Present", meals: "Breakfast, Lunch, Snack (+Ragi)" },
      { name: "Kavya Joshi", status: "Present", meals: "Breakfast, Lunch, Snack" },
      { name: "Arjun Rawat", status: "Present", meals: "Breakfast, Lunch, Snack" }
    ]
  }
};