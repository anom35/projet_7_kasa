import React from 'react'
import Navbar from "../Layout/Navbar"
import Shaping from '../Layout/Shaping'
import Banner from '../Components/Banner'
import Footer from "../Layout/Footer"
import Logements from '../Components/Logements'

import "../Styles/Home.css"

function Home() {
  return (
    <div>
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