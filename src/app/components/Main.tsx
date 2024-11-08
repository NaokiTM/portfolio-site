import React from 'react'
import Hero from './content/Hero'
import Projects from './content/Projects'
import Experience from './content/Experience'
import Interests from './content/Interests'
import Contact from './content/Contact'

function Main() {
  return (
    <div className='flex p-16 flex-col'>
        <div className=''>
            <Hero />
            <Projects />
            <Experience />
            <Interests />
            <Contact />
        </div>
    </div>
  )
}

export default Main