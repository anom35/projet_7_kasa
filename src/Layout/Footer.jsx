import React from 'react'
import logo from "../Assets/LogoNoir.jpg"
import "../Styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt='Logo de bas de page' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer