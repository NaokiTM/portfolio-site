import React from 'react'

export default function Skillset() {
  return (
    <div className=''>
      <div className={`leading-none tracking-tighter font-semibold text-7xl mb-12 flex flex-col space-y-2`}>Skillset: </div>

      <div className='flex flex-row items-center mb-12 '>
          <img src="/react.svg" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
          <div className='flex'>
              <div className={`text-md`}><div className={`text-reactBlue text-4xl leading-none font-semibold tracking-tighter inline-flex mr-2`}>React:</div>I have about <b className='text-reactBlue'>1 year of experience with React</b> for personal use. I have built my best projects using React, because of its front end heavy focus, ease of use, and how organised it is. I have so far covered basic topics such as <b className='text-reactBlue'>JSX, ternary operators (especially for conditonal JSX rendering and styling), states and effects,</b> and have started learning <b className='text-reactBlue'>refs and contexts.</b></div>
          </div>
      </div>

      <div className='flex flex-row items-center mb-12'>
          <img src="/next.svg" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
          <div className='flex'>
              <div className={`text-md`}><div className={`text-4xl leading-none font-semibold tracking-tighter inline-flex mr-2`}>Next:</div>My React projects often incorporate Next.js as a framework, because of its popularity and server side rendering capabilities. I have been using Next since Next 14 was released, and I am currently still in the learning process. I have a general understanding of <b>client and server components, routes, the layout page,</b> and I often use Next because I like Vercels Geist font (which can&apos;t be used with any other framework, unfortunately)</div>
          </div>
      </div>

      <div className='flex flex-row items-center mb-12'>
          <img src="/linux.svg" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
          <div className='flex'>
              <div className={`text-md`}><div className={`text-linuxYellow text-4xl leading-none font-semibold tracking-tighter inline-flex mr-2`}>Linux:</div>Linux Mint has been my go-to OS for around <b className='text-linuxYellow'>3 years.</b> Although Mint has been my favourite due to it&apos;s simple learning curve, I have also tried out <b className='text-linuxYellow'>Manjaro and Void linux.</b> However the lack of support for these distros has put me off from using them long term. I have a lot of experience with the <b className='text-linuxYellow'>i3-gaps window manager,</b> and configuring it. I am also very familiar with <b className='text-linuxYellow'>Bash,</b> since I use it on my main computer and have used it for a module in my first year</div>
          </div>
      </div>
 
      <div className='flex flex-row items-center mb-12'>
          <img src="/tailwind.svg" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
          <div className='flex'>
              <div className={`text-md`}><div className={`text-tailwindBlue text-4xl leading-none font-semibold tracking-tighter inline-flex mr-2`}>Tailwind:</div>is one of my absolute favourite technologies to use in my web apps, because of how easy it is to learn and use. It also comes as a default package installed with many major React frameworks, which is helpful for me as I tend to use frameworks far more than I use vanilla Javascript. I have an understanding of <b className='text-tailwindBlue'>adding custom configurations to tailwind.config,</b> and <b className='text-tailwindBlue'>I have memorised a good amount of the most popular utility classes</b> (with my <b className='text-tailwindBlue'>favourite CSS tool being flexbox</b>). I am hoping to learn about the grid utility more in depth. </div>
          </div>
      </div>

      <div className='flex flex-row items-center mb-12'>
          <img src = "/git.svg" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
          <div className='flex'>
              <div className={`text-md`}><div className={`text-gitOrange text-4xl leading-none font-semibold tracking-tighter inline-flex mr-2`}>Git:</div>Git and Github are incredibly useful tools for me, and I have a basic understanding of its commands <b className='text-gitOrange'>(staging, commiting, pushing, cloning, changing remote url)</b>, and am still in the process of <b className='text-gitOrange'>learning pulls, pull requests, and branching + merging.</b></div>
          </div>
      </div>

      <div className='flex flex-row items-center mb-12'>
          <img src = "/java.svg" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
          <div className='flex'>
              <div className={`text-md`}><div className={`text-javaOrange text-4xl leading-none font-semibold tracking-tighter inline-flex mr-2`}>Java:</div>I have used Java since the start of my degree, so for around a year consistently. I have an understanding of <b className='text-javaOrange'>classes, interfaces, Javadoc, Intellij, enums, and most basic OOP concepts</b>. I have also <b className='text-javaOrange'>used Junit 5 tests before</b>, however I haven&apos;t written any myself as of now.</div>
          </div>
      </div>

      <div className='flex flex-row items-center mb-12'>
          <img src = "/typescript.svg" className='w-[80px] h-[80px] flex-shrink-0 mr-4'/>
          <div className='flex'>
              <div className={`text-md`}><div className={`text-typescriptBlue text-4xl leading-none font-semibold tracking-tighter inline-flex mr-2`}>Typescript:</div>I picked up Typescript because of it&apos;s popularity in industry and convinient type checking at compile time. I am still new to typescript, and therefore <b className='text-typescriptBlue'>still currently learning about types, interfaces, and generics</b></div>
          </div>
      </div>
    </div>
  )
}