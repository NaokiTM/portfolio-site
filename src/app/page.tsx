'use client'
import { useRef } from 'react'
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";

import Hero from "./components/content/Hero";
import Projects from "./components/content/Projects";
import Experience from "./components/content/Experience";
import Interests from "./components/content/Interests";
import Contact from "./components/content/Contact";

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)
    const interestsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)
  
    const scrollTo = (section: string) => {
      let ref
      switch (section) {
        case 'hero':
          ref = heroRef
          break
        case 'projects':
          ref = projectsRef
          break
        case 'experience':
          ref = experienceRef
          break;
        case 'interests':
          ref = interestsRef
          break
        case 'contact':
          ref = contactRef
          break
        default:
          ref = null
      }
  
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
  
  return (
    <div className="flex justify-between">
      <Navbar scrollTo={scrollTo}/>

      <div className='flex p-16 flex-col'>
          <div ref = {heroRef}>
             <Hero />
          </div>
          <div ref = {projectsRef}>
            <Projects />
          </div>
          <div ref = {experienceRef}>
            <Experience />
          </div>
          <div ref = {interestsRef}>
            <Interests />
          </div>
          <div ref = {contactRef}>
            <Contact /> 
          </div>
      </div>

      <ContactBar />
    </div>
  );
}

