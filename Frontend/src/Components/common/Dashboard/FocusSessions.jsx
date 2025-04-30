import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCirclePlus, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';

function FocusSessions() {
  return (
    <div>
    <section className='mb-8'>
                  <h2 className='font-bold text-xl gap-2 items-center flex mb-4'><FontAwesomeIcon icon={faClock} className='w-4 h-4 text-[rgb(113_81_211)] ' />
                  Focus Sessions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
                  <div className='transition-transform opacity duration-200 ease-out transform scale-100 opacity-100 hover:scale-105 md:text-4xl font-extrabold font-display text-2xl font-sans text-white px-4 py-2 rounded-3xl bg-gradient-to-r from-[rgb(113_81_211)] to-[rgb(123,90,222)] '>
                    <div className='relative z-10 flex flex-col h-full p-6'>
                      <div className='flex items-center gap-2 mb-2'>
                        <FontAwesomeIcon icon={faClock} className='w-4 h-4' />
                        <span className='font-medium text-xs'>50/10 min</span>
                      </div>
                      <h3 className='font-bold text-xl font-display mb-2 text-white'>Deep Work Session </h3>
                      <p className='text-white/80 text-sm font-semibold mb-6'>Focus deeply with 50-minute work intervals and 10-minute breaks</p>
                      <div className='mt-auto'>
                        <div className='transition-colors backdrop-blur-sm ring-offset-background text-primary-foreground font-medium text-sm py-2 px-4 bg-white/20 rounded-md whitespace-nowrap gap-2 justify-center items-center h-10 inline-flex '>
                        Start Session
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='transition-transform opacity duration-200 ease-out transform scale-100 opacity-100 hover:scale-105 md:text-4xl font-extrabold font-display text-2xl font-sans text-white px-4 py-2 rounded-3xl bg-gradient-to-r from-[rgb(113_81_211)] to-[rgb(123,90,222)]  '>
                    <div className='relative z-10 flex flex-col h-full p-6'>
                      <div className='flex items-center gap-2 mb-2'>
                        <FontAwesomeIcon icon={faClock} className='w-4 h-4' />
                        <span className='font-medium text-xs'>25/5 min</span>
                      </div>
                      <h3 className='font-bold text-xl font-display mb-2 text-white'>Quick Study Sprint </h3>
                      <p className='text-white/80 text-sm font-semibold mb-6'>Short, intense study sessions with 25-minute work intervals</p>
                      <div className='mt-auto'>
                        <div className='transition-colors backdrop-blur-sm ring-offset-background    font-medium text-sm py-2 px-4 bg-white/20 rounded-md whitespace-nowrap gap-2 justify-center items-center h-10 inline-flex '>
                        Start Session
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='text-center p-6 border border-dashed border-border rounded-2xl justify-center items-center flex-col animate-scale-in flex'>
                    <div className='p-4 bg-gray-100 rounded-full mb-4'><FontAwesomeIcon icon={ faCirclePlus} className='text-gray-500   text-3xl ' /></div>
                    <h3 className='font-semibold text-xl mb-1'>Custom Session</h3>
                    <p className='text-sm mb-4 text-gray-500 '>Create a personalized focus session with your own settings</p>
                    <div className='transition-colors duration-150 ease-out ring-offset-background text-white font-medium text-sm py-2 px-4 bg-[rgb(113_81_211)] rounded-md whitespace-nowrap gap-2 justify-center items-center h-10 inline-flex '>
                    <FontAwesomeIcon icon={faPlay} className="w-6 h-6" /> Create Custom 
                    </div>
                  </div>
                </div>
    </section>
    </div>
  )
}

export default FocusSessions
