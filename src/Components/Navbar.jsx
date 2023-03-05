import {NavLink} from "react-router-dom"
import logo from '../Assets/Logo.png'
import '../Styles/Navbar.css'

function Banner() {
	return (
    <div className='navbar'>
        <img src={logo} alt='Logo du site Kasa' />
        <nav>
            <ul>
                <NavLink 
                    to="/"
                    style={({ isActive }) =>
                        isActive ? { textDecoration: "underline" } : undefined
                    }><li>Accueil</li>
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({ isActive }) =>
                        isActive ? { textDecoration: "underline" } : undefined
                    }><li>A Propos</li>
                </NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Banner