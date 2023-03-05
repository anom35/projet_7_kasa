import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as etoile } from '@fortawesome/free-solid-svg-icons'


import Navbar from "../Components/Navbar"
import Banner from '../Components/Banner'
import Footer from "../Components/Footer"
import Shaping from "../Components/Shaping"
// import Carousel from '../Components/Carousel'
import Collapse from '../Components/Collapse'

import "../Styles/Logement.css"
import records from "../Datas/logements.json"


function Logement() {
  const [searchParams] = useSearchParams();
  const [idLogement] = useState(searchParams.get('_id'));
  const record = records.find(element => element.id === idLogement)
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
                record.tags.map((element, index) => {
                  return(<p className='tags' key={"tags-"+index.toString()}>{element}</p>)
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
                    return(
                      <FontAwesomeIcon 
                        key={"fa_"+Math.random().toString()} 
                        icon={etoile} 
                        className="span1" 
                      />)
                  } else {
                    return(
                      <FontAwesomeIcon 
                        key={"fa_"+Math.random().toString()} 
                        icon={etoile} 
                        className="span2" 
                      />)
                  }
                })
              }
            </div>
          </div>
        </div>

        <div className='collapse'>
          <div>
            <Collapse title="Description" content={record.description} />
          </div>
          <div>
            <Collapse title="Equipements" content="essai" />
          </div>
        </div>


      </Shaping>
      <Footer />
    </div>
  )
}

export default Logement