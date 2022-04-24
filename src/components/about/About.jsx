import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
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


            <article className='about_card'><FaAward className='about_icon' />
              <h5>Experiencia</h5>
              <small>Mais de 3 anos de trabalho </small>
            </article>

            <article className='about_card'><FiUsers className='about_icon' />
              <h5>Clientes</h5>
              <small>Atualmente 2 clientes no Brasil </small>
            </article>

            <article className='about_card'><VscFolderLibrary className='about_icon' />
              <h5>Projetos</h5>
              <small>5 projetos completos </small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloribus quam inventore asperiores, autem quaerat tempora voluptas ut doloremque perspiciatis dicta numquam quas iste repellendus voluptatem eaque. Fugit, eaque explicabo.
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About