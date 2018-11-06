import React, { Component } from 'react';
import './NavBar.css';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fragment">
            <span className="container">
                <a className="navbar-brand main_header main_header" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link navbar_element" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar_element" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </span>
        </nav>
     );
}
 
export default NavBar;