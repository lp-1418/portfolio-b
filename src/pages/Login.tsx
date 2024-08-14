import React from 'react'
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import "../components/landing/landing.css"
import { useNavigate } from "react-router-dom"

function Login({ setIsAuth }) {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      navigate("/");
    })
  };

  return (
    <div className="h-[70vh] text-white hero-b flex justify-start">
      <div className="flex flex-col border rounded-xl shadow-xl m-auto p-5 gap-4">
        <h2 className='text-2xl'>Login</h2>
        <p className="text-white">Ingresá con tu cuenta de Google</p>
        <button onClick={signInWithGoogle} className='btn'>Ingresar</button>
      </div>
    </div>
  )
}

export default Login
