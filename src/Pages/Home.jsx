import React from 'react'
import Navbar from "../Layout/Navbar"
import Shaping from '../Layout/Shaping' // mise en forme 100px droite gauche
import Banner from '../Components/Banner'
import Footer from "../Layout/Footer"
import Logements from '../Components/Logements'

import "../Styles/Home.css"

function Home() {
  return (
    <div role="main">
      <Shaping>
        <Navbar />
        <Banner />
        <Logements />
      </Shaping>
      <Footer />
    </div>
  )
}

export default Home