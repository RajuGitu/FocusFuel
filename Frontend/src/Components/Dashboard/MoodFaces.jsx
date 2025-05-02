import React, { useState } from "react";
import { Angry, Frown, Meh, Smile, ThumbsUp } from "lucide-react";

const Moodfaces = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const options = [
    { icon: Angry, label: "Terrible", color: "bg-red-100" },
    { icon: Frown, label: "Bad", color: "bg-orange-100" },
    { icon: Meh, label: "Neutral", color: "bg-yellow-100" },
    { icon: Smile, label: "Good", color: "bg-green-100" },
    { icon: ThumbsUp, label: "Great", color: "bg-blue-100" },
  ];

  const handleSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {" "}
      <div className="flex gap-2 justify-center items-center">
        {options.map((option) => {
          // Simpler approach without complex destructuring
          const Icon = option.icon;
          const label = option.label;
          const color = option.color;

          return (
            <div
              key={label}
              className={`flex flex-col items-center ${color} rounded-lg p-3 transition-all cursor-pointer
                ${selectedMood === label
                  ? "ring-2 ring-blue-500 scale-110"
                  : "hover:scale-105"
                }`}
              onClick={() => handleSelect(label)}
            >
              <Icon
                className={`h-7 w-7 mb-1 ${selectedMood === label ? "text-blue-600" : "text-gray-900"
                  }`}
                strokeWidth={2.5}
              />
              <span
                className={`text-sm font-semibold ${selectedMood === label ? "text-blue-600" : "text-gray-900"
                  }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      {selectedMood && (
        <div className="mt-4 p-3 bg-gray-50 rounded-md text-center">
          <p className="text-gray-700">
            You selected: <span className="font-bold">{selectedMood}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Moodfaces;
