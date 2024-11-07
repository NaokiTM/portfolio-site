'use client'
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<any>(undefined);

export default function ThemeWrapper({children, }: Readonly<{ children: React.ReactNode; }>) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleDarkMode = () => {
    setAnimate(true);
    setIsDarkMode((prevMode) => !prevMode);  //prevmode ideal to correctly keep track of asynchronous state toggling 
  };

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, animate }}>
        <div
          className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} ${
            animate ? (isDarkMode ? 'toDarkMode' : 'toLightMode') : ''
          }`}
        >
          {children}
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export const useTheme = () => useContext(ThemeContext);