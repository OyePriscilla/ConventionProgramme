import { useState } from "react";

interface ProgramEvent {
  time: string;
  title: string;
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
      date: "Friday, July 26th, 4:00pm, Welcome Service",
      events: [
        {
          time: "4:00 PM",
          title: "Hymns",
          description:
            "Hymn Announcer: Sis. Beatitudes; Hymns: RH 712, RH 370 & RH 393",
        },
        {
          time: "7:00 PM",
          title: "Scripture Reading",
          description: "Matt. 5:5 - Bro. Blessedness",
        },
        { time: "7:45 PM", title: "Anthem", description: "Okota District" },
        {
          time: "8:45 PM",
          title: "Chorus Leaders",
          description: "Sis. Grace, Brother Mercy & Sis. Love",
        },
        {
          time: "8:45 PM",
          title: "Interpreters",
          description: "Sis. Hope & Dcn. Faith",
        },
        {
          time: "8:45 PM",
          title: "Theme Analysis (Ministry Plan)",
          description:
            `<strong>BACKGROUND/INTRODUCTION TO THE THEME; </strong><br> Song of Solomon was a collection of core poems, picturing the relationship between God and His people.<br> Also picturing the relationship between Christ and the Church. For instance, Ephesians 5:238 says: "Christ is the Head of the Church; And He is the Saviour of the body. Ephesians 5:25 says, "Husband ...........`,
        },
      ],
    },
    {
      day: "Day 2",
      date: "Saturday, July 27th",
      events: [
        {
          time: "9:00 AM",
          title: "Convention Service",
          description:
            "A refreshing time of communal worship and reflection to start the day. Features devotional readings, hymns, and contemporary praise songs designed to uplift and inspire.",
        },
        {
          time: "10:00 AM",
          title: "Tarry & Healing",
          description: "A time to be revived",
        },
        {
          time: "11:30 AM",
          title: "Bible Teaching",
          description: "Qualities of a Lamb",
        },
      ],
    },
    {
      day: "Day 3",
      date: "Sunday, July 28th",
      events: [
        {
          time: "9:30 AM",
          title: "Sunday School",
          description:
            "A time for in-depth Bible study and discussion, focusing on the teachings of Jesus and their application in our daily lives. This session encourages participation and sharing of insights among attendees.",
        },
        {
          time: "11:00 AM",
          title: "Convention Service",
          description:
            "...",
        },
        {
          time: "12:30 PM",
          title: "Thanksgiving Service",
          description:
            "...",
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
    if (newActiveEventIndices[dayIndex] === eventIndex) {
      newActiveEventIndices[dayIndex] = -1;
    } else {
      newActiveEventIndices[dayIndex] = eventIndex;
    }
    setActiveEventIndices(newActiveEventIndices);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 font-inter p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl border border-blue-300 dark:border-purple-700 max-w-4xl w-full text-center">
        <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
          Order of Program for TACN Oke-Afa Area Youth/Witnesses Convention
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Join us for three days of spiritual enrichment!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {churchProgram.map((dayData, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md border border-blue-200 dark:border-gray-600 flex flex-col items-center"
            >
              <button
                onClick={() => toggleDay(dayIndex)}
                className="w-full flex justify-between items-center px-4 py-2 bg-blue-100 dark:bg-gray-600 rounded-md mb-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 hover:bg-blue-200 dark:hover:bg-gray-500"
              >
                <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-100">
                  {dayData.day}
                </h2>
                <span className="text-md text-gray-600 dark:text-gray-300 mr-2">
                  {dayData.date}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openDayIndex === dayIndex ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDayIndex === dayIndex
                    ? "max-h-screen opacity-100 pt-2"
                    : "max-h-0 opacity-0"
                } w-full`}
              >
                <ul className="list-none p-0 w-full mt-2">
                  {dayData.events.map((event, eventIndex) => (
                    <li
                      key={eventIndex}
                      className="mb-3 text-left border-b border-gray-200 dark:border-gray-600 pb-3 last:border-b-0 last:pb-0"
                    >
                      <button
                        onClick={() =>
                          toggleEventDescription(dayIndex, eventIndex)
                        }
                        className="w-full flex justify-between items-center text-left py-2 px-2 rounded-md transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      >
                        <div>
                          <span className="font-semibold text-gray-900 dark:text-white text-lg">
                            <strong>{event.title}</strong>
                          </span>

                        </div>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            activeEventIndices[dayIndex] === eventIndex
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeEventIndices[dayIndex] === eventIndex
                            ? "max-h-96 opacity-100 pt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div
                          className="text-gray-700 dark:text-gray-300 text-sm px-2"
                          dangerouslySetInnerHTML={{
                            __html: event.description,
                          }}
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
