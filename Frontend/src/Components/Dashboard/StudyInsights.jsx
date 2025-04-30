import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen,faArrowUpRightFromSquare, faBrain, faChartBar } from '@fortawesome/free-solid-svg-icons'

function StudyInsights() {
  return (
    <div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='md:col-span-2'>
                <h2 className='flex items-center gap-2 mb-4 text-xl font-bold'> <FontAwesomeIcon icon={faBookOpen} className="text-[rgb(113_81_211)] w-4 h-4" />Study Insights</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='shadow-md p-6 bg-gray-100 border-gray-500 rounded-xl animate-fade-in'>
                      <h3 className='font-semibold text-lg mb-3'>Most Productive Hours</h3>
                      <div className='p-4 bg-muted rounded-lg justify-center items-center h-[200px] flex'>Productivity Chart</div>
                      <div className='transition-colors ring-offset-background underline-offset-4 text-primary font-medium text-sm p-0 rounded-md whitespace-nowrap gap-2 justify-center items-center h-10 inline-flex mt-2'>View full analytics <FontAwesomeIcon icon={faChartBar} />
                      </div>
                    </div>
                    <div className='bg-gradient-to-br from-indigo-100 to-purple-100 backdrop-blur-sm p-4  from-focus/10 to-calm/10 border-[rgb(172,151,233)] border-1 border-focus/20 rounded-xl animate-fade-in'>
                    <div className='gap-3 flex'>
                      <div className='h-9 p-2 bg-[#7151d333] rounded-full shrink-0 '>
                      <FontAwesomeIcon icon={faBrain} className='w-4 h-4 text-[rgb(83_57_160)]' />
                      </div>
                      <div>
                        <div className='font-medium text-sm mb-0.5'>Focus Tip</div>
                        <p className='text-sm mb-2 text-gray-500'>Your focus metrics show you concentrate best after taking regular breaks. Try the Pomodoro technique with our Focus Timer.</p>
                        <div className='transition-colors ring-offset-background underline-offset-4 text-focus font-medium text-xs p-0 rounded-md whitespace-nowrap gap-2  justify-center items-center h-auto inline-flex'>learn more about the Pomodoro technique <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  </div>
                  </div>
    </div>
  )
}

export default StudyInsights
