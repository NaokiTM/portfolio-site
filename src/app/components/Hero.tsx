import React from 'react'
import { instrumentserif } from '../layout'

export default function Hero() {
  return (
    <div className='flex justify-center items-center p-8'>
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <div className={`${instrumentserif.className} font-medium text-8xl mb-10 pt-8 pr-8 pb-8`}>
                    <div className=''>Naoki</div>
                    <div>Miyagawa</div>
                </div>
                <div className='text-3xl leading-none tracking-tighter font-medium'>
                    <div>I am a computer science student </div>
                    <div>passionate about (building) beautiful websites</div>
                    <div>and creating apps to solve fun problems.</div>
                </div>
            </div>
        </div>
    </div>
  )
}