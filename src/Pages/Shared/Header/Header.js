import React from 'react';
import './Header.css';
import gmyLogo from '../../../Images/headerLogo.jpg';
import { Link } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant='dark'>
                <Container>
                    <Navbar.Brand href="/home">
                    <img height={100} src={gmyLogo}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/trainer">Trainer</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link eventKey={2} href="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;