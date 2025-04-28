import React from 'react'
import Navbar from '../Components/common/Nav'

function Dashboard() {
  return (
    <div className="bg-[#F9F8FB]">
      <div className="ml-[64px] mr-[64px] pt-[24px] pb-[24px] pr-[32px] pl-[32px]">
      <div className="flex flex-col items-center justify-center h-screen bg-background">
        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        <p className="mt-4 text-lg text-gray-300">Welcome to your dashboard!</p>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
