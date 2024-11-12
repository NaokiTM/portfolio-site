'use client'
import React from 'react'
import { FiHome } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiSmile } from "react-icons/fi";
import { FiNavigation } from "react-icons/fi";

interface NavbarProps {
  scrollTo: (section: string) => void
}

export default function NavBar({ scrollTo}: NavbarProps) {
  return (
    <nav className="lg:w-24 flex-shrink-0 bg-black border-r-2 sticky top-0 lg:h-screen">
      <div className="flex lg:flex-col justify-around lg:justify-center items-center lg:h-full p-4 lg:p-0 lg:space-y-5">
        <button onClick={() => scrollTo('hero')} className="p-2">
          <FiHome className="text-2xl lg:text-4xl" />
        </button>
        <button onClick={() => scrollTo('projects')} className="p-2">
          <FiBox className="text-2xl lg:text-4xl" />
        </button>
        <button onClick={() => scrollTo('skillset')} className="p-2">
          <FiBriefcase className="text-2xl lg:text-4xl" />
        </button>
        <button onClick={() => scrollTo('interests')} className="p-2">
          <FiSmile className="text-2xl lg:text-4xl" />
        </button>
        <button onClick={() => scrollTo('contact')} className="p-2">
          <FiNavigation className="text-2xl lg:text-4xl" />
        </button>
      </div>
    </nav>
  )
}