
import React, { useState } from 'react'
import chevronGauche from "../Assets/ChevronGauche.png"
import chevronDroit from "../Assets/ChevronDroit.png"
import "../Styles/Carousel.css"


function Carousel({pictures}) { //reçois un tableau avec les URL des images

  const [cpt, setCpt] = useState(0)  // variable de compteur, défini au départ sur 0
  const nbrePictures = pictures.length-1 // nombre max d'images

  if (cpt < 0) setCpt(nbrePictures)  // si inférieur à zéro, défini le nombre d'images max
  if (cpt > nbrePictures) setCpt(0)  // si supérieur au max d'images, alors met à zéro
  
  if (nbrePictures === 0) {  // pour le cas ou il n'y a qu'une image (pas de flèches ni de compteur d'images)
    return (
      <div className='carousel'>
        {/* emplacement image du carousel */}
        <div className='div-image'>
          <img src={pictures[cpt]} className="classImage" key={"car-"+cpt} alt={"photo "+cpt} />
        </div>
      </div>
    )
  } else {   // pour le cas ou il y a plusieurs images
    return(
      <div className='carousel'>

        <div className='div-image'>  {/* affiche image */}
          <img src={pictures[cpt]} className="classImage" key={"car-"+cpt} alt={"photo "+cpt} />
        </div>

        <div> {/* les boutons qui afficherons les chevrons */}
          <button onClick={() => setCpt(cpt - 1)}>{cpt}
            <img src={chevronGauche} className='classChevronGauche' alt={'flèche gauche pour changer de photo '+cpt} />
          </button>
          <button onClick={() => setCpt(cpt + 1)}>{cpt}
            <img src={chevronDroit} className='classChevronDroit' alt={'flèche droite pour changer de photo '+cpt} />
          </button>
        </div>
        {/* compteur d'images */}
        <p className='compteurImages'>{cpt+1}/{nbrePictures+1}</p>
      </div>
    )
  }
}

export default Carousel