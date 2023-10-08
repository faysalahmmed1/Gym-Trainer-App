import React from 'react';
import './Header.css';
import gmyLogo from '../../../Images/headerLogo.jpg';
import { Link } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.inits';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = ()=>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant='drak'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logo' height={100} src={gmyLogo}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/trainer">Trainer</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user ? 
                                <button onClick={handleSignOut}>SignOut</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;