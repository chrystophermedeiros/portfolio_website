import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV?</a>
      <a href="#contact" className='btn btn-primary'>Meus contatos</a>
    </div>
  )
}

export default CTA