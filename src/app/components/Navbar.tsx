'use client'
import React from 'react'
import { useRef } from 'react';
import { instrumentserif } from '../layout'
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";
import { FiNavigation } from "react-icons/fi";
import { useState } from 'react';

interface NavbarProps {
  scrollTo: (section: string) => void
}

export default function NavBar({ scrollTo}: NavbarProps) {
  return (
      <div className={`text-4xl`}>
          <nav className={`space-y-5 p-20 flex flex-col justify-center font-medium top-0 border-r-2 sticky h-screen`}>
              <button onClick={() => scrollTo('hero')}>
                <FiHome />
              </button>
              <button onClick={() => scrollTo('projects')}>
                <FiBox />
              </button>
              <button onClick={() => scrollTo('experience')}>
                <FiBriefcase />
              </button>
              <button onClick={() => scrollTo('interests')}>
                <FiSmile /> 
              </button>
              <button onClick={() => scrollTo('contact')}>
                <FiNavigation />
              </button>
          </nav>
      </div>
  )
}