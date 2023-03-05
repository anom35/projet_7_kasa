import React from 'react'
import Fiche from './FicheLogement'

import "../Styles/Logements.css"

import records from "../Datas/logements.json"

function Logements() {
  return (
    <div className='logements'>
      {
        records.map( record => { 
          return (<Fiche 
            key={record.id} 
            id={record.id} 
            cover={record.cover} 
            title={record.title} 
          />)
         })
      }
    </div>
  )
}

export default Logements