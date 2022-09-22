import "./NavBar.css";
import logo from "./images.jpg";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <ul className='navBar'>
                {/* <li><img src={logo} alt='Logo'/></li> */}
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
                        <CartWidget unit="0"/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;