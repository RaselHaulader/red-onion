import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../../images/logo.png'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

  const {user, logOut} = useAuth()
  console.log(user)
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/home"><img className="brand-logo" src={logo} alt="logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="ms-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/cart"> <i className="icon-link fas fa-shopping-cart"></i></Nav.Link>
            {!user.displayName && <Nav.Link className="text-decoration-none icon-link" as={Link} to="/login">Login</Nav.Link> }
            <div className="d-flex align-items-center">
             {user.displayName ? <a  className="rounded-pill signIn-btn border-0 color-btn px-4">{user.displayName} <i onClick={logOut} class="fas fa-sign-out-alt"></i> </a> : <NavLink to="/signIn" className="rounded-pill signIn-btn border-0 color-btn px-4">Sign up</NavLink>}
              
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;