import "./NavBar.css";
import logo from "./tarantula.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <ul className='navBar'>
                <li>
                    <NavLink to={'/'}><img src={logo} alt='Logo'/></NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/category/Brachypelma'}>Brachyp.</NavLink>
                </li>
                <li>
                    <NavLink to={'/category/Harpactira'}>Harpactira</NavLink>
                </li>
                <li>
                    <NavLink to={'/stage/sling'}>Lings</NavLink>
                </li>
                <li>
                    <NavLink to={'/cart'}>
                        <CartWidget />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;