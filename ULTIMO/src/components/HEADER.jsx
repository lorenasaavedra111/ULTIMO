import React from 'react'
import logo from "../assets/IMAGES/LOGO.png"
import '../styles/HEADER.sass'
import MENU from './MENU'

const HEADER = () => {
  return (
    <div className='Header'>
      <div className='HeaderContainer'>
        <div className='HeadercontainerSpace'>
          <img src={logo} alt="logo"className='HeadercontainerSpaceLogo'/>
        </div>
        <div className='HeadercontainerSpace'>
          <h1 className='HeadercontainerSpacetitle'>ALERTA DE BIENESTAR</h1>
        </div>
      </div>
      <div className='HeaderMenu'>
        <MENU/>  
      </div>
    </div>
  )
}


export default HEADER