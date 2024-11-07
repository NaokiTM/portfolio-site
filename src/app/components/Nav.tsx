import React from 'react'
import { instrumentserif } from '../layout'

export default function Nav() {
  return (
    <div className={`flex p-16 -mr-10 flex-col leading-none tracking-tighter font-medium text-4xl`}>
      <div>About</div>
      <div>Projects</div>
      <div>Experience</div>
      <div>Interests</div>
      <div>Contact</div>
    </div>
  )
}