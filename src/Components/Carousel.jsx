import React, { useState } from 'react'
import chevronGauche from "../Assets/ChevronGauche.png"
import chevronDroit from "../Assets/ChevronDroit.png"
import "../Styles/Carousel.css"


function Carousel({pictures}) {
  const [cpt, setCpt] = useState(0)
  const nbrePictures = pictures.length-1 // nombre max d'images
  if (cpt < 0) setCpt(nbrePictures)
  if (cpt > nbrePictures) setCpt(0)

  return (
    <div className='carousel'>

      {/* emplacement image du carousel */}
      <div className='div-image'>
        <img src={pictures[cpt]} className="classImage" key={"car-"+cpt} alt={"photo "+cpt} />
      </div>

      {/* boutons avec chevrons pour changer d'image et incrémente ou décrémente le compteur */}
      <div>
        <button onClick={() => setCpt(cpt - 1)}>{cpt}
          <img src={chevronGauche} className='classChevronGauche' alt={'flèche gauche pour changer de photo '+cpt} />
        </button>
        <button onClick={() => setCpt(cpt + 1)}>{cpt}
          <img src={chevronDroit} className='classChevronDroit' alt={'flèche droite pour changer de photo '+cpt} />
        </button>
      </div>

      {/* affiche le n° de l'image en cours / nbre max */}
      <p>{cpt+1}/{nbrePictures+1}</p>

    </div>
  )
}

export default Carousel