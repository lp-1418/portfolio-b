import React from 'react'

function Header() {
  return (
    <div className="navbar p-7">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">LP</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-[1.8vh]  px-1">
          <li><a href='"#about'>Sobre mí</a></li>
          {/* <li><a>Habilidades</a></li> */}
          <li><a href='#proyectos'>Proyectos</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
