import React from 'react'

const MENU = () => {
  return (
    <div className='Menu'>
      <ul className='Menulist'>
        <li className='MenulistItem'>
          <a className='MenulistItemlink' href="/">
            LOGIN
          </a>
        </li>
        <li className='MenulistItem'>
          <a className='MenulistItemlink'href="/INFORMACION">
            INFORMACION
          </a>
        </li>
        <li className='MenulistItem'>
          <a className='MenulistItemlink'href="/TIPS">
            TIPS
          </a>
        </li>
        <li className='MenulistItem'>
          <a className='MenulistItemlink'href="/CONTACTO">
            CONTACTO
          </a>
        </li>
      </ul>

      
    </div>
  )
}

export default MENU