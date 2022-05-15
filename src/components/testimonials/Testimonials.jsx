import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Relatos dos clientes</h5>
      <h2>Testemunhas</h2>
      <div className='container testimonials_container'>
        
        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR1} alt="avatar 1" />
          </div>
          <div>
          <h5 className='client_name'>Ernestro Sobreira</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
          </div>
        </article>
       

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR2} alt="avatar 2" />
          </div>
          <div>
          <h5 className='client_name'>Ernestro Sobreira</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
          </div>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR3} alt="avatar 3" />
          </div>
          <div>
          <h5 className='client_name'>Ernestro Sobreira</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
          </div>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR4} alt="avatar 4" />
          </div>
          <div>
          <h5 className='client_name'>Ernestro Sobreira</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </small>
          </div>
        </article>

        
    
      </div>
    </section>
  )
}

export default Testimonials