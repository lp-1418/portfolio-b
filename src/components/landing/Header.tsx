import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./landing.css"

function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <div className={`text-gray-400 p-10 shadow-sm navbar xl:navbar border-second bg-gradient-to-r from-indigo-800 to-indigo-950 opacity-100  ${show ? 'active' : 'hidden'}`}>
      <div className=' w-full mr-10 ml-10'>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"><Link to="/">LP</Link></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-[1.8vh]  px-1">
            <li><Link to={"/"}>Home </Link></li>
            <li>
              <Link to="/blog" >Blog </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Header
