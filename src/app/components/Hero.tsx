import React from 'react'
import { instrumentserif } from '../layout'
import Emoji from './Emoji'

export default function Hero() {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col'>
            <div >
                <div className='enormous-text mb-8 pl-2 font-medium tracking-tighter leading-none'>
                    <div className='-mb-4'>Naoki</div>
                    <div>Miyagawa</div>
                </div>
                <div className={`${instrumentserif.className} pl-5 text-5xl`}>
                    <div>I am a computer science student </div>
                    <div>passionate about (building) beautiful websites</div>
                    <div>and creating apps to solve fun problems.</div>
                </div>
            </div>
        </div>
        <div className='flex flex-grow items-center justify-center'>
            <Emoji />
        </div>
    </div>
  )
}