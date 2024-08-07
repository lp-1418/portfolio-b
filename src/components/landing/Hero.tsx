import React from 'react'

function Hero() {
  return (
    <div className="hero h-[84vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='text-left flex justify-center flex-row  mb-[30%]'>
          <div className='flex gap-6 flex-col'>
            <div>
              <p>Mi nombre es </p>
              <h1 className="text-7xl font-extrabold">Lucas Perata.</h1>
            </div>
            <p className='text-5xl font-semibold'>Escribo instrucciones para autómatas.</p>
            <div className='w-1/2'>
              <p className="">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
