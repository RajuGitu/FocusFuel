import React from 'react'
import TodaysOverview from '../Components/Dashboard/TodaysOverview';
import FocusSessions from '../Components/Dashboard/FocusSessions';
import StudyInsights from '../Components/Dashboard/StudyInsights';

function Dashboard() {
  return (
    <div className="bg-[#F9F8FB]">
      <div className="ml-[64px] mr-[64px] pt-[24px] pb-[24px] pr-[32px] pl-[32px] ">
      
        <div className="flex flex-col gap-2 animate-fade-in mb-8 ">
          <h1 className='md:text-4xl font-extrabold'>Welcome to <span className='md:text-4xl font-extrabold font-display text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500'>FocusFuel</span></h1>
          <p className='text-gray-500 text-lg max-w-xl'>Track your productivity, mood, and enter flow state more easily with scientifically-backed techniques.</p>
        </div>

        <TodaysOverview/>
        <FocusSessions/>
        <StudyInsights/>
        
      </div>
    </div>

  )
}

export default Dashboard
