import React from 'react'
import Navbar from "../Components/Navbar"
import Shaping from '../Components/Shaping'
import Banner from '../Components/Banner'

import "../Styles/Home.css"

function Home() {
  return (
    <div>
      <Shaping>
        <Navbar />
        <Banner imageUrl="home" />
      </Shaping>
    </div>
  )
}

export default Home