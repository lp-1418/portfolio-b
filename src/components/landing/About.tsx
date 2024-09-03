import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./landing.css"

function About() {
  return (
    <div id='about' className="text-gray-400 hero  mt-20 xl:mt-0 xl:mb-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='text-left flex justify-center flex-col '>
          <div className='flex gap-6 flex-col'>
            <h2 className='text-3xl font-bold'> <span className='text-second'>1.</span> Sobre mí</h2>
            <div className='border shadow-xl bg-indigo-800 opacity-80 rounded-xl border-sky-500 flex flex-col h-[50%] xl:h-56 p-5 gap-2 '>
              <div className='flex justify-start flex-col'>
                <span>
                  Lorem ipsum dolor sit amet, <strong className='text-second'>consectetur adipiscing elit</strong>
                  , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  <strong className='text-second'> Duis aute irure dolor in reprehenderit</strong> in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  <strong className="text-second">Excepteur sint occaecat cupidatat</strong> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
              </div>
              <div className='flex p-10 justify-around'>
                <FaGithub className='transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200' size={40} />
                <SiLeetcode className='transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200' size={40} />
                <FaLinkedin className='transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200' size={40} />
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default About
