import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faClock, faBolt, faBrain, faChartBar } from '@fortawesome/free-solid-svg-icons'

function TodaysOverview() {
  return (
    <div>
    <section className='mb-8 '>
              <h2 className='font-bold text-xl gap-2 items-center flex mb-4'><FontAwesomeIcon icon={faStar}  color="gold" className=' text-[rgb(113_81_211)]'/>
              Today's Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
                  <div className='shadow-sm p-4 bg-white  border-b-gray-500 rounded-xl'>
                    <div className="flex justify-between">
                      <p className='text-sm font-medium text-gray-500'>Focus Time Today</p>
                      <div className='text-gray-500'><FontAwesomeIcon icon={faClock} className='w-4 h-4' /></div>
                    </div>
                    <div className='flex justify-between items-end mt-2'>
                      <div>
                        <div className='flex items-baseline'>
                          <h3 className='font-semibold text-2xl'>2.5</h3>
                          <p className='text-sm ml-1 text-gray-500'>hours</p>
                        </div>
                      </div>
                      <div className='flex items-center text-xs font-medium text-[rgb(22,163,74)] bg-[rgb(34,197,94,0.1)] px-[0.375rem] py-[0.125rem] rounded-md'>
                        12 %
                      </div>
                    </div>
                  </div>
                  <div className='shadow-sm p-4 bg-white  border-b-gray-500 rounded-xl'>
                    <div className="flex justify-between">
                      <p className='text-sm font-medium text-gray-500'>Study Streak</p>
                      <div className='text-gray-500'><FontAwesomeIcon icon={faBolt} className='w-4 h-4' /></div>
                    </div>
                    <div className='flex justify-between items-end mt-2'>
                      <div>
                        <div className='flex items-baseline'>
                          <h3 className='font-semibold text-2xl'>7</h3>
                          <p className='text-sm ml-1 text-gray-500'>days</p>
                        </div>
                      </div>
                      <div className='flex items-center text-xs font-medium text-[rgb(22,163,74)] bg-[rgb(34,197,94,0.1)] px-[0.375rem] py-[0.125rem] rounded-md'>
                        1 %
                      </div>
                    </div>
                  </div>
                  <div className='shadow-sm p-4 bg-white  border-b-gray-500 rounded-xl'>
                    <div className="flex justify-between">
                      <p className='text-sm font-medium text-gray-500'>Focus Score</p>
                      <div className='text-gray-500'><FontAwesomeIcon icon={faBrain} className='w-4 h-4' /></div>
                    </div>
                    <div className='flex justify-between items-end mt-2'>
                      <div>
                        <div className='flex items-baseline'>
                          <h3 className='font-semibold text-2xl'>82</h3>
                          <p className='text-sm ml-1 text-gray-500'>/100</p>
                        </div>
                      </div>
                      <div className='flex items-center text-xs font-medium text-[rgb(22,163,74)] bg-[rgb(34,197,94,0.1)] px-[0.375rem] py-[0.125rem] rounded-md'>
                        5 %
                      </div>
                    </div>
                  </div>
                  <div className='shadow-sm p-4 bg-white  border-b-gray-500 rounded-xl'>
                    <div className="flex justify-between">
                      <p className='text-sm font-medium text-gray-500'>Weekly Progress</p>
                      <div className='text-gray-500'><FontAwesomeIcon icon={faChartBar} className='w-4 h-4' /></div>
                    </div>
                    <div className='flex justify-between items-end mt-2'>
                      <div>
                        <div className='flex items-baseline'>
                          <h3 className='font-semibold text-2xl'>68</h3>
                          <p className='text-sm ml-1 text-gray-500'>%</p>
                        </div>
                      </div>
                      <div className='flex items-center text-xs font-medium text-[rgb(22,163,74)] bg-[rgb(34,197,94,0.1)] px-[0.375rem] py-[0.125rem] rounded-md'>
                        -4 %
                      </div>
                    </div>
                  </div>
                </div>
</section>  
    </div>
  )
}

export default TodaysOverview
