import {Link, NavLink} from "react-router-dom"
import logo from '../Assets/Logo.png'
import '../Styles/Navbar.css'

function Banner() {
	return (
    <div className='navbar'>
      <Link to="/">
        <img src={logo} alt='Logo du site Kasa' />
      </Link>
      <nav>
        <ul>
          {/* lien vers l'accueil */}
          <NavLink 
            to="/"
            style={({ isActive }) => isActive ? { textDecoration: "underline" } : undefined }>
            <li>Accueil</li>
          </NavLink>

          {/* lien vers A propos */}
          <NavLink 
            to="/about"
            style={({ isActive }) => isActive ? { textDecoration: "underline" } : undefined }>
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Banner