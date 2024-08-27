import React from 'react'

function CardSkills({ link }) {
  return (
    <div className="transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200 card xl:w-52 w-32 bg-gradient-to-r from-sky-700 via-purple-500 to-sky-900 shadow-sm hover:shadow-xl">
      <div className="card-body items-center ">
        <img alt="habilidades-icono" width={100} src={link} />
      </div>
    </div>
  )
}

export default CardSkills
