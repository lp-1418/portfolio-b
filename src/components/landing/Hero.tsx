import React, { useEffect, useState } from 'react'
import "./landing.css"
import { FaArrowAltCircleDown } from "react-icons/fa";

function Hero() {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 1500);

  }, []);

  return (
    <div className="hero hero-b h-[84vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='text-left flex justify-center flex-row slide-in mb-[30%]'>
          <div className='flex gap-6 flex-col '>
            <div className=''>
              <p className='text-second'>Mi nombre es </p>
              <h1 className="text-7xl text-white font-extrabold">Lucas.</h1>
            </div>
            <p className='flex gap-1 flex-row items-end text-5xl text-gray-400 font-semibold'>
              <div>Escribo instrucciones para autómatas </div>
              <span className='relative mb-1 flex h-3 w-3'>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
            </p>
            <div className='w-1/2'>
              <p className="">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>
            <div className='flex gap-4'>
              <button className="btn-outline btn">CV</button>
              <button className='btn'>Blog</button>
            </div>
          </div>
        </div>
      </div>

      {
        isVisible ? <div className='self-end animate-bounce'>
          <FaArrowAltCircleDown size={25} />
        </div> : <div> </div>
      }

    </div>
  )
}

export default Hero
