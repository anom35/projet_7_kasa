import React from 'react'
import Shaping from "../Layout/Shaping"
import Navbar from "../Layout/Navbar"
import Banner2 from '../Components/Banner2'
import Footer from "../Layout/Footer"
import Collapse from '../Components/Collapse'

import "../Styles/About.css"

function About() {
  const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  return (
    <div className='flex'>
      <Shaping>
        <Navbar />
        <Banner2 />
        <div className='about'>
          <div className='paramsCollapse'><Collapse title="Fiabilité" content="" /></div>
          <div className='paramsCollapse'><Collapse title="Respect" content={respect} /></div>
          <div className='paramsCollapse'><Collapse title="Service" content="" /></div>
          <div className='paramsCollapse'><Collapse title="Responsabilité" content="" /></div>
        </div>
      </Shaping>
      <Footer />
    </div>
  )
}

export default About