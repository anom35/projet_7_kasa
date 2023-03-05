import React from 'react'
import { useSearchParams } from 'react-router-dom'

import Navbar from "../Components/Navbar"
import Banner from '../Components/Banner'
import Footer from "../Components/Footer"
import Shaping from "../Components/Shaping"
// import Carousel from '../Components/Carousel'
// import Collapse from '../Components/Collapse'

import "../Styles/Logement.css"

function Logement() {

  const idLogement = useSearchParams().get('_id')

  return (
    <div>
      <Shaping>
        <Navbar />
        <Banner imageUrl="logement"/>
      </Shaping>
      <Footer />
    </div>
  )
}

export default Logement