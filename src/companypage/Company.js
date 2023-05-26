import React, { useEffect, useState } from 'react'
import Companydiv from './Companydiv.js'
import './company.css'
import CreatePage from './CreatePage.js'
import { BASE_URL, TOKEN } from '../config.js'

function Company() {

  const [showForm, setShowForm] = useState(false)
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/api/v2/author/company`, {
      headers: {
        "Authorization": `Bearer ${TOKEN}`
      }
    }).then((res) => {
      return res.json()
    }).then((data) => {
      setCompanies(data)
    })
  }, [])
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
        {companies.map((company) => {
          return <Companydiv {...company} />
        })}
      </div>
      </div>
     
    </div>
  )
}

export default Company
