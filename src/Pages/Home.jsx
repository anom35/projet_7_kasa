import React from 'react'
import Navbar from "../Components/Navbar"
import Shaping from '../Components/Shaping'
import Banner from '../Components/Banner'
import Footer from "../Components/Footer"
import Logements from '../Components/Logements'

import "../Styles/Home.css"

function Home() {
  return (
    <div>
      <Shaping>
        <Navbar />
        <Banner imageUrl="home" />
        <Logements />
      </Shaping>
      <Footer />
    </div>
  )
}

export default Home