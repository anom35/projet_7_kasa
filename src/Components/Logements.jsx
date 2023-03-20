import React from 'react'
import { Link } from "react-router-dom"
import records from "../Datas/logements.json"
import "../Styles/Logements.css"

function Logements() {
  return (
    <div className='logements'>
      {
        records.map( record => {  // parcours le fichier de données et affiche les cartes logements
          return (
            <div className='fiche-logement' key={record.id}>

              {/* lien pour chaque carte logement */}
              <Link to={{ pathname: "/Logement", search: "?_id="+record.id }}>
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