'use client'
import React from 'react'
import { useTheme } from '../contexts/ThemeWrapper';
import { FaRegMoon } from "react-icons/fa6";
import { ImSun } from "react-icons/im";

export default function DarkModeButton() {
  const { toggleDarkMode, isDarkMode } = useTheme();

  return (
    <button className='p-4 bg-opacity-0' onClick={toggleDarkMode}>
      { isDarkMode ? 
        <FaRegMoon className='h-[90px] w-[90px]'/>
        :
        <ImSun className='h-[90px] w-[90px]'/>

      }
    </button>
  )
}