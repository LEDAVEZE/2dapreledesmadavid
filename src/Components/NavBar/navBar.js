import Carrito from '../Carrito/Carrito.js';
import '../NavBar/navBar.css';
import 'bulma/css/bulma.css';
import { NavLink, Link } from 'react-router-dom';



const NavBar = () => {
    return <>
        <nav className='NavBar hero is-link is-flex-direction-row is-justify-content-space-between'>
            <Link to="/">
                <h3>ARK-9 LOGO!!!</h3>
            </Link>
            <div className='Categorias hero-menu is-flex is-justify-content-space-between'>
                <NavLink to={`/categoria/remeras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>REMERAS-</NavLink>
                <NavLink to={`/categoria/pantalones`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>PANTALONES-</NavLink>
                <NavLink to={`/categoria/abrigos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>ABRIGOS</NavLink>
            </div>
            <Carrito></Carrito>
        </nav>

    </>
};

export default NavBar;