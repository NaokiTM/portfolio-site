'use client'
import React from 'react'
import { FiHome } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";
import { FiNavigation } from "react-icons/fi";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

interface NavbarProps {
  scrollTo: (section: string) => void
}

export default function NavBar({ scrollTo}: NavbarProps) {
  return (
<nav className="lg:w-24 flex-shrink-0 bg-black text-white lg:border-r-2 sticky top-0 lg:h-screen border-b-2 lg:border-b-0 z-20">
  <div className="flex lg:flex-col justify-around lg:justify-between items-center lg:h-full p-4 lg:p-7">
      <div className="flex lg:flex-col justify-start items-center lg:space-y-5">
          <button onClick={() => scrollTo('hero')} className="p-2 hover:scale-125 transition">
            <FiHome className="text-2xl lg:text-4xl" />
          </button>
          <button onClick={() => scrollTo('projects')} className="p-2 hover:scale-125 transition">
            <FiBox className="text-2xl lg:text-4xl" />
          </button>
          <button onClick={() => scrollTo('skillset')} className="p-2 hover:scale-125 transition">
            <FiBriefcase className="text-2xl lg:text-4xl" />
          </button>
          <button onClick={() => scrollTo('contact')} className="p-2 hover:scale-125 transition">
            <FiNavigation className="text-2xl lg:text-4xl" />
          </button>
      </div>

      <div className='flex lg:flex-col justify-end items-center lg:space-y-5'>
          <a href = 'https://github.com/NaokiTM' target='_blank' rel='noopener noreferrer' className='p-2 text-2xl lg:text-4xl hover:scale-125 transition'>
            <FiGithub />
          </a>
          <a href = 'https://www.linkedin.com/in/naoki-miyagawa-1234b8333/' target='_blank' rel='noopener noreferrer' className='p-2 text-2xl lg:text-4xl hover:scale-125 transition'>
            <FiLinkedin />
          </a>
      </div>
  </div>
</nav>
  )
}