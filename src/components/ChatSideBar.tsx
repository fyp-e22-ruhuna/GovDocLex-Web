import  { useState } from "react";
import sidebaricon from "../assets/images/sidebaricon.png";

const todayItems = [
  { label: "AI in Everyday Life?", active: false },
  { label: "Social Media Growth Hacks", active: true },
];

const previousItems = [
  "YouTube Monetization Tips",
  "Python Programming Basics",
  "Digital Marketing Essentials",
  "Content Creation Secrets",
  "Online Business Ideas",
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showToday, setShowToday] = useState(true);
  const [showPrevious, setShowPrevious] = useState(true);

  return (
    <div
      className={`bg-[#11191f] text-white h-screen flex flex-col transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-16"
      }`}
    >
      
      <div
        className={`px-4 py-4 text-lg font-bold tracking-wide border-b border-[#23303a] transition-all duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 w-0 p-0 overflow-hidden"
        }`}
      >
        GOVDocLex
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
      
          <div>
            <button
              className={`w-full text-left px-4 py-2 flex items-center justify-between focus:outline-none transition-all duration-300 ${
                sidebarOpen ? "" : "justify-center px-0"
              }`}
              onClick={() => setShowToday(!showToday)}
              disabled={!sidebarOpen}
            >
              <span
                className={`text-sm font-semibold transition-all duration-300 ${
                  sidebarOpen
                    ? "opacity-100"
                    : "opacity-0 w-0 p-0 overflow-hidden"
                }`}
              >
                Today
              </span>
              {sidebarOpen && <span>{showToday ? "▾" : "▸"}</span>}
            </button>
            {showToday && sidebarOpen && (
              <div className="pl-4">
                {todayItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center mt-1 mb-1 rounded ${
                      item.active
                        ? "bg-[#232f3a] text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span className="px-3 py-2 w-full text-sm truncate">
                      {item.label}
                    </span>
                    {item.active && (
                      <span className="mr-2 text-gray-400">•••</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
      
          <div className="mt-4">
            <button
              className={`w-full text-left px-4 py-2 flex items-center justify-between focus:outline-none transition-all duration-300 ${
                sidebarOpen ? "" : "justify-center px-0"
              }`}
              onClick={() => setShowPrevious(!showPrevious)}
              disabled={!sidebarOpen}
            >
              <span
                className={`text-sm font-semibold transition-all duration-300 ${
                  sidebarOpen
                    ? "opacity-100"
                    : "opacity-0 w-0 p-0 overflow-hidden"
                }`}
              >
                Previous 7 Days
              </span>
              {sidebarOpen && <span>{showPrevious ? "▾" : "▸"}</span>}
            </button>
            {showPrevious && sidebarOpen && (
              <div className="pl-4">
                {previousItems.map((label) => (
                  <div
                    key={label}
                    className="mt-1 mb-1 px-3 py-2 text-sm text-gray-300 hover:text-white rounded truncate"
                  >
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
    
        <div className="px-4 py-4 flex justify-start">
          <button
            className="w-8 h-8 flex items-center justify-center rounded  transition"
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <img
              src={sidebaricon}
              alt="Sidebar Toggle Icon"
              className={`w-8 h-8 transition-transform duration-300 ${
                sidebarOpen ? "" : "rotate-180"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
