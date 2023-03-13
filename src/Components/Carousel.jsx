import React, { useState } from 'react'
import chevronGauche from "../Assets/ChevronGauche.png"
import chevronDroit from "../Assets/ChevronDroit.png"
import "../Styles/Carousel.css"


function Carousel({pictures}) {
  const [cpt, setCpt] = useState(0)
  const nbrePictures = pictures.length-1 // nombre max d'images
  if (cpt < 0) setCpt(nbrePictures)
  if (cpt > nbrePictures) setCpt(0)
  
  if (nbrePictures === 0) {
    return (
      <div className='carousel'>
        {/* emplacement image du carousel */}
        <div className='div-image'>
          <img src={pictures[cpt]} className="classImage" key={"car-"+cpt} alt={"photo "+cpt} />
        </div>
      </div>
    )
  } else { 
    let suite =""
    if (window.screen.width > 450) {
      suite = <p>{cpt+1}/{nbrePictures+1}</p>
    } else suite = ""
    
    return(
      <div className='carousel'>

        <div className='div-image'>
          <img src={pictures[cpt]} className="classImage" key={"car-"+cpt} alt={"photo "+cpt} />
        </div>

        <div>
          <button onClick={() => setCpt(cpt - 1)}>{cpt}
            <img src={chevronGauche} className='classChevronGauche' alt={'flèche gauche pour changer de photo '+cpt} />
          </button>
          <button onClick={() => setCpt(cpt + 1)}>{cpt}
            <img src={chevronDroit} className='classChevronDroit' alt={'flèche droite pour changer de photo '+cpt} />
          </button>
        </div>
        {suite}
      </div>
    )
  }
}

export default Carousel