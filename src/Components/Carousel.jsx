import React, { useState } from 'react'
import chevronGauche from "../Assets/ChevronGauche.png"
import chevronDroit from "../Assets/ChevronDroit.png"
import "../Styles/Carousel.css"


function Carousel({pictures}) {
  const [cpt, setCpt] = useState(0)
  const nbrePictures = pictures.length-1
  if (cpt < 0) setCpt(nbrePictures)
  if (cpt > nbrePictures) setCpt(0)

  return (
    <div className='carousel'>
      <div className='div-image'>
        <img src={pictures[cpt]} className="classImage" key={"car-"+cpt} alt="" />
      </div>
      <div>
        <button onClick={() => setCpt(cpt - 1)} alt=''>{cpt}
          <img src={chevronGauche} className='classChevronGauche' alt='' />
        </button>
        <button onClick={() => setCpt(cpt + 1)} alt=''>{cpt}
          <img src={chevronDroit} className='classChevronDroit' alt='' />
        </button>
      </div>
      <p>{cpt+1}/{nbrePictures+1}</p>
    </div>
  )
}

export default Carousel