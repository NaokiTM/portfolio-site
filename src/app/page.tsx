'use client'
import { useRef } from 'react'
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";

import Hero from "./components/content/Hero";
import Projects from "./components/content/Projects";
import Skillset from "./components/content/Skillset";
import Interests from "./components/content/Interests";
import Contact from "./components/content/Contact";

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    const skillsetRef = useRef<HTMLDivElement>(null)
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
        case 'skillset':
          ref = skillsetRef
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
    <>
    <div className='flex flex-col lg:flex-row min-h-screen'>
      <Navbar scrollTo={scrollTo}/>

      <main className="flex-grow overflow-y-auto p-8 lg:p-16">
        <div className='flex flex-col space-y-16'>
          <div ref={heroRef} className=''>
             <Hero />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={skillsetRef}>
            <Skillset />
          </div>
          <div ref={interestsRef}>
            <Interests />
          </div>
          <div ref={contactRef}>
            <Contact /> 
          </div>
        </div>
      </main>

      <ContactBar />
    </div>
    </>
  );
}