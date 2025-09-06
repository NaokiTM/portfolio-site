import React from 'react'
import { skills } from '@/app/data/skills'

export default function Skillset() {
  return (
    <div className=''>
        <div className={`leading-none tracking-tighter font-semibold text-7xl mb-12 flex flex-col space-y-2`}>Skillset: </div>

        {skills.map((skill, i) => 
            <div key = {i} className='flex flex-row items-center mb-12'>
            {/* <img src="/next.svg" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/> */}
            <div className='flex'>
                <div className={`text-md`}>
                    <div className={`${skill.color}`}>
                        {skill.title}
                    </div>
                        {skill.description}
                </div>
            </div>
            </div>
        )}


    </div>
  )
}