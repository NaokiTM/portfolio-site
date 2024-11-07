import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";


function Contacts() {
  return (
    <div className={`text-4xl`}>
        <div className={`space-y-5 flex p-20 flex-col font-medium sticky h-screen items-center justify-center top-0 border-l-2`}>
            <FiGithub />
            <FiLinkedin />
        </div>
    </div>
  )
}

export default Contacts