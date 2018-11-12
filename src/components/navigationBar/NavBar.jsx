import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fragment">
            <span className="container">
                <Link className="navbar-brand main_header main_header" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link navbar_element" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar_element" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </span>
        </nav>
     );
}
 
export default NavBar;