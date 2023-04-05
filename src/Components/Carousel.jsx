
import React, { useState } from 'react'
import chevronGauche from "../Assets/ChevronGauche.png"
import chevronDroit from "../Assets/ChevronDroit.png"
import "../Styles/Carousel.css"


function Carousel({pictures}) { //reçois un tableau avec les URL des images

    const [index, setIndex] = useState(0)  // variable de compteur, défini au départ sur 0
    const totalPictures = pictures.length-1 // nombre max d'images

    if (index < 0) setIndex(totalPictures)  // si inférieur à zéro, défini le nombre d'images max
    if (index > totalPictures) setIndex(0)  // si supérieur au max d'images, alors met à zéro
    
    return(
        <div className='carousel'>

            <div className='div-image'>  {/* affiche image */}
                <img src={pictures[index]} className="classImage" key={"car-"+index} alt={"photo "+index} />
            </div>

            {/* si plus d'une image, alors ce code sera exécuté */}
            {totalPictures > 0 && ( 
                <div> {/* les boutons qui afficherons les chevrons */}
                    <button onClick={() => setIndex(index - 1)}>{index}
                        <img src={chevronGauche} className='classChevronGauche' alt={'flèche gauche pour changer de photo '+index} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                        <img src={chevronDroit} className='classChevronDroit' alt={'flèche droite pour changer de photo '+index} />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (
                <div className='div-compteur'> {/* compteur d'images */}
                    <p className='compteurImages'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Carousel