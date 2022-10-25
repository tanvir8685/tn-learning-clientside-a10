import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="https://media.istockphoto.com/photos/organization-process-picture-id1394348763"
              width="60"
              height="45"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        <Navbar.Brand href="#home">TN-Learning</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto me-2 text-decoration-none">
            <Link className=' me-2 text-decoration-none' to="/">Home</Link>
            <Link className=' me-2 text-decoration-none ' to="/courses">Courses</Link>
            <Link className=' me-2 text-decoration-none' to="/faq">FaQ</Link>
            <Link className=' me-2 text-decoration-none' to="/blog">Blog</Link>
            <Link className=' me-2 text-decoration-none' to="/login">Log in</Link>
            <Link className=' me-2 text-decoration-none' to="/register">Register</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;