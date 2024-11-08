import React from 'react'
import { instrumentserif } from '../../layout'
import DarkModeButton from '../../components/common/DarkModeButton';

export default function Hero() {

  return (
    <>
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
    </>
  )
}