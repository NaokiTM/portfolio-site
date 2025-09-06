import React from 'react'
import { Instrument_Serif } from 'next/font/google';
import { projects } from '@/app/data/ProjectsContent'
import { FiUser } from 'react-icons/fi';
import { BsKeyboard } from "react-icons/bs";


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
              <a key = {i} href = {project.ghlink} target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition border-2 p-4 rounded-xl'>
                <div className='flex flex-col'>
                  <div className='flex justify-between'>
                      <div className={`${instrumentSerif.className} text-4xl mb-2`}>{project.title}</div>
                      {project.icon}
                  </div>
                  <p>{project.description}</p>
                </div>
              </a>
            )}
          </div>
    </div>
  )
}
