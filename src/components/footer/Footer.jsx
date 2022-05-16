import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>CMS</a>
      <ul className='permalinks'>
        <li><a href="#root">Home</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#experience">Experiencias</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testemunhas</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small> &copy;CMS tutoriais. Todos os direitos reservados, 2022.</small>
      </div>

    </footer>
  )
}

export default Footer