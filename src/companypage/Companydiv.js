import React from 'react'
import './company.css'
import book from './image/800px-The_Jungle_(1906)_cover.jpg'

function Companydiv() {
  return (
    <div className='company-div'>
      <div className='mainProperty'>
        <div className='imgBook'>
          <img src={book} className='bookimg'/>
        </div>
        <div className='aboutComp'>
          <h3>Название компании</h3>
          <p><span className='blackWrite'>Дата старта</span> 15 августа 2022 </p>
          <p><span className='blackWrite'>Клики</span> 12</p>
          <span className='url'>www.company.com</span>
        </div>
      </div>
      <div className='doProperty'>
        <div className='public'>Опубликовано</div>
        <button className='edit'>Редактировать</button>
      </div>
    </div>
  )
}

export default Companydiv
