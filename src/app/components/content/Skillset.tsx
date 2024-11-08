import React from 'react'
import StackIcon from 'tech-stack-icons'
import { instrumentserifitalic } from '@/app/layout'
import { GeistSans } from 'geist/font/sans';


export default function Skillset() {
  return (
    <div className=''>
      <div className={`leading-none tracking-tighter font-semibold text-7xl mb-12 flex flex-col space-y-2`}>Skillset: </div>

      <div className='flex flex-row items-center mb-12'>
        <StackIcon name="reactjs" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
        <div className='flex'>
          <div className={`text-sm ${GeistSans.className}`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>React...</div>I have been using React for about a year for personal use. I have built my best projects using React, because of its front end heavy focus, ease of use, and how organised it is. I have so far covered basic topics such as JSX and states, and have started learning refs and contexts.</div>
        </div>
      </div>

      <div className='flex flex-row items-center mb-12'>
        <StackIcon name="nextjs2" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
        <div className='flex'>
          <div className={`text-sm ${GeistSans.className}`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>Next...</div>I have been using React for about a year for personal use. I have built my best projects using React, because of its front end heavy focus, ease of use, and how organised it is. I have so far covered basic topics such as JSX and states, and have started learning refs and contexts.</div>
        </div>
      </div>

      <div className='flex flex-row items-center mb-12'>
        <StackIcon name="linux" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
        <div className='flex'>
          <div className={`text-sm ${GeistSans.className}`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>Linux...</div>I have been using React for about a year for personal use. I have built my best projects using React, because of its front end heavy focus, ease of use, and how organised it is. I have so far covered basic topics such as JSX and states, and have started learning refs and contexts.</div>
        </div>
      </div>

      <div className='flex flex-row items-center mb-12'>
        <StackIcon name="tailwindcss" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
        <div className='flex'>
          <div className={`text-sm ${GeistSans.className}`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>Tailwind...</div>I have been using React for about a year for personal use. I have built my best projects using React, because of its front end heavy focus, ease of use, and how organised it is. I have so far covered basic topics such as JSX and states, and have started learning refs and contexts.</div>
        </div>
      </div>

      <div className='flex flex-row items-center mb-12'>
        <StackIcon name="git" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
        <div className='flex'>
          <div className={`text-sm ${GeistSans.className}`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>Git...</div>I have been using React for about a year for personal use. I have built my best projects using React, because of its front end heavy focus, ease of use, and how organised it is. I have so far covered basic topics such as JSX and states, and have started learning refs and contexts.</div>
        </div>
      </div>

      <div className='flex flex-row items-center mb-12'>
        <StackIcon name="java" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
        <div className='flex'>
          <div className={`text-sm ${GeistSans.className}`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>Java...</div>I have been using React for about a year for personal use. I have built my best projects using React, because of its front end heavy focus, ease of use, and how organised it is. I have so far covered basic topics such as JSX and states, and have started learning refs and contexts.</div>
        </div>
      </div>
      
      <div className='flex flex-row items-center mb-12'>
        <StackIcon name="typescript" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
        <div className='flex'>
          <div className={`text-sm ${GeistSans.className}`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>Typescript...</div>I have been using React for about a year for personal use. I have built my best projects using React, because of its front end heavy focus, ease of use, and how organised it is. I have so far covered basic topics such as JSX and states, and have started learning refs and contexts.</div>
        </div>
      </div>
    </div>
  )
}