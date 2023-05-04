import React from 'react'
import logo from './images/logo.png'
import compIcon from './images/compIcon.png'
import personIcon from './images/personIcon.png'
import './head.css'
function Head() {
  return (
    <div className='head'>
      <div className='logo'>
        <img src={logo} />
      </div>

      <div className='personState'>
        
        <div className='compButton'>
          <img src={compIcon} />
          <span>Мои кампании</span>
        </div>
        <div className='PersonButton'>
          <img src={personIcon} />
          <span>Мои данные</span>
        </div>

      </div>
      <div className='exit'>
        <button className='exitButton'>Выйти</button>
      </div>
    </div>
  )
}

export default Head
