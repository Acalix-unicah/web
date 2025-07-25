import React from 'react';

import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import './_rules.css'

export default function Header() {
    const [collapsed, setCollapsed] = React.useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return <Navbar className='main-header' dark>
        <NavbarBrand className='logo'><em>Instituto Católico</em> NSRP</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
            <Nav className='main-menu' navbar>
                <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
    {/* <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a> */ }
    {/* <nav id="menu" className="main-nav" role="navigation">
            <ul className="main-menu">
                <li><a href="#section1">Home</a></li>
                <li className="has-submenu"><a href="#section2">About Us</a>
                    <ul className="sub-menu">
                        <li><a href="#section2">Who we are?</a></li>
                        <li><a href="#section3">What we do?</a></li>
                        <li><a href="#section3">How it works?</a></li>
                        <li><a href="https://templatemo.com/about" rel="sponsored" className="external">External URL</a></li>
                    </ul>
                </li>
                <li><a href="#section4">Courses</a></li>
                <li><a href="#section6">Contact</a></li>
                <li><a href="https://templatemo.com" className="external">External</a></li>
            </ul>
        </nav> */}
}