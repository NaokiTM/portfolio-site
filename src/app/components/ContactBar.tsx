import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";


function Contacts() {
  return (
    <div className='lg:w-24 text-4xl flex-shrink-0 bg-black text-white sticky top-0 sm:bottom-0 lg:h-screen lg:border-l-2 border-t-2 lg:border-t-0'>
      <div className="flex lg:flex-col justify-around lg:justify-center items-center lg:h-full p-4 lg:p-0 lg:space-y-5">
            <a href = 'https://github.com/NaokiTM' target='_blank' rel='noopener noreferrer' className='p-2 text-2xl lg:text-4xl'>
              <FiGithub />
            </a>
            <a href = 'https://www.linkedin.com/in/naoki-miyagawa-1234b8333/' target='_blank' rel='noopener noreferrer' className='p-2 text-2xl lg:text-4xl'>
              <FiLinkedin />
            </a>
        </div>
    </div>
  )
}

export default Contacts