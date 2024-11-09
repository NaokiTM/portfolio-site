import React from 'react'
import DarkModeButton from '../../components/common/DarkModeButton';
import MoonOrSun from '../common/MoonOrSun';

export default function Hero() {

  return (
    <>
      <div className={`leading-none tracking-tighter enormous-text font-semibold ml-4 -mt-2`}>
        <div className='flex flex-row'>
          <div>
            <div className='lg:-mb-3'>Hi. I&apos;m</div>
            <div className='lg:-mb-3'>Naoki</div>
          </div>
          <div className='inline-flex ml-2'>
              <DarkModeButton />
          </div>
        </div>
        <div>Miyagawa</div>
      </div>

      <div className='text-3xl leading-tight tracking-tighter font-medium pt-8 pb-8 -ml-1'>
          <div>┌────────────────────────<div className='inline-flex font-mono text-sm font-semibold leading-none tracking-tighter pl-4 pr-3'>Try clicking the <MoonOrSun /></div>─┐</div>
          <div className='pl-7'>
            <div>A computer science student </div>
            <div>passionate about (building) beautiful websites</div>
            <div>and creating apps that solve fun problems.</div>
          </div>
          <div className='pl-7'>
            <div className='-mb-1'>I prefer minimalistic practicality that maintains</div>
              <div>a high level of <div className={`instrument-serif-italic inline-flex tracking-tight font-semibold text-4xl pl-1 pr-1`}>elegant</div> performance</div>
          </div>
          <div>└─────────────────────────────────────┘</div>
      </div>
    </>
  )
}