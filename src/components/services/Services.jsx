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
              <h3>Dashboard em Excel</h3>
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
               <p>HTML5 - tenho uma boa experiência em criar páginas com as tags semânticas.. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>CSS3 - tenho uma boa experiencia para estilizar e modelar a pagina de acordo com projeto. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>JS - tenho conhecimento em: funções, arrays , objeto, algoritmo, logica, looping entre outros conceitos. </p>
              </li>

              <li>
               < BsCheck className="service_list-icon"/>
               <p>React - desenvolvi apenas 2. </p>
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