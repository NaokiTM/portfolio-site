'use client'
import React from 'react'
import { useTheme } from '../../contexts/ThemeContext';
import { FaRegMoon } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa";

export default function DarkModeButton() {
  const { toggleDarkMode, isDarkMode } = useTheme();

  return (
    <button className='p-4 -mb-4 bg-opacity-0' onClick={toggleDarkMode}>
      { isDarkMode ? 
        <FaRegMoon className='h-[210px] w-[210px] text-4xl'/>
        :
        <FaRegSun className='h-[210px] w-[210px] text-4xl'/>

      }
    </button>
  )
}