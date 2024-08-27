import React from 'react'
import { ContactInfo } from '../extras/ContactInfo'
import "./landing.css"

function Contact() {
  return (
    <div id='contacto' className="flex flex-col xl:w-[65vw] xl:h-[65vh] w-full h-full">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='flex flex-col w-full'>
          <div className='flex gap-6 flex-col'>
            <h2 className='text-3xl font-bold'> <span className='text-second'>5. </span>Contacto</h2>
            <div className=' flex flex-col xl:flex-row justify-between p-5'>
              <div className="w-96">
                <h3 className='text-second  text-4xl'>Hablemos si querés saber más sobre mí.</h3>
                <div className="mt-6">
                  <ul className="flex flex-col gap-4">
                    <li>blablabla@mail.com</li>
                    <li>112324221</li>
                  </ul>
                </div>
              </div>
              <div className="border border-sky-600 h-full shadow-xl bg-indigo-900 rounded-xl p-8">
                <ContactInfo />
              </div>

            </div>
          </div>
        </div>
      </div >
    </div >

  )
}

export default Contact
