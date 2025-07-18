import { useState, useEffect } from "react";

const days = [
  {
    date: "18 July, 4:30pm",
    label: "Day 1: Welcome Anthem",
    content: `
      <h3 class="text-lg font-semibold mb-2">WELCOME SERVICE ANTHEM: <br/> Eku Abo / Behold the Lamb </h3>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Prelude</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Iwo loye <strong>(2x)</strong> o Iwo loye o lati gba gbogbo ogo.<br/>
  Fun ojo oni t'omu ki o ba wa l'aye, awa l'alafia o se o Baba.<br/>
  Gege bi egbe odo ipinle Oke-Afa ipejopo mimo akoko iru re o soju emi wa.<br/>
  Koko oro lati inu iwe Mimo Ihinrere Johanu ori kini, ese ookandinlogbon to wipe...<br/>
  <strong class="text-yellow-600">Wo Odo-Aguntan Olorun.</strong> E farabale lati ko eko lati ori ite Olorun wa.
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Chorus</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  E ku abo l'anwi eku abo l'anki yin <strong>(×2)</strong> Se daada l'ede?<br/>
  Se ko rera pupo.<br/>
  <strong class="text-yellow-600">E ku abo l'anwi se daada nile wa?</strong>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Verse 1</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  We welcome you our father, the Superintendent and our mother we welcome you, area council we welcome you, all the ministers and our mothers<br/>
  <strong class="text-yellow-600">to first youth Convention of Oke-Afa, God bless you, eku abo.</strong><br/>
  <span class="italic">(Repeat Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Verse 2</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Eyin ara wa gbogbo a nki yin o, lati agbegbe Oke-Afa, agbegbe Festac ati agbegbe Okota, l'okunrin l'obinrin ati ayanfe gbogbo ti e wa, pe eku abo e ku irina.<br/>
  <strong class="text-yellow-600">Se daada l'ede Ipada sile yin koni lewu, e ku abo.</strong><br/>
  <span class="italic">(Repeat Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Interlude</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Af'ope f'olofun
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Call & Response</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  <strong>Lead Vocal:</strong> The Lord has sent message through our fathers to us, John chapter one verse 29:<br/>
  <strong class="text-yellow-600">Behold the Lamb of God</strong>
</p>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
  <li><strong>Call:</strong> Our Fathers <strong>Response:</strong> Behold the Lamb of God</li>
  <li><strong>Call:</strong> Our Mothers <strong>Response:</strong> Behold the Lamb of God</li>
  <li><strong>Call:</strong> Oke-Afa District <strong>Response:</strong> Behold the Lamb of God</li>
  <li><strong>Call:</strong> Festac District <strong>Response:</strong> Behold the Lamb of God</li>
  <li><strong>Call:</strong> Okota District <strong>Response:</strong> Behold the Lamb of God</li>
  <li><strong>Call:</strong> Every youth movement <strong>Response:</strong> Behold the Lamb of God</li>
  <li><strong>Call:</strong> Every Children of God <strong>Response:</strong> Behold the Lamb of God</li>
  <li><strong>Call:</strong> Every believer <strong>Response:</strong> Behold the Lamb of God</li>
  <li><strong>Call:</strong> Heavenly Candidates <strong>Response:</strong> Behold the Lamb of God</li>
  <li><strong>Call:</strong> He washed our sins away <strong>Response:</strong> Behold the Lamb of God</li>
</ul>
<p class="text-sm text-gray-700 dark:text-gray-300">
  <strong>Call & Response:</strong> <strong class="text-yellow-600">Behold the Lamb of God (×3)</strong>
</p>
    `,
  },
  {
    date: "19 July, 9:00am",
    label: "Day 2: Saturday Convention Service Anthem",
    content: `
      <h3 class="text-lg font-semibold mb-2">SATURDAY CONVENTION SERVICE ANTHEM: <br/>Behold the Lamb</h3>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Chorus</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Behold the lamb he sits upon the throne<br/>
  Behold the lamb he's right here with us<br/>
  Behold the Lamb he sits upon the throne<br/>
  <strong class="text-yellow-600">He reigns in Majesty.</strong>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Verse 1</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Christ the Lamb of God is here with us<br/>
  He dwells therein with the saints<br/>
  By His blood he dearly bought us<br/>
  <strong class="text-yellow-600">Worthy is the Lamb on the throne.</strong><br/>
  <span class="italic">(Repeat Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Verse 2</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Behold the kingdom of God is within us<br/>
  Lo and behold the kingdom of God is here<br/>
  The kingdom of God is in neither North nor South.<br/>
  Neither East or West the kingdom of God is here.<br/>
  <span class="italic">(Repeat Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Call & Response</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
  <li><strong>Call:</strong> He reigns in Majesty <strong>Response:</strong> He reigns in Majesty</li>
  <li><strong>Call:</strong> The Prince of peace reigns <strong>Response:</strong> He reigns in Majesty</li>
  <li><strong>Call:</strong> The Lord of Host reigns <strong>Response:</strong> He reigns in Majesty (×2)</li>
</ul>
    `,
  },
  {
    date: "19 July, 4:00pm",
    label: "Day 2: Saturday Tarrying and Healing Service Anthem",
    content: `
      <h3 class="text-lg font-semibold mb-2">SATURDAY HEALING SERVICE ANTHEM <span class="text-sm text-gray-400">(Holy Ghost, You and I Will Change the World)</span></h3>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Verse 1</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Oh oh holy ghost<br/>
  Fire within in my soul<br/>
  Oh oh holy ghost<br/>
  Fire in my bones<br/>
  Oh oh holy ghost<br/>
  The power in my life<br/>
  <strong class="text-yellow-600">Holy ghost, you and I<br/>
  Will change the world</strong><br/>
  Oh oh holy ghost<br/>
  Fire within in my soul<br/>
  Oh oh holy ghost<br/>
  Fire in my bones<br/>
  Oh oh holy ghost<br/>
  The power in my life<br/>
  <strong class="text-yellow-600">Holy ghost, you and I<br/>
  Will change the world (×3)</strong>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Verse 2</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Oh oh holy ghost<br/>
  Light within my soul<br/>
  Oh oh holy ghost<br/>
  Fire in my bones<br/>
  Oh oh holy ghost<br/>
  The power in my life<br/>
  <strong class="text-yellow-600">Holy ghost, you and I<br/>
  Will change the world</strong><br/>
  Oh oh holy ghost<br/>
  Light within my soul<br/>
  Oh oh holy ghost<br/>
  Fire in my bones<br/>
  Oh oh holy ghost<br/>
  The power in my life<br/>
  <strong class="text-yellow-600">Holy ghost, you and I<br/>
  Will change the world (×3)</strong><br/>
  <strong class="text-yellow-600">Holy ghost you and I<br/>
  Will change the world (×4)</strong>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Verse 3</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  <strong class="text-yellow-600">We change the world (×8)</strong><br/>
  Oh oh holy ghost<br/>
  Fire within in my soul<br/>
  Oh oh holy ghost<br/>
  Fire in my bones<br/>
  Oh oh holy ghost<br/>
  The power in my life<br/>
  <strong class="text-yellow-600">Holy ghost, you and I<br/>
  Will change the world</strong>
</p>
    `,
  },
  {
    date: "20 July, 9:00am",
    label: "Day 3: Sunday Convention Service Anthem",
    content: `
      <h3 class="text-lg font-semibold mb-2">SUNDAY CONVENTION SERVICE ANTHEM <span class="text-sm text-gray-400">(Ewa Wo Jesu)</span></h3>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Prelude / Chorus</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  E wa wo Jesu Olugbala wa<br/>
  Se bi Oun lo ku Oun lo gba wa<br/>
  <strong class="text-yellow-600">Gbogbo ayeeee (×2)</strong>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Verse 1</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  E wo Jesu t’O ku fun araye<br/>
  Eni to mu ese gbogbo wa lo o<br/>
  O lagbara lati mu wa de orun<br/>
  K’O si we gbogbo ese wa nu<br/>
  <strong class="text-yellow-600">Mimo o (×4) ni Jesu</strong><br/>
  Awa ti ri Olugbala wa o.<br/>
  <span class="italic">(Repeat Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Verse 2</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Awa ti ri Jesu Eni aferan<br/>
  Eni t’O fi aye re fun wa o<br/>
  Eni t’O ku<br/>
  To si ji lojo meta o<br/>
  Eni to ku lati mu wa de orun<br/>
  <strong class="text-yellow-600">Mimo o (×4) ni Jesu</strong><br/>
  Awa ti ri Olugbala wa o.<br/>
  <span class="italic">(Repeat Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Bridge</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  <strong class="text-yellow-600">Mimo (×3)</strong><br/>
  <strong class="text-yellow-600">Olugbala araye. (×4)</strong>
</p>
    `,
  },
  {
    date: "20 July, 2:00pm",
    label: "Day 3: Farewell Service Anthem",
    content: `
      <h3 class="text-lg font-semibold mb-2">SUNDAY THANKSGIVING SERVICE ANTHEM <span class="text-sm text-gray-400">(Iyanu L'Oluwa)</span></h3>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Chorus</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  <strong class="text-yellow-600">Iyanu l'Oluwa yi o se iyanu ni o</strong><br/>
  <strong class="text-yellow-600">Iyanu l'Oluwa yi o se iyanu nla (Repeat)</strong><br/>
  Bo ti wi lo ma ri e o iyanu yo sele l'Oluwa so
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Solo 1</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Ona yo la lori okun omi yo san l'aginju<br/>
  B'Oluwa ti wi lo ma ri e o<br/>
  <strong class="text-yellow-600">Iyanu yi o sele l'Oluwa so</strong><br/>
  <span class="italic">(Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Solo 2</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Iji to nja dakeje o Baba yio se iyanu o<br/>
  B'Oluwa ti wi lo ma ri iyanu yio sele l'Oluwa so<br/>
  <span class="italic">(Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Solo 3</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Agan yio yo l'Oluwa wi o ayo yio po l'okan wa<br/>
  B'Oluwa ti wi lo ma ri b'Oluwa ti wi lo ti ri<br/>
  <strong class="text-yellow-600">Iyanu yio sele l'Oluwa so</strong><br/>
  <span class="italic">(Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">All</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  Baba yio se iyanu o se o gbagbo<br/>
  Baba yio ya wa lenu se o gbagbo<br/>
  B'Oluwa ti wi lo mari iyanu yio sele l'Oluwa so<br/>
  <span class="italic">(Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Coda</h4>
<p class="text-sm text-gray-700 dark:text-gray-300">
  <strong class="text-yellow-600">Iyanu (×3) nla o Iyanu (×3) nla (Repeat)</strong><br/>
  <strong class="text-yellow-600">Iyanu (×3) to koja oye</strong><br/>
  <strong class="text-yellow-600">Iyanu (×3)</strong><br/>
  <span class="italic">(Chorus)</span>
</p>

<h4 class="mt-4 font-semibold text-sm text-yellow-400">Call & Response</h4>
<ul class="list-disc ml-6 text-sm text-gray-700 dark:text-gray-300">
  <li><strong>Call:</strong> Iyanu yio sele l'Oluwa wi o <strong>Resp:</strong> Iyanu yio sele l'Oluwa so</li>
  <li><strong>Call:</strong> Bo ba ti gbagbo <strong>Resp:</strong> Iyanu yio sele l'Oluwa so</li>
  <li><strong>Call:</strong> Ni iwoyi amodun a o jo pejo <strong>Resp:</strong> Iyanu yio sele l'Oluwa so</li>
  <li><strong>Call:</strong> Oro eri lenu wa l'amodun <strong>Resp:</strong> Iyanu yio sele l'Oluwa so</li>
  <li><strong>Call:</strong> Pe Oluwa ti se eee <strong>Resp:</strong> Iyanu yio sele l'Oluwa so</li>
</ul>
    `,
  },
];

const ConventionAnthems = () => {
  const [activeDay, setActiveDay] = useState(""); // Initialize with an empty string

  useEffect(() => {
    const today = new Date();
    const currentDayOfMonth = today.getDate(); // e.g., 18, 19, 20
    const currentMonth = today.getMonth(); // 0 for Jan, 6 for July
    const currentYear = today.getFullYear(); // 2025

    let defaultActiveDay = days[0].date; // Default to the first anthem

    // Find the anthem that matches the current day in July 2025
    if (currentYear === 2025 && currentMonth === 6) { // Check for July 2025
      const foundAnthemForToday = days.find(item => item.date.startsWith(`${currentDayOfMonth} July`));
      if (foundAnthemForToday) {
        defaultActiveDay = foundAnthemForToday.date;
      }
    }
    setActiveDay(defaultActiveDay);
  }, []); // Run once on component mount

  const selected = days.find((day) => day.date === activeDay);

  return (
    // General card with black background
    <div className="bg-black min-h-screen text-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title for the section */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-400">
          CONVENTION ANTHEMS
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
                    : "bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700" // Inactive state background
                }
              `}
            >
              <span className="text-xl sm:text-2xl font-bold">
                {dayData.label} {/* Display the full label */}
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

export default ConventionAnthems;