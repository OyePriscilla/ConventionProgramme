import { useState } from "react";

interface ProgramEvent {
  time: string;
  title: string;
  icon?: string;
  description: string;
}

interface ProgramDay {
  day: string;
  date: string;
  events: ProgramEvent[];
}

function App() {
  const churchProgram: ProgramDay[] = [
    {
      day: "Day 1",
      date: "Friday, June 11th, 4:00pm, Welcome Service",
      events: [
        {
          time: "4:00 PM",
          title: "Hymns",
          icon: "🎶",
          description: `Hymn Announcer: Sis. Beatitudes; <br>Hymns: RH 712, RH 370 & RH 393`,
        },
        {
          time: "7:00 PM",
          title: "Scripture Reading",
          icon: "📖",
          description: "Matt. 5:5 - Bro. Blessedness",
        },
        { time: "7:45 PM", title: "Anthem", icon: "🎵", description: "Okota District" },
        {
          time: "8:45 PM",
          title: "Chorus Leaders",
          icon: "🎤",
          description: "Sis. Grace, Brother Mercy & Sis. Love",
        },
        {
          time: "8:45 PM",
          title: "Interpreters",
          icon: "🗣️",
          description: "Sis. Hope & Dcn. Faith",
        },
        {
          time: "8:45 PM",
          title: "Prohetical Ministration",
          icon: ":🔮",
          description: "We trust the Lord to speak through His servants...",
        },
        {
          time: "8:45 PM",
          title: "Theme Analysis (Ministry Plan)",
          icon: "📘",
          description:
            `<strong>BACKGROUND/INTRODUCTION TO THE THEME; </strong><br> Song of Solomon was a collection of core poems, picturing the relationship between God and His people.<br> Also picturing the relationship between Christ and the Church. For instance, Ephesians 5:238 says: "Christ is the Head of the Church; And He is the Saviour of the body. Ephesians 5:25 says, "Husband ...........`,
        },
      ],
    },
    {
      day: "Day 2",
      date: "Saturday, June 11th",
      events: [
        {
          time: "9:00 AM",
          title: "Convention Service",
          icon: "⛪",
          description: "A refreshing time of communal worship and reflection...",
        },
        {
          time: "8:45 PM",
          title: "Prohetical Ministration",
          icon: ":🔮",
          description: "We trust the Lord to speak through His servants...",
        },
        {
          time: "10:00 AM",
          title: "Tarry & Healing",
          icon: "🙏",
          description: "A time to be revived",
        },
        {
          time: "11:30 AM",
          title: "Bible Teaching",
          icon: "📖",
          description: "Qualities of a Lamb",
        },
      ],
    },
    {
      day: "Day 3",
      date: "Sunday, June 11th",
      events: [
        {
          time: "9:30 AM",
          title: "Sunday School",
          icon: "🏫",
          description: "A time for in-depth Bible study and discussion...",
        },
        {
          time: "11:00 AM",
          title: "Convention Service",
          icon: "⛪",
          description: "...",
        },
        {
          time: "8:45 PM",
          title: "Prohetical Ministration",
          icon: ":🔮",
          description: "We trust the Lord to speak through His servants...",
        },
        {
          time: "12:30 PM",
          title: "Thanksgiving Service",
          icon: "🙏",
          description: "...",
        },
      ],
    },
  ];

  const [openDayIndex, setOpenDayIndex] = useState<number | null>(0);
  const [activeEventIndices, setActiveEventIndices] = useState<number[]>(
    churchProgram.map(() => -1)
  );

  const toggleDay = (index: number) => {
    setOpenDayIndex(openDayIndex === index ? null : index);
    if (openDayIndex === index) {
      const newActiveEventIndices = [...activeEventIndices];
      newActiveEventIndices[index] = -1;
      setActiveEventIndices(newActiveEventIndices);
    }
  };

  const toggleEventDescription = (dayIndex: number, eventIndex: number) => {
    const newActiveEventIndices = [...activeEventIndices];
    newActiveEventIndices[dayIndex] =
      newActiveEventIndices[dayIndex] === eventIndex ? -1 : eventIndex;
    setActiveEventIndices(newActiveEventIndices);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 font-inter py-10 px-4">
      <div className="max-w-screen-2xl mx-auto">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-xl shadow-md p-6 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            TACN Oke-Afa Area Youth/Witnesses Convention
          </h2>
          <p className="text-lg mt-2 opacity-90">
            Order of Program — Join us for three days of spiritual enrichment!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {churchProgram.map((dayData, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-blue-200 dark:border-gray-700"
            >
              <button
                onClick={() => toggleDay(dayIndex)}
                className="w-full flex justify-between items-center px-5 py-4 bg-blue-50 dark:bg-gray-700 rounded-t-xl cursor-pointer focus:outline-none hover:bg-blue-100 dark:hover:bg-gray-600 transition"
              >
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-white">{dayData.day}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{dayData.date}</p>
                </div>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${openDayIndex === dayIndex ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDayIndex === dayIndex ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="divide-y divide-gray-200 dark:divide-gray-600 px-5 py-3">
                  {dayData.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="py-3">
                      <button
                        onClick={() => toggleEventDescription(dayIndex, eventIndex)}
                        className="w-full flex justify-between items-center text-left"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{event.icon}</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {event.title}
                          </span>
                        </div>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            activeEventIndices[dayIndex] === eventIndex ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`transition-all ease-in-out overflow-hidden ${
                          activeEventIndices[dayIndex] === eventIndex ? "max-h-96 pt-2 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div
                          className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2"
                          dangerouslySetInnerHTML={{ __html: event.description }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
