import React from 'react'
import "../Styles/Shaping.css"

// composant qui gère la marge gauche et droite pour tous les enfants
function Shaping({children}) {
  return (
    <div className='shaping'>{children}</div>
  )
}

export default Shaping