import React from 'react'
import { instrumentserifitalic } from '@/app/layout'
import interestsInfo from '../../../../public/interestsInfo.json'

export default function Interests() {
  return (
    <div className=''>
      <div className={`leading-none tracking-tighter font-semibold text-7xl pb-8`}>Interests:</div>
      
      <div className='flex mb-12'>
          <div className={`text-sm`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>Guitar...</div>{interestsInfo.guitar}</div>
      </div>

      <div className='flex mb-12'>
          <div className={`text-sm`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>Fitness...</div>{interestsInfo.fitness}</div>
      </div>

      <div className='flex mb-12'>
          <div className={`text-sm`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>Hiking...</div>{interestsInfo.hiking}</div>
      </div>

      <div className='flex mb-12'>
          <div className={`text-sm`}><div className={`${instrumentserifitalic.className} text-4xl inline-flex`}>Fashion...</div>{interestsInfo.fashion}</div>
      </div>


    </div>
  )
}