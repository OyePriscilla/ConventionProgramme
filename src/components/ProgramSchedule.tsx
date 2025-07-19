import { useState } from 'react';

// Data structured from your image
const programSchedule = [
  {
    date: "18th July, 2025",
    dayLabel: "FRIDAY",
    services: [
      {
        time: "4:30PM",
        nature: "Welcome Service",
        scripture: "JOHN 1:29 - 37",
        hymn: "RH 712, RH 309",
        minister: "PASTOR S. O. KUNRUNMI (JP)",
        conductor: "PASTOR M. O. ONARE (Area Witnesses Leader)"
      }
    ]
  },
  {
    date: "19th July, 2025",
    dayLabel: "SATURDAY",
    services: [
      {
        time: "9:00PM",
        nature: "Convention Service",
        scripture: "ISAIAH 53:1-12",
        hymn: "RH 14, RH 111",
        minister: "DEACON TOBA ARAWAOWO",
        conductor: "PASTOR M. O. ONARE (Area Witnesses Leader)"
      },
      {
        time: "2:00PM",
        nature: "Bible Teaching",
        scripture: null, // No scripture provided
        hymn: "RH 377",
        minister: "PASTOR P. O. OLUKOLU (Mushin Area)",
        conductor: null
      },
      {
        time: "4:00PM",
        nature: "Tarrying/Healing",
        scripture: null,
        hymn: "APP 12",
        minister: "PASTOR S. O. SOBOWALE (Area Evangelist)",
        conductor: "PASTOR D. O. OJO"
      }
    ]
  },
  {
    date: "20th July, 2025",
    dayLabel: "SUNDAY",
    services: [
      {
        time: "8:00PM",
        nature: "Sunday School",
        scripture: null,
        hymn: null,
        minister: "PASTOR S. O. KUNRUNMI (JP)",
        conductor: "AREA SUNDAY SCHOOL LEADER" // Assuming this is the conductor
      },
      {
        time: "9:00PM",
        nature: "Convention Service",
        scripture: "JOHN 3:6 - 18",
        hymn: "RH 48, RH 664",
        minister: "PASTOR G. O. AKINTOLA, Ph. D. (LAWMNA LEADERS LEADER)",
        conductor: "PASTOR M. O. ONARE (Area Witnesses Leader)"
      },
      {
        time: "2:00PM",
        nature: "Thanksgiving/Farewell",
        scripture: null,
        hymn: null,
        minister: "ELDER E. A. ADEBIYI (AREA WITNESSES SECRETARY)",
        conductor: null
      }
    ]
  }
];

const ProgramSchedule = () => {
  const [openDay, setOpenDay] = useState("18th July, 2025"); // State to manage which day's accordion is open

  const toggleDay = (date) => {
    setOpenDay(openDay === date ? null : date);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-400">
          CONVENTION PROGRAM SCHEDULE
        </h2>

        {programSchedule.map((dayData) => (
          <div key={dayData.date} className="mb-6 bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
            {/* Accordion Header */}
            <button
              onClick={() => toggleDay(dayData.date)}
              className="w-full flex justify-between items-center p-5 cursor-pointer bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out text-white focus:outline-none"
            >
              <span className="text-xl sm:text-2xl font-bold">
                {dayData.dayLabel}, {dayData.date.split(',')[0]}
              </span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  openDay === dayData.date ? 'rotate-180' : ''
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
                openDay === dayData.date ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden p-0"> {/* Use p-0 here and add padding to inner cards */}
                <div className="space-y-4 p-4 sm:p-6"> {/* Padding applied here */}
                  {dayData.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-600 hover:border-blue-500 transition-colors duration-200"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center mb-4 text-left">
                        <span className="text-2xl font-bold text-blue-300 mb-2 sm:mb-0 sm:mr-4">
                          {service.time}
                        </span>
                        <h4 className="text-2xl font-extrabold text-teal-300">
                          {service.nature}
                        </h4>
                      </div>
                      
                      <div className="space-y-3 text-left">
                        {service.scripture && (
                          <p className="text-gray-200 text-lg leading-relaxed">
                            <span className="font-bold text-yellow-400 text-xl">Scriptural Passage:</span> 
                            <span className="ml-2 font-medium">{service.scripture}</span>
                          </p>
                        )}
                        {service.hymn && (
                          <p className="text-gray-200 text-lg leading-relaxed">
                            <span className="font-bold text-yellow-400 text-xl">Hymn(s):</span> 
                            <span className="ml-2 font-medium">{service.hymn}</span>
                          </p>
                        )}
                        {service.minister && (
                          <p className="text-gray-200 text-lg leading-relaxed">
                            <span className="font-bold text-yellow-400 text-xl">Speaker:</span> 
                            <span className="ml-2 font-medium">{service.minister}</span>
                          </p>
                        )}
                        {service.conductor && (
                          <p className="text-gray-200 text-lg leading-relaxed">
                            <span className="font-bold text-yellow-400 text-xl">Conductor:</span> 
                            <span className="ml-2 font-medium">{service.conductor}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramSchedule;