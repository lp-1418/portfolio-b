import React from 'react'

function Projects() {
  return (
    <div className="hero h-[50vh] ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className='text-left flex justify-center flex-col '>
          <div className='flex gap-6 flex-col'>
            <h2 className='text-3xl font-bold'>Proyectos</h2>
            <div className='w-[50vw] gap-5 flex flex-row-reverse'>
              <div className='text-right'>
                <h3>Proyecto 1</h3>
                <p className='w-80'>Descripción descripción descripción de palabras Descripción descripción descripción de palabras</p>
              </div>
              <div className="mockup-browser bg-base-300 border">
                <div className="mockup-browser-toolbar">
                  <div className="input">https://daisyui.com</div>
                </div>
                <div className="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >

  )
}

export default Projects
