import { createContext, useContext, useState } from 'react';

// Create a Context for the timer
export const TimerCartContext = createContext();

// Custom hook to use the timer context
export const useTimerCart = () => useContext(TimerCartContext);

// TimerCartProvider component (doesn't need JSX)
export const TimerCartProvider = ({ children }) => {
  const [timer, setTimer] = useState(""); // timer state
  const [breakTimer, setBreakTimer] = useState(""); // timer state

  return (
    <TimerCartContext.Provider value={{ timer, setTimer ,setBreakTimer,breakTimer}}>
      {children}
    </TimerCartContext.Provider>
  );
}