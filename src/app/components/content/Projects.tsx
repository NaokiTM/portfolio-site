import React from 'react'
import { instrumentserifitalic } from '@/app/layout'

export default function Projects() {
  return (
    <div className=''>
        <div className={`leading-none tracking-tighter font-semibold text-7xl pb-8`}>Projects:</div>
        <div className='flex flex-row align-top space-x-4'>
          <div className='flex flex-col'>
            <div className={`${instrumentserifitalic.className} text-4xl mb-2`}>Personal Website</div>
            <p>This was one of the more fun projects I got to build, since I get to build a site that has layouts, typography, and features that I personally like. This project was a way for me to get hands on experience with contexts and refs, both needed for the theme selector and scroll-to-component features. The positioning of the sticky sidebar was something that took trial and error, but taught me more about how different utility classes in tailwind work together or against each other. </p>
          </div>

          <div className='flex flex-col'>
            <div className={`${instrumentserifitalic.className} text-4xl mb-2`}>Knights Tour Autosolver</div>
            <p>An implementation of the Knights Tour puzzle, which I solve by using warnsdorffs rule (basically finds the move that has the smallest number of moves from it on the board). This rule was implemented by using nested loops to loop through each of the possible movesets, and iterating through the number of moves possible from that square.</p>
          </div>

          <div className='flex flex-col'>
            <div className={`${instrumentserifitalic.className} text-4xl mb-2`}>React Typing Game</div>
            <p className='mb-8'>The project is inspired by monkeytype, which is different to other typing tests, in that the test doesn't take place in a input field, but rather through splitting the words into an array of letters, and moving the caret from one letter to another. This is more visually appealing, and allows for individual letter highlighting to indicate the state of correctness for each letter.</p>
          </div>
        </div>
    
    </div>
  )
}
