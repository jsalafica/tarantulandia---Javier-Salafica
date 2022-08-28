import "./NavBar.css";
import logo from "./images.jpg";
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return(
        <nav>
                <ul className='navBar'>
                    <li><img src={logo} alt='Logo'/></li>
                    <li><a href='#algo'>Especies</a></li>
                    <li><a href='#algo'>Ayuda</a></li>
                    <li><a href='#algo'>Contacto</a></li>
                    <li><CartWidget/></li>
                </ul>
        </nav>
    )
}

export default NavBar;