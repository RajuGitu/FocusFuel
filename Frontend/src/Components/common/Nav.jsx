import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons"; 
import { faMoon } from "@fortawesome/free-solid-svg-icons"; 
import { faChartBar } from "@fortawesome/free-solid-svg-icons"; 
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons"

function Nav() {
  return (
    <div>
      <div className="sticky top-0 z-50 w-full border-b border-gray-200/40 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="flex items-center gap-2 text-inherit no-underline"
            >
              <div className="rounded-md p-1">
                <img
                  src={logo}
                  className="h-16 w-16 text-white"
                  alt="FocusFuel Logo"
                />
              </div>
              <span className="font-display text-2xl font-sans font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                FocusFuel
              </span>
            </a>
          </div>

          <nav className="md:flex gap-1 items-center hidden">
            <NavLink
              to="/FocusFuel/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-3 py-2 transition-colors duration-200 ease-in-out
              ${
                isActive
                  ? "bg-[#7151d31a] text-[rgb(113_81_211)] font-medium"
                  : "text-gray-600 hover:text-[#7151d3] hover:bg-[#7151d31a]"
              }`
              }
            >
              <FontAwesomeIcon icon={faHouse} className="w-4 h-4" />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/FocusFuel/study"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-3 py-2 transition-colors duration-200 ease-in-out 
                ${
                  isActive
                  ? "bg-[#7151d31a] text-[rgb(113_81_211)] font-medium"
                  : "text-gray-600 hover:text-[#7151d3] hover:bg-[#7151d31a]"
                }`
              }
            >
              <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
              <span>Study</span>
            </NavLink>
            <NavLink
              to="/FocusFuel/mood"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-3 py-2 transition-colors duration-200 ease-in-out 
                ${
                  isActive
                  ? "bg-[#7151d31a] text-[rgb(113_81_211)] font-medium"
                  : "text-gray-600 hover:text-[#7151d3] hover:bg-[#7151d31a]"
                }`
              }
            >
              <FontAwesomeIcon icon={faMoon} className="w-4 h-4" />
              <span>Mood</span>
            </NavLink>
            <NavLink
              to="/FocusFuel/analytics"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-3 py-2 transition-colors duration-200 ease-in-out 
                ${
                  isActive
                  ? "bg-[#7151d31a] text-[rgb(113_81_211)] font-medium"
                  : "text-gray-600 hover:text-[#7151d3] hover:bg-[#7151d31a]"
                }`
              }
            >
              <FontAwesomeIcon icon={faChartBar} className="w-4 h-4" />
              <span>Analytics</span>
            </NavLink>
            <NavLink
              to="/FocusFuel/planner"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-3 py-2 transition-colors duration-200 ease-in-out 
                ${
                  isActive
                  ? "bg-[#7151d31a] text-[rgb(113_81_211)] font-medium"
                  : "text-gray-600 hover:text-[#7151d3] hover:bg-[#7151d31a]"
                }`
              }
            >
              <FontAwesomeIcon icon={faClipboardList} className="w-4 h-4" />
              <span>Planner</span>
            </NavLink>
            <NavLink
              to="/FocusFuel/wellness"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-3 py-2 transition-colors duration-200 ease-in-out 
                ${
                  isActive
                  ? "bg-[#7151d31a] text-[rgb(113_81_211)] font-medium"
                  : "text-gray-600 hover:text-[#7151d3] hover:bg-[#7151d31a]"
                }`
              }
            >
              <FontAwesomeIcon icon={faBrain} className="w-4 h-4" />
              <span>Wellness</span>
            </NavLink>
            <NavLink
              to="/FocusFuel/aiassistant"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-3 py-2 transition-colors duration-200 ease-in-out 
                ${
                  isActive
                  ? "bg-[#7151d31a] text-[rgb(113_81_211)] font-medium"
                  : "text-gray-600 hover:text-[#7151d3] hover:bg-[#7151d31a]"
                }`
              }
            >
              <FontAwesomeIcon icon={faRobot} className="w-4 h-4" />
              <span>AI Assistant</span>
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="w-3 h-3 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
