import React from 'react'
import { Link } from "react-router-dom"
import Shaping from "../Components/Shaping"
import Navbar from "../Components/Navbar"
import Banner2 from '../Components/Banner2'
import Footer from "../Components/Footer"

import "../Styles/About.css"

function About() {
  return (
    <div>
      <Shaping>
        <Navbar />
        <Banner2 />
        <div className='about'>
          <span>About</span>
          <h4>Oups! La page que vous demandez n'existe pas.</h4>
          <p><Link to="/">Retourner sur la page d’accueil</Link></p>
        </div>
      </Shaping>
      <Footer />
    </div>
  )
}

export default About