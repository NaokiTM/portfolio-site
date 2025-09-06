import React from 'react'
import DarkModeButton from '@/app/components/common/DarkModeButton';
import MoonOrSun from '@/app/components/common/MoonOrSun';
import { Instrument_Serif } from 'next/font/google';
import DeviceDetector from '@/app/components/DeviceDetector';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
});

export default function Hero() {
  const isMobile = DeviceDetector();

  return (
    <>
      {isMobile ? (
        <div className="leading-none tracking-tighter text-6xl font-semibold -mt-2 text-center">
          <div className='flex flex-col'>
            <div className='ml-2 pb-8'>
              <DarkModeButton />
            </div>
            <div>
              <div className='lg:-mb-3'>Hi. I&apos;m Naoki Miyagawa</div>
            </div>
          </div>
       
            <div className='text-3xl leading-tight tracking-tighter font-medium pt-8 pb-8 -ml-1'>
              <div>A computer science student passionate about (building) beautiful websites and creating apps that solve fun problems. I prefer minimalistic practicality that maintains a high level of <span className={`${instrumentSerif.className} inline-flex tracking-tight font-semibold text-4xl pl-1 pr-1`}>elegant</span> performance (click on the<MoonOrSun/> to toggle theme).
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="leading-none tracking-tighter enormous-text font-semibold ml-4 -mt-2">
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
            <div>┌──────────────────────── <span className='inline-flex font-mono text-sm font-semibold leading-none tracking-tighter pl-4 pr-3'>Try clicking the <MoonOrSun /></span> ─┐</div>
            <div className='pl-7'>
              <div>A computer science student </div>
              <div>passionate about (building) beautiful websites</div>
              <div>and creating apps that solve fun problems.</div>
            </div>
            <div className='pl-7'>
              <div className='-mb-1'>I prefer minimalistic practicality that maintains</div>
              <div>a high level of <span className={`${instrumentSerif.className} inline-flex tracking-tight font-semibold text-4xl pl-1 pr-1`}>elegant</span> performance</div>
            </div>
            <div>└─────────────────────────────────┘</div>
          </div>
        </>
      )}
    </>
  );
}