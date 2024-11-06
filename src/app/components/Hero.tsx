import React from 'react'
import { instrumentserif } from '../layout'
import Emoji from './Emoji'

export default function Hero() {
  return (
    <div className='flex justify-center items-center p-8'>
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <div >
                    <div className='mb-3 font-medium tracking-tighter leading-none text-6xl'>
                        <div className='-mb-2'>Naoki</div>
                        <div>Miyagawa</div>
                    </div>
                    <div className={`${instrumentserif.className} pl-1 text-3xl`}>
                        <div>I am a computer science student </div>
                        <div>passionate about (building) beautiful websites</div>
                        <div>and creating apps to solve fun problems.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}