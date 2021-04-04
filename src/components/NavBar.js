import React from 'react'
import './styles/Navbar.css'
import logo from '../img/Logo.svg'
import { Link } from 'react-router-dom';
class NavBar extends React.Component {
    state = {  }
    render() { 
        return (
            <div className="Navbar">
                <div className="container-fluid"> 
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" width="70px" height="80px"/>
                        <span className="font-weight-light">Platzi </span>
                        <span className="font-weight-bold">Conf </span>
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default NavBar;