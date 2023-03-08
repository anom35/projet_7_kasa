import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import Navbar from "../Layout/Navbar"
import Banner from '../Components/Banner'
import Footer from "../Layout/Footer"
import Shaping from "../Layout/Shaping"
import ErrorPage from "../Pages/ErrorPage"
import Collapse from '../Components/Collapse'
import CollapseList from '../Components/CollapseList'

// import Carousel from '../Components/Carousel'

import "../Styles/Logement.css"
import records from "../Datas/logements.json"


function Logement() {
  // récupère l'ID de l'URL
  const [searchParams] = useSearchParams();
  const [idLogement] = useState(searchParams.get('_id'));
  // cherche l'id dans le fichier logements.json
  const record = records.find(element => element.id === idLogement)
  // undefined indique que l'URL à été modifié manuellement, envoi sur la page d'erreur
  if (record === undefined) return(<ErrorPage />)

  const arrayStars = [1, 2, 3, 4, 5]

  return (
    <div  className='logement'>
      <Shaping>
        <Navbar />
        <Banner imageUrl="logement"/>

        <div className='ficheLogement'>
          <div className='div-description'>
            <h1>{record.title}</h1>
            <h4>{record.location}</h4>
            <div className='div-tags'>
              {
                record.tags.map((element) => {
                  return(<p className='tags' key={"tags-"+element}>{element}</p>)
                })
              }
            </div>
          </div>
          <div className='bloc-stars'>
            <div className='div-etoiles'>
              <p>{record.host.name}</p>
              <img src={record.host.picture} alt={record.title} />
            </div>
            
            {/* Met et colorie les étoiles */}
            <div className='stars'>
              {
                arrayStars.map(element => {
                  const nbreEtoiles = parseInt(record.rating)
                  if (element <= nbreEtoiles) { 
                    return(<span key={"star-"+element} className="span1">★</span>) 
                  } 
                  else { 
                    return(<span key={"star-"+element} className="span2">★</span>) 
                  }
                })
              }
            </div>
          </div>
        </div>
        
        <div className='collapseLogement'>
            <Collapse title="Description" content={record.description} />
            <CollapseList title="Equipements" content={record.equipments} />
        </div>


      </Shaping>
      <Footer />
    </div>
  )
}

export default Logement