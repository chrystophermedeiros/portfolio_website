import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Conhecer</h5>
      <h2>Sobre mim</h2>
      <div className="container about_cotainer">
        <div className="about_me">
        <div className="about_me-image">
          <img src="{ME}" alt="About Imge"/>
        </div>
        </div>

        <div className="about_content">

        </div>

      </div>
    </section>
  )
}

export default About