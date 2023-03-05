import React from 'react'
import { Link } from "react-router-dom"
import Shaping from "../Components/Shaping"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

import "../Styles/ErrorPage.css"

function ErrorPage() {
  return (
    <div>
      <Shaping>
        <Navbar />
        <div className='error commun-error'>
          <span>404</span>
          <h4>Oups! La page que vous demandez n'existe pas.</h4>
          <p><Link to="/">Retourner sur la page d’accueil</Link></p>
        </div>
      </Shaping>
      <Footer />
    </div>
  )
}

export default ErrorPage