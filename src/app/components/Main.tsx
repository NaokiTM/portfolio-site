import React from 'react'
import { instrumentserif } from '../layout'
import DarkModeButton from './DarkModeButton';

export default function Main() {

  return (
    <div className='flex p-16 flex-col'>
        <div>
            <div className={`leading-none tracking-tighter enormous-text font-medium -ml-2 -mt-2`}>
                <div className='lg:-mb-3'>Naoki 
                  <div className='inline-flex'>
                    <DarkModeButton />
                  </div>
                </div>
                <div>Miyagawa</div>
            </div>

            <div className='text-3xl leading-none tracking-tighter pt-8 pb-8 -ml-1'>
                <div>┌────────────────────────────────────┐</div>
                <div className='pl-6'>
                  <div>I am a computer science student </div>
                  <div>passionate about (building) beautiful websites</div>
                  <div>and creating apps that solve fun problems.</div>
                </div>
                <div>└────────────────────────────────────┘</div>
                <div>┌────────────────────────────────────┐</div>
                <div className='pl-6'>
                  <div>I prefer minimalistic practicality that maintains</div>
                  <div>a high level of <div className={`${instrumentserif.className} inline-flex italic font-bold tracking-tight text-4xl pl-2 pr-2`}>elegant</div> performance</div>
                </div>
                <div>└────────────────────────────────────┘</div>
            </div>

            <div className=''>
                <div className={`leading-none tracking-tighter font-medium text-5xl pb-8`}>Projects:</div>
            </div>

            <div className=''>
              Typing game: 
            </div>

            <div className=''>
              Knights tour autosolver:
            </div>

            <div className={`leading-none tracking-tighter font-medium text-5xl pb-8`} >
              Experience: 
            </div>
        </div>
    </div>
  )
}