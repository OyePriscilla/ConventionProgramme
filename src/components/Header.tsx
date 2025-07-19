import { useState } from "react";
import ProgramAnalysisTab from "./ProgramAnalysis";
import AnthemsTab from "./AnthemsTab_fixed";
import ProgramSchedule from "./ProgramSchedule";
import backgroundImagePath1 from "../assets/witness.png"; // ✅ Make sure this path matches your actual asset location and is under /public or /assets folder
import logo1 from "../assets/logo1.jpg"
import logo2 from "../assets/logo2.jpg"

const HeaderWithTabs = () => {
  const tabs = [
    "Convention Program Analysis",
    "Outline for Speakers",
    "Prophetical Messages",
    "Anthems",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="relative overflow-hidden min-h-screen w-screen max-w-none mx-0 px-0 bg-gray-900 text-gray-100">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src={backgroundImagePath1}
          alt="Convention background"
          className="w-full h-full object-cover object-center filter brightness-85"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Floating particles for ambiance */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute top-8 right-8 w-3 h-3 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute bottom-6 left-12 w-2 h-2 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-12 right-16 w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.8s" }}></div>

      <div className="relative z-10 text-center p-4 sm:p-6 md:p-8 w-full">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center mb-2 mx-auto justify-center ">
        <img src={logo1} alt="Logo 1" className="h-18 w-16" />
        <img src={logo2} alt="Logo 2" className="h-18 w-16 ml-4" />
      </div>
          <h2 className="text-3xl  font-extrabold text-white mb-4 leading-tight drop-shadow-xl">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              THE APOSTOLIC CHURCH NIGERIA, OKE AFA AREA
            </span>
            <br />
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              WITNESSES INAUGURAL CONVENTION
            </span>
          </h2>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 max-w-2xl mx-auto border border-white/20 shadow-lg">
            <p className="text-lg md:text-xl text-white font-semibold mb-2">
              THEME: <span className="text-yellow-300 font-bold">"BEHOLD THE LAMB OF GOD"</span>
            </p>
            <p className="text-white/90 text-lg md:text-base">TEXT: JOHN 1:29</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <div className="px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full inline-block shadow-md">
                <p className="text-white font-bold text-sm md:text-base">
                  18TH - 20TH JULY, 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-4 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full sm:w-full md:w-auto flex-1 p-3  md:text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                  ${activeTab === tab
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 font-extrabold shadow-lg shadow-orange-500/30"
                    : "bg-white/20 text-lg text-blue-800 hover:text-yellow-300 border border-white/30 backdrop-blur-sm"
                  }`}
                style={{ animation: activeTab === tab ? "pulse 2s infinite" : "none" }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6 px-2 sm:px-4 w-full">
          {activeTab === "Convention Program Analysis" && <ProgramSchedule />}
          {activeTab === "Outline for Speakers" && <ProgramAnalysisTab />}
          {activeTab === "Anthems" && <AnthemsTab />}
          {activeTab === "Prophetical Messages" && (
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700 p-6 text-left">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Prophetical Messages</h3>
              <p className="text-white/80 text-base">
                This section will contain prophetic utterances and interpretations.
                Please check back later for updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderWithTabs;
