import React from 'react'
import { instrumentserif } from '../layout'
import DarkModeButton from './DarkModeButton';

export default function Main() {

  return (
    <div className='flex p-16 flex-col'>
        <div className=''>
            <div className={`leading-none tracking-tighter enormous-text font-bold ml-4 -mt-2`}>
              <div className='flex flex-row'>
                <div>
                  <div className='lg:-mb-3'>Hi. I'm</div>
                  <div className='lg:-mb-3'>Naoki</div>
                </div>
                <div className='inline-flex ml-2'>
                    <DarkModeButton />
                </div>
              </div>
              <div>Miyagawa</div>
            </div>

            <div className='text-3xl leading-none tracking-tighter font-medium pt-8 pb-8 -ml-1'>
                <div>┌─────────────────────────────────────┐</div>
                <div className='pl-7'>
                  <div>I am a computer science student </div>
                  <div>passionate about (building) beautiful websites</div>
                  <div>and creating apps that solve fun problems.</div>
                </div>
                <div>└─────────────────────────────────────┘</div>
                <div>┌─────────────────────────────────────┐</div>
                <div className='pl-7'>
                  <div>I prefer minimalistic practicality that maintains</div>
                  <div>a high level of <div className={`${instrumentserif.className} inline-flex italic font-bold tracking-tight text-4xl pl-1 pr-2`}>elegant</div> performance</div>
                </div>
                <div>└─────────────────────────────────────┘</div>
            </div>

            <div className='max-w-xl'>
                <div className={`leading-none tracking-tighter font-semibold text-5xl pb-8`}>Projects:</div>
                <div>Portfolio (This site!)</div>
                <p>This project was a great opportunity to play around with tailwind and React contexts to implement a way to change the theme.</p>
            </div>

            <div className=''>
              <div className={`leading-none tracking-tighter font-semibold text-5xl pb-8`}>Experience:</div>
            </div>

            <div className=''>
              <div className={`leading-none tracking-tighter font-semibold text-5xl pb-8`}>Interests:</div>
            </div>

            <div className={`leading-none tracking-tighter font-medium text-5xl pb-8`} >
              <div className={`leading-none tracking-tighter font-semibold text-5xl pb-8`}>Contact:</div>
            </div>
        </div>
    </div>
  )
}