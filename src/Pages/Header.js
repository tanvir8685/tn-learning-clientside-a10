import React from 'react';
import { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const {user}=useContext(AuthContext);

    return (
        <Navbar  bg="light" expand="lg">
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
            <p>{user?.displayName}</p>
            {
                user.photoURL?
                <Image style={{height:'40px'}} roundedCircle src={user?.photoURL} alt="" />
                :
                <FaUser></FaUser>

            }
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;