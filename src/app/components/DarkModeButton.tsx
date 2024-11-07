'use client'
import React from 'react'
import { useTheme } from '../contexts/ThemeWrapper';
import { FaRegMoon } from "react-icons/fa6";
import { ImSun } from "react-icons/im";
import { FaRegSun } from "react-icons/fa";

export default function DarkModeButton() {
  const { toggleDarkMode, isDarkMode } = useTheme();

  return (
    <button className='p-4 -mb-4 bg-opacity-0' onClick={toggleDarkMode}>
      { isDarkMode ? 
        <FaRegMoon className='h-[210px] w-[210px]'/>
        :
        <FaRegSun className='h-[210px] w-[210px]'/>

      }
    </button>
  )
}