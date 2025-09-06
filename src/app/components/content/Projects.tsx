import React from 'react'
import { Instrument_Serif } from 'next/font/google';
import { projects } from '@/app/data/ProjectsContent'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],   
  style: ['italic'],
});

export default function Projects() {
  return (
    <div className=''>
        <div className={`leading-none tracking-tighter font-semibold text-7xl pb-8`}>Projects:</div>
        
          <div className='flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0'>
            {projects.map((project, i) => 
                <div key = {i} className='flex flex-col'>
                  <div className={`${instrumentSerif.className} text-4xl mb-2`}>{project.title}</div>
                  <p>{project.description}</p>
                </div>
            )}
          </div>
    </div>
  )
}
