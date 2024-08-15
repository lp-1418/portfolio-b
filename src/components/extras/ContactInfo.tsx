import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactInfo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //FIX: env variables secrets
    emailjs
      .sendForm('service_zpkl3nd', 'template_dmf9ygj', form.current, {
        publicKey: 'eRm6lXffgdodii9nI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='flex gap-8 flex-row w-[28vw] flex-wrap' ref={form} onSubmit={sendEmail}>
      <div className='flex flex-col'>
        <label>Nombre</label>
        <input className="input input-bordered" type="text" name="user_name" />
      </div>
      <div className='flex flex-col'>
        <label>Teléfono</label>
        <input className="input input-bordered" type="number" name="cellphone" />
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input type="email" className="input input-bordered" name="user_email" />
      </div>
      <div className="flex flex-col">
        <label>Motivo</label>
        <input type="text" className="input input-bordered" name="user_email" />
      </div>
      <div className="flex flex-col w-full">
        <label>Mensaje</label>
        <textarea className='textarea textarea-bordered' name="message" />
      </div>
      <div className="w-full text-right">
        <button className="btn btn-success" type="submit" value="Send"> Enviar </button>
      </div>
    </form>
  );
};

