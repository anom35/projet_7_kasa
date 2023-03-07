import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import Navbar from "../Layout/Navbar"
import Banner from '../Components/Banner'
import Footer from "../Layout/Footer"
import Shaping from "../Layout/Shaping"
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
                  if (element <= nbreEtoiles) { return(<span className="span1">★</span>) } 
                  else { return(<span className="span2">★</span>) }
                })
              }
            </div>
          </div>
        </div>
          
        <div className='collapseLogement'>
            <Collapse title="Description" content={record.description} />
            <Collapse title="Equipements" content="essai" />
        </div>


      </Shaping>
      <Footer />
    </div>
  )
}

export default Logement