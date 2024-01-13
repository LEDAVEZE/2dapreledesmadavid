import '../NavBar/navBar.css';
import { Link } from 'react-router-dom';
import LogoImg from "../../IMG/Logo.jpg.jpg";
import CartWidget from '../CartWidget/CartWidget.js';

const NavBar = () => {
    return <>
        <nav className='NavBar'>
            <Link to="/">
                <img className='Logo' src={LogoImg} alt="Logo" />
            </Link>
            <ul className='menu'>
                <li><Link className="menu-link" to="/categoria/remeras">REMERAS</Link></li>
                <li><Link className="menu-link" to="/categoria/pantalones">PANTALONES</Link></li>
                <li><Link className="menu-link" to="/categoria/remeras">ABRIGOS</Link></li>
            </ul>
            <CartWidget/>
        </nav>

    </>
};

export default NavBar;