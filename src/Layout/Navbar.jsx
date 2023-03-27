import {Link, NavLink} from "react-router-dom"
import logo from '../Assets/logo.png'
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
                    <li>
                        <NavLink 
                            to="/"
                            style={({ isActive }) => isActive ? { textDecoration: "underline" } : undefined }>
                            Accueil
                        </NavLink>
                    </li>

                    {/* lien vers A propos */}
                    <li>
                        <NavLink 
                            to="/about"
                            style={({ isActive }) => isActive ? { textDecoration: "underline" } : undefined }>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Banner