import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data =[
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut obcaecati repudiandae provident fugit labore tempore repellat incidunt, error voluptas sit quae modi et laudantium rem quos eum soluta delectus.'
  },

  {
    avatar: AVTR2,
    name: 'Shatta wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut obcaecati repudiandae provident fugit labore tempore repellat incidunt, error voluptas sit quae modi et laudantium rem quos eum soluta delectus.'
  },


  {
    avatar: AVTR3,
    name: 'KwameDespite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut obcaecati repudiandae provident fugit labore tempore repellat incidunt, error voluptas sit quae modi et laudantium rem quos eum soluta delectus.'
  },


  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut obcaecati repudiandae provident fugit labore tempore repellat incidunt, error voluptas sit quae modi et laudantium rem quos eum soluta delectus.'
  },



]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Relatos dos clientes</h5>
      <h2>Testemunhas</h2>
      <Swiper className='container testimonials_container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
              return (
                <SwiperSlide key= {index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt=""/>
                </div>
                <div>
                <h5 className='client_name'>{name}</h5>
                  <small className='client_review'>
                    {review}
                  </small>
                </div>
              </SwiperSlide>
              )
          })
        
        }
           
    
      </Swiper>
    </section>
  )
}

export default Testimonials