import React from 'react'
import './about.css'
import ME from '../../assets/hacker.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Conhecer</h5>
      <h2>Sobre mim</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Minha imagem" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experiencia</h5>
              <small>Mais de 7 anos de trabalho </small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clientes</h5>
              <small>Atualmente 1 clientes no Brasil </small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projetos</h5>
              <small>4 projetos completos </small>
            </article>
          </div>
          <p>
            Sou Chrystopher Medeiros da Silva, tenho 26 anos, amo tecnologia, ensinar e aprender. Procuro sempre está me aperfeiçoando e buscando novas tecnologias.  
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
