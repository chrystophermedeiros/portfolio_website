import React from 'react'
import "./services.css"
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className='container services_container'>
          <article className='service'>
            <div className="service_head">
              <h3>UI/UX Designer</h3>
            </div>
            <ul className="service_list">
              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>
            </ul>
          </article>
          {/*FIM DA UI/UX */}


          <article className='service'>
            <div className="service_head">
              <h3>Desenvolvedor Web</h3>
            </div>
            <ul className="service_list">
              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>
            </ul>
          </article>
          {/*FIM WEB */}


          <article className='service'>
            <div className="service_head">
              <h3>Criador de conteúdo</h3>
            </div>
            <ul className="service_list">
              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, minus accusamus. </p>
              </li>
            </ul>
          </article>
          {/*FIM de criador de conteudo */}
      </div>
    </section>
  )
}

export default Services