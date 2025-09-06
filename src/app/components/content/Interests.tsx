import React from 'react'
import { Instrument_Serif } from 'next/font/google';
import interests from '../../../../public/interests.json'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],   
  style: ['italic'],
});

export default function Interests() {
  return (
    <div className=''>
      <div className={`leading-none tracking-tighter font-semibold text-7xl pb-8`}>Interests:</div>
      
      {/* <div className='flex mb-12'>
          <div className={`text-lg`}><div className={`${instrumentSerif.className} text-gitOrange text-4xl inline-flex`}>Guitar...</div>I have been playing guitar since I was quite young, and have still not grown old of it. I have achived Rockschool <b className='text-gitOrange'>grade 3 in electric guitar and grade 5 in acoustic.</b> I mainly enjoy metal music and electric guitar, but I can play some songs on acoustic too when needed.</div>
      </div>

      <div className='flex mb-12'>
          <div className={`text-lg`}><div className={`${instrumentSerif.className} text-javaOrange text-4xl inline-flex`}>Fitness...</div>Weightlifting has become somewhat of a habit for me, and I have been <b className='text-javaOrange'>going consistently to the gym for around a year.</b> I am motivated by any progress I see, and keeping my diet clean day after day provides a sense of accomplishment that I live by.</div>
      </div>

      <div className='flex mb-12'>
          <div className={`text-lg`}><div className={`${instrumentSerif.className} text-green-600 text-4xl inline-flex`}>Hiking...</div>I have done most of my hiking as <b className='text-green-600'>part of my scout group,</b> which then led me to do the <b className='text-green-600'>Ten Tors challenge 3 times,</b> where teams of 6 hike across dartmoor at various distances in 2 days unaided. I have completed <b className='text-green-600'>35 and 45 miles,</b> and have <b className='text-green-600'>attempted 55 miles.</b> This event is what has <b className='text-green-600'>taught me most about teamwork,</b> where we would each have responsibilities such as <b className='text-green-600'>navigation and setting up camp throughout the day,</b> but also <b className='text-green-600'>responsibility for ourselves</b> by keeping hydrated and coming prepared for the ever-changing hostile weather patterns.</div>
      </div> */}

      {interests.map(interest => 
        <div key = {interest.id} className='flex mb-12'>
          <div className={`text-lg`}><div className={`${instrumentSerif.className} text-javaOrange text-4xl inline-flex`}>{interest.title}...</div>{interest.description}</div>
        </div>
      )}
    </div>
  )
}