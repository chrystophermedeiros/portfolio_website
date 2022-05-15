import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s6kopor', 'template_yhl8i7s', form.current, 'dHGKmR6mVFE-BTtqm')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Entrar em contato</h5>
      <h2>Contato</h2>

      <div className="container contact_container">
        <div className="contact_options">

          <article className="contact_option">
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5> chrystopher312
              @gmail.com</h5>
            <a href="mailto:chrystopher312@gmail.com" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>

        

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 (88) 9 9806-1512</h5>
            <a href="https://api.whatsapp.com/send?phone=+998061512" target="_blank" rel="noreferrer">Enviar mensagem</a>
          </article>


        </div>
        {/*Fim de opção de contato*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu Nome' required />

          <input type="text" name='email' placeholder='Seu Email' required />

          <textarea name="message" rows="7" placeholder='Sua Mensagem' required></textarea>

          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>

    </section>
  )
}

export default Contact