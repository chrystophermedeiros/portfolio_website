import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const {activeNav, setAxtiveNav} = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setAxtiveNav('#')}  className={activeNav === '#' ? 'acitve' :''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setAxtiveNav('#about')} className={activeNav === '#about' ? 'active' :''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setAxtiveNav('#experience')} className={activeNav === '#experience' ? 'active' :''}><BiBook/></a>
      <a href="#services" onClick={() => setAxtiveNav('#services')} className={activeNav === '#services' ? 'active' :''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setAxtiveNav('#contact')} className={activeNav === '#contact' ? 'active' :''}><BiMessageSquareDetail/></a>

      
    </nav>
  )
}

export default Nav