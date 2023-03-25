import React from 'react'
import logo from "../Assets/LogoNoir.jpg"
import "../Styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='img_footer'><img src={logo} alt='Logo de bas de page' /></div>
            <div className='arr'><p>© 2020 Kasa. All rights reserved</p></div>
        </div>
    )
}

export default Footer