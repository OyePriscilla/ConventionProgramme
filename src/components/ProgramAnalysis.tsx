import { useState, useEffect } from "react";

const days = [
  {
    date: "18 July",
    label: "Day 1: Welcome Service",
    content: `
      <h3 class="text-lg font-semibold mb-2">DIVISION I – INTRODUCTION AND DEFINITION OF TERMS</h3>
<p class="text-sm text-gray-700 dark:text-gray-300">
      The Gospel According to Saint John presents Jesus as the Eternal Word of God and the Paschal Lamb who takes away the sin of the world (John 1:29). The lamb symbolizes a sacrificial animal used for atonement—to redeem humanity from sin (a type of Christ).
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">A. BEHOLD</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li>Means to look at or observe something important or wondrous.</li>
      <li>See with attention (John 1:29, Rev. 3:20)</li>
      <li>Look with dependence (Psalm 123:2; 141:8)</li>
      <li>Fix eyes with hope (Heb. 12:2, John 3:14–15)</li>
      <li>Focus with expectation (2 Cor. 5:17b)</li>
</ul>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">B. LAMB</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li>Symbolic of Christ—pure, innocent, sacrificed for redemption.</li>
      <li>A young sheep (Exodus 12:5)</li>
      <li>Gentle (Matt. 11:29), Innocent (1 Pet. 1:19)</li>
      <li>Vulnerable and dependent (Luke 10:3)</li>
      <li>Associated with sacrifice (1 John 2:2, 1 Cor. 5:7)</li>
</ul>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">C. GOD</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li>Perfect (Matt. 5:48, Deut. 32:4)</li>
      <li>Greater than all (Psalm 90:2, 113:4–5)</li>
      <li>Ruler of heaven and earth (Psalm 47:7–8, Dan. 4:17)</li>
      <li>Faithful (2 Tim. 2:13, 1 John 1:9)</li>
      <li>Omnipotent (Jer. 32:17), Omnipresent (Psalm 139:7–12)</li>
      <li>Omniscient (Psalm 147:5b, 139:2–4)</li>
</ul>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">D. SIN</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li>Anything contrary to God's will.</li>
      <li>Thoughts (Matt. 5:27–28, Mark 7:21–23)</li>
      <li>Words (Prov. 10:19, James 3:2–12)</li>
      <li>Actions (Exodus 20:1–17, Gal. 5:19–21)</li>
</ul>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">E. WORLD</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li>The planet inhabited by humans (2 Peter 3:5–7)</li>
      <li>Creation (Gen. 1:1, Psalm 24:1)</li>
      <li>Human society (John 1:10, 1 John 2:15–17)</li>
      <li>The spiritual realm (Eph. 2:2, John 14:30)</li>
</ul>
    `,
  },
  {
    date: "19 July",
    label: "Day 2: Saturday Convention Service",
    content: `
      <h3 class="text-lg font-semibold mb-2">DIVISION II – SATURDAY CONVENTION SERVICE</h3>
<p class="text-sm text-gray-700 dark:text-gray-300">
      Jesus as the Paschal Lamb: In line with the definition of terms (1 Cor. 5:7, John 1:29).<br/>
      The lamb is a young sheep, typically in its first year. Lambs are:
</p>

<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300 mt-2">
      <li>Adorable – appealing appearance (Exodus 12:5)</li>
      <li>Vulnerable – dependent on the shepherd (Psalm 23:1)</li>
      <li>Playful – energetic by nature</li>
</ul>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Symbolism of the Lamb</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li>Sacrifice – offered for sin and peace (Leviticus 23:19)</li>
      <li>Messianic Fulfillment – led to slaughter (Isaiah 53:7; Romans 5:6, 8; 4:25)</li>
      <li>Redemption – fulfilled in Jesus (Exodus 12:3–13; 1 Cor. 5:7; Col. 1:13–14)</li>
</ul>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Characteristics of a Lamb</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li>Innocence (1 Peter 1:18–19)</li>
      <li>Gentleness (Philippians 2:8–9; Matthew 11:29, 12:19–20)</li>
      <li>Sacrifice (Exodus 12:3–5; Numbers 28:3–4)</li>
</ul>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Christian Symbolism</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li>Redemption (Ephesians 1:7; Galatians 3:13; Colossians 1:14)</li>
      <li>Purity (Exodus 12:5; 1 Cor. 5:7)</li>
      <li>Compassion (Mark 14:61)</li>
      <li>
        Jesus, the “Lamb of God” (John 1:29), exemplifies sacrifice, purity, and gentleness.
        Believers are to reflect His nature (1 Peter 2:21–25)
      </li>
</ul>

    `,
  },
  {
    date: "20 July",
    label: "Day 3: Sunday Convention Service",
    content: `
      <h3 class="text-lg font-semibold mb-2">DIVISION III – TYPES OF SIN AND HOW TO BEHOLD THE LAMB <span class="text-sm text-gray-400">(To deal with sinful living.)</span></h3>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Introduction</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
      Sin is disobedience to God—doing what He forbids or refusing what He commands. Sin appears in thoughts, words, and actions.
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Categories of Sin</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li><strong>Physical Sins:</strong> Foolish jesting, drunkenness, indecent dressing (Ephesians 5:4, Matt. 12:24, Deut. 5:11). Theft, adultery, rape, homosexuality, lesbianism, incest (Isaiah 3:16–17, 1 Cor. 10:8, Exodus 20:14–15, Genesis 19:5, 2 Sam. 13:1–3).</li>
      <li><strong>Spiritual Sins:</strong> Inner uncleanness, fellowship with darkness (Matt. 23:25, Eph. 5:11), addiction to secular music, social media obsession (1 Cor. 6:12).</li>
      <li><strong>Mental Sins:</strong> Pornography, masturbation, lustful imagination (Matt. 5:27–28).</li>
      <li><strong>Oral Sins:</strong> Evil speaking, backbiting, and cursing (Col. 3:8, Eph. 4:29, 2 Cor. 12:20, James 3:10).</li>
</ul>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Examples and Consequences of Sin</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li>Zimri and Cozbi – Numbers 25:14–15</li>
      <li>Hophni and Phinehas – 1 Samuel 4:17</li>
      <li>Samson – Judges 16:21</li>
      <li>Amnon – 2 Samuel 13:1–5</li>
      <li>The Prodigal Son – Luke 15:11–32</li>
      <li>The Adulterous Woman – John 8:4–5</li>
      <li>Judas Iscariot – Matthew 27:3–5</li>
</ul>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">How to Behold the Lamb of God</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
      <li>Confess and forsake sin (Prov. 28:13, Isaiah 55:7, 1 John 1:9)</li>
      <li>Study God’s Word (2 Tim. 3:15, Col. 3:16, Joshua 1:8)</li>
      <li>Pray constantly (Luke 18:1, 1 Thess. 5:17)</li>
      <li>Rely on the Holy Spirit (John 14:26, Acts 1:8)</li>
      <li>Fast regularly (Mark 9:29, Isaiah 58:3–12)</li>
      <li>Look unto Jesus (Hebrews 12:2)</li>
      <li>Cultivate the mind of Christ (Philippians 2:5)</li>
      <li>Participate actively in church life (Hebrews 10:25, Acts 2:46)</li>
</ul>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Application</h4>

    `,
  },
];

const ProgramAnalysisTab = () => {
  const [activeDay, setActiveDay] = useState(""); // Initialize with an empty string

  useEffect(() => {
    const today = new Date();
    // Set the date based on the provided convention dates (July 18, 19, 20, 2025)
    const conventionDates = {
      18: "18 July",
      19: "19 July",
      20: "20 July",
    };

    const currentDayOfMonth = today.getDate(); // e.g., 18, 19, 20
    const currentMonth = today.getMonth(); // 0 for Jan, 6 for July
    const currentYear = today.getFullYear(); // 2025

    // Check if current date falls within convention dates in July 2025
    if (
      currentYear === 2025 &&
      currentMonth === 6 && // July is month 6 (0-indexed)
      conventionDates[currentDayOfMonth]
    ) {
      setActiveDay(conventionDates[currentDayOfMonth]);
    } else {
      // Default to the first day if outside the convention period or for other months/years
      setActiveDay(days[0].date);
    }
  }, []); // Run once on component mount

  const selected = days.find((day) => day.date === activeDay);

  return (
    // General card with black background
    <div className="bg-black min-h-screen text-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title for the section */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-400">
          OUTLINE FOR SPEAKERS
        </h2>

        {days.map((dayData) => (
          <div key={dayData.date} className="mb-6 bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
            {/* Accordion Header - styled like program schedule headers */}
            <button
              onClick={() => setActiveDay(activeDay === dayData.date ? "" : dayData.date)}
              className={`w-full flex justify-between items-center p-5 cursor-pointer transition-all duration-300 ease-in-out text-white focus:outline-none
                ${
                  activeDay === dayData.date
                    ? "bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700" // Active state gradient
                    :"bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700" // Inactive state
                }
              `}
            >
              <span className="text-xl sm:text-2xl font-bold">
                {dayData.label}
              </span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  activeDay === dayData.date ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {/* Accordion Content */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                activeDay === dayData.date ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden p-0">
                <div className="bg-white/95 backdrop-blur-sm rounded-b-xl p-6 md:p-8 border-t border-gray-300">
                  <div className="prose prose-lg max-w-none text-gray-800">
                    <style>{`
                      /* Consistent styling for content within the accordion */
                      .prose h3 {
                        color: #1f2937;
                        font-size: 1.75rem;
                        font-weight: 800;
                        margin-bottom: 1.5rem;
                        text-align: center;
                        background: linear-gradient(45deg, #4F46E5, #9333EA);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                      }
                      .prose h4 {
                        color: #374151;
                        font-size: 1.4rem;
                        font-weight: 700;
                        margin-top: 2rem;
                        margin-bottom: 1rem;
                        border-bottom: 2px solid #D1D5DB;
                        padding-bottom: 0.5rem;
                      }
                      .prose p {
                        color: #374151;
                        font-size: 1.1rem;
                        line-height: 1.8;
                        text-align: justify;
                        margin-bottom: 1.25rem;
                      }
                      .prose ul {
                        margin-left: 2rem;
                        margin-bottom: 1.75rem;
                        list-style-type: disc;
                      }
                      .prose li {
                        color: #4b5563;
                        font-size: 1.05rem;
                        line-height: 1.7;
                        margin-bottom: 0.75rem;
                        text-align: justify;
                      }
                      .prose ul li::marker {
                        color: #4F46E5;
                        font-weight: bold;
                      }
                      .prose strong {
                        color: #1F2937;
                      }
                    `}</style>
                    {activeDay === dayData.date && <div dangerouslySetInnerHTML={{ __html: dayData.content }} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramAnalysisTab;