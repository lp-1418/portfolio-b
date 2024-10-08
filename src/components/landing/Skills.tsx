import React from 'react'
import CardSkills from '../extras/CardSkills'
import "./landing.css"

function Skills() {
  return (
    <div className="text-gray-400 hero flex flex-col h-[50rem] mb-5 xl:h-full xl:mb-[5vh]">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className='text-left flex justify-center flex-row'>
          <div className='flex gap-6 flex-wrap'>
            <h2 className='text-3xl font-bold'> <span className='text-second'>2. </span>Conocimientos técnicos</h2>
            <div className='flex flex-wrap justify-center  gap-5 p-10 max-h-[55vh]'>

              <CardSkills link={"/logos/github.svg"} />
              <CardSkills link={"logos/linux.png"} />
              <CardSkills link={"logos/c-.svg"} />
              <CardSkills link={"logos/react.svg"} />
              <CardSkills link={"logos/ts.svg"} />
              <CardSkills link={"logos/post.svg"} />
              <CardSkills link={"logos/swagger.svg"} />
              <CardSkills link={"logos/swagger.svg"} />

              <CardSkills link={"logos/ts.svg"} />
              <CardSkills link={"logos/ts.svg"} />

            </div>
            <div>

            </div>

          </div>
        </div>
      </div>
    </div >
  )
}

export default Skills
