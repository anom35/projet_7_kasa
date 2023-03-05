import React from 'react'
import { Link } from "react-router-dom"
import Shaping from "../Components/Shaping"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

import "../Styles/About.css"

function About() {
  return (
    <div>
      <Shaping>
        <Navbar />
        <div className='about'>
          <span>404</span>
          <h4>Oups! La page que vous demandez n'existe pas.</h4>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </Shaping>
      <Footer />
    </div>
  )
}

export default About