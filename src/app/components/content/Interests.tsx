import React from 'react'
import { Instrument_Serif } from 'next/font/google';
import { interests } from '@/app/data/InterestsContents'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],   
  style: ['italic'],
});

export default function Interests() {
  return (
    <div className=''>
      <div className={`leading-none tracking-tighter font-semibold text-7xl pb-8`}>Interests:</div>

      {interests.map((interest, i) => 
        <div key = {i} className='flex mb-12'>
          <div className={`text-lg`}><div className={`${instrumentSerif.className} ${interest.color} text-4xl inline-flex`}>{interest.title}...</div>{interest.description}</div>
        </div>
      )}
    </div>
  )
}