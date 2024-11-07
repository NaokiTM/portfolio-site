'use client'
import React from 'react'
import { instrumentserif } from '../layout'
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";
import { FiNavigation } from "react-icons/fi";
import { useState } from 'react';

export default function Nav() {
  const [homeHovered, setHomeHovered] = useState<boolean>(false);
  const [userHovered, setUserHovered] = useState<boolean>(false);
  const [boxHovered, setBoxHovered] = useState<boolean>(false);
  const [briefcaseHovered, setBriefcaseHovered] = useState<boolean>(false);
  const [smileHovered, setSmileHovered] = useState<boolean>(false);
  const [navigationHovered, setNavigationHovered] = useState<boolean>(false);


  return (
      <div className={`text-4xl`}>
          <nav className={`space-y-5 p-20 flex flex-col justify-center font-medium top-0 border-r-2 sticky h-screen`}>
              <div onMouseEnter={() => setHomeHovered(true)} onMouseLeave={() => setHomeHovered(false)} >
                <FiHome />
              </div>
              <div onMouseEnter={() => setUserHovered(true)} onMouseLeave={() => setUserHovered(false)}>
                <FiUser />
              </div>
              <div onMouseEnter={() => setBoxHovered(true)} onMouseLeave={() => setBoxHovered(false)}>
                <FiBox />
              </div>
              <div onMouseEnter={() => setBriefcaseHovered(true)} onMouseLeave={() => setBriefcaseHovered(false)}>
                <FiBriefcase />
              </div>
              <div onMouseEnter={() => setSmileHovered(true)} onMouseLeave={() => setSmileHovered(false)}>
                <FiSmile /> 
              </div>
              <div onMouseEnter={() => setNavigationHovered(true)} onMouseLeave={() => setHomeHovered(false)}>
                <FiNavigation />
              </div>
          </nav>
      </div>
  )
}