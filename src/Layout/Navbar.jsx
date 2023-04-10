import {Link, NavLink} from "react-router-dom"
import logo from '../Assets/logo.png'
import '../Styles/Navbar.css'


function Navbar() {
    const isActiveStyle = { textDecoration: "underline" };

    // Utilisation d'un tableau en prévision d'un ajout au menu
    const menuItems = [
        { to: "/", label: "Accueil" },
        { to: "/about", label: "A Propos" },
    ];

    // défini la choix actif et affiche le label du menu
    const menuItem = ({ to, label }) => (
        <li key={to}>
            <NavLink to={to} style={({ isActive }) => isActive ? isActiveStyle : undefined }>
                {label}
            </NavLink>
        </li>
    );

    // affiche le logo et boucle sur les éléments du menu
    return (
        <div className='navbar'>
            <Link to="/">
                <img src={logo} alt='Logo du site Kasa' />
            </Link>
            <nav>
                <ul>{menuItems.map(menuItem)}</ul>
            </nav>
        </div>
    );
}

export default Navbar