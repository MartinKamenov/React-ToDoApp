import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return ( 
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link className="navbar-brand main_header main_header" to="/">Navbar</Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <Link className="nav-link navbar_element" to="/">Home</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link navbar_element" to="/about">About</Link>
                </Nav>       
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;