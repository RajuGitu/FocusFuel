import React from "react";
import Moodfaces from "./MoodFaces";

function MoodInsights() {
  return (
    <div className="shadow-md p-6  border-b-gray-500 rounded-xl bg-white dark:bg-gray-800 transition-opacity duration-300 ease-out">
      <h3 className="font-bold text-xl mb-4">How are you feeling?</h3>
      <div className="justify-center flex mb-6">
        <button className="transition-all p-3 rounded-lg items-center flex-col flex cursor-pointer">
          <Moodfaces />
        </button>
      </div>
    </div>
  );
}

export default MoodInsights;
