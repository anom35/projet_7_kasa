import React from 'react'
import { Link } from "react-router-dom"

import "../Styles/Logements.css"

import records from "../Datas/logements.json"

function Logements() {
  return (
    <div className='logements'>
      {
        records.map( record => { 
          return (

            <div className='fiche-logement'>
              <Link to={{ 
                  pathname: "/Logement",
                  search: "?_id="+record.id 
                }}>
                <img src={record.cover} alt={record.title} />
                <h3>{record.title}</h3>
              </Link>
            </div>
          )
         })
      }
    </div>
  )
}

export default Logements