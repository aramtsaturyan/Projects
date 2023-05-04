import React, { useState } from 'react'
import Companydiv from './Companydiv.js'
import './company.css'
import CreatePage from './CreatePage.js'

function Company() {

  const [showForm, setShowForm] = useState(false)
  const a = [<Companydiv />, <Companydiv />, <Companydiv />, <Companydiv />, <Companydiv />]
  
  return (
    <div className='company'>
      <div className='createComp'>
        <button className='createBut' onClick={()=>{setShowForm(true)}}>Создать компанию</button>
      </div>
      <div>
            
            {showForm && (
              <div className='compForm' >
                <div className='form'>
                    <CreatePage />
                </div>
             </div> 
            )}
          
      </div>
      <div className='nameComp'> 
      <div className='companies'>
        {a.map((item) =>{
        return (
          <div>{item}</div>
        )
        
      })}
      </div>
      </div>
     
    </div>
  )
}

export default Company
