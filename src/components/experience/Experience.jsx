import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Quais habilidades eu tenho</h5>
      <h2>Minha experiencia</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className='experience_content'>
          <article className='experience_details'>
            <BsCheckCircleFill className='experience_details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experiente</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsCheckCircleFill className='experience_details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediario</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsCheckCircleFill className='experience_details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediario</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsCheckCircleFill className='experience_details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Basico</small>
            </div>
          </article>

          </div>       

        </div>

        {/*END OF FRONTEND*/}

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className='experience_content'>
            
              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Basico</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsCheckCircleFill className='experience_details-icon'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Basico</small>
                </div>
              </article>

              

          
          </div>


          

        </div>
        {/*END OF BACKEND*/}

        <div className="information technology analyst">
          <h3>information technology analyst</h3>
          <div className='experience_content'>
          <article className='experience_details'>
            <BsCheckCircleFill className='experience_details-icon'/>
            <div>
              <h4>VMware</h4>
              <small className='text-light'>Experiente</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsCheckCircleFill className='experience_details-icon'/>
            <div>
              <h4>PFSENSE</h4>
              <small className='text-light'>Experiente</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsCheckCircleFill className='experience_details-icon'/>
            <div>
              <h4>AnyDesk e TeamViewer </h4>
              <small className='text-light'>Experiente</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsCheckCircleFill className='experience_details-icon'/>
            <div>
            <h4>Jupyter Notebook</h4>
            <small className='text-light'>Intermediario</small>
            </div>
          </article>

          </div>       

        </div>
        {/*END OF information technology analyst*/}

        <div className="Billing Analyst">
          <h3>Billing Analyst</h3>
          <div className='experience_content'>
          <article className='experience_details'>
            <BsCheckCircleFill className='experience_details-icon'/>
            <div>
              <h4>SUS</h4>
              <small className='text-light'>Experiente</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsCheckCircleFill className='experience_details-icon'/>
            <div>
              <h4>Notas fiscais</h4>
              <small className='text-light'>Experiente</small>
            </div>
          </article>
          </div>       

        </div>
        {/*END OF Billing Analyst*/}

      </div>
    </section>
  )
}

export default Experience