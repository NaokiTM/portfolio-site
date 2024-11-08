'use client'
import React from 'react'
import { useTheme } from '../../contexts/ThemeWrapper';

export default function MoonOrSun() {
  const { isDarkMode } = useTheme();

  return (
    <div className='pl-2'>
      { isDarkMode ? 
        <div>moon!</div>
        :
        <div className='pr-2'>sun!</div>
      }
    </div>
  )
}