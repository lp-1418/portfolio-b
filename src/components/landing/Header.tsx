import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./landing.css"
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';

function Header({ isAuth, setIsAuth }) {
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


  const signUserOut = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }

  return (
    <div className={`shadow-sm navbar border-second bg-gradient-to-r from-indigo-800 to-indigo-950 opacity-100 p-7 ${show ? 'active' : 'hidden'}`}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl"><Link to="/">LP</Link></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-[1.8vh]  px-1">
          <li><a href='#about'>Sobre mí</a></li>
          <li><a href='#proyectos'>Proyectos</a></li>
          <li><a href='#contacto'>Contacto</a></li>
          <li>
            {!isAuth ? <Link to="/login" > Login </Link> : <div>
              <button onClick={signUserOut} className='btn'>Logout</button>
              <Link to="/create" > New Post </Link>
            </div>}
          </li>
          <li>
            <Link to="/blog" >Blog </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
