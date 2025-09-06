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
              <a  
                key = {i} 
                href = {project.ghlink} 
                target="_blank" rel="noopener noreferrer" 
                className={`border-2 p-4 rounded-xl hover:scale-105 transition`}
                  style={{
                    backgroundImage: "none", // no default image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundImage = `url("${project.bgscreen}")`; // hover image only
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundImage = "none"; // revert to no image
                }}
              >
                <div 
                  className='absolute z-0'
                  style={{
                      backgroundImage: "none", // no default image
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundImage = `url("${project.bgscreen}")`; // hover image only
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundImage = "none"; // revert to no image
                  }}
                >
                  
                </div>

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
