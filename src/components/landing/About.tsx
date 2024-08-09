import React from 'react'

function About() {
  return (
    <div id='about' className="hero h-[50vh] ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className='text-left flex justify-center flex-col '>
          <div className='flex gap-6 flex-col'>
            <h2 className='text-3xl font-bold'>Sobre mí</h2>
            <div className='border shadow-xl bg-indigo-800 opacity-80 rounded-xl border-sky-500 flex flex-col h-56 p-5 gap-2 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <div className='self-end'>
                <button className='btn btn-outline'>Abrir CV</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default About
