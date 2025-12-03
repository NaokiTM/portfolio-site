import React from 'react'
import { Instrument_Serif } from 'next/font/google';
import { projects } from '@/app/data/ProjectsContent'


export default function Projects() {
  return (
<div className=''>
    <div className='leading-none tracking-tighter font-semibold text-7xl pt-14 pb-14'>Projects:</div>
    <div className='flex flex-row flex-wrap justify-start gap-8'> 
        {projects.map((project, i) => 
            <a  
                key={i} 
                href={project.ghlink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`
                    relative 
                    w-full sm:w-[350px] 
                    aspect-square 
                    border-2 border-neutral-800 
                    rounded-xl 
                    overflow-hidden 
                    group 
                    transition duration-300
                `}
            >
                {/* IMAGE LAYER (visible by default, fades on hover) */}
                <div
                    className='
                        absolute inset-0 z-0 
                        transition-opacity duration-500 
                        group-hover:opacity-0
                        // pointer-events-none
                    '
                    style={{
                        backgroundImage: `url("${project.bgscreen}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>

                {/* TEXT OVERLAY (hidden by default, appears on hover) */}
                <div 
                    className='
                        absolute inset-0 z-10 flex flex-col justify-start p-6 bg-black text-white
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-500 
                        h-full 
                        overflow-y-auto 
                    '
                >
                    <div className='flex flex-col h-full'>
                        <div className='flex justify-between items-center mb-2 flex-shrink-0'> 
                            <div className='text-4xl'>{project.title}</div> 
                            {project.icon}
                        </div>
                        <p className='text-gray-300 overflow-y-auto flex-grow'> 
                            {project.description}
                        </p>
                        <div className='pt-4 hover:underline'>
                          {project.ghlink}
                        </div>
                    </div>
                </div>
            </a>
        )}
    </div>
</div>
  )
}
