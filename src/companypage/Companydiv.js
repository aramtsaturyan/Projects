import React, { useMemo } from 'react'
import './company.css'
// import book from './image/800px-The_Jungle_(1906)_cover.jpg'
import { BASE_URL } from '../config'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


function Companydiv({name, content, clicks, startDate, url, maxShowCount, showCount}) {
  const date = useMemo(() => new Date(startDate), [])
  return (
    <div className='company-div'>
      <div className='mainProperty'>
        <div className='imgBook'>
          <img src={`${BASE_URL}${content}`} className='bookimg'/>
        </div>
        <div className='aboutComp'>
          <h3>{name}</h3>
          <p><span className='blackWrite'>Дата старта</span> {date.getDay()} {monthNames[date.getMonth()]} {date.getFullYear()} </p>
          <p><span className='blackWrite'>Клики</span> {clicks}</p>
          <span className='url'>{url}</span>
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
