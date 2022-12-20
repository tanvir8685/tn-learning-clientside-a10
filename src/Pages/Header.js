import React from 'react';
import { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const Header = () => {
    const [checked, setChecked] = useState(true);
    const { user, logOut, handleUpdateUserProfile } = useContext(AuthContext);
    console.log(user?.displayName)
    console.log(handleUpdateUserProfile)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

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


                        {
                            user?.uid ?
                                <>
                                    <span className='text-primary me-2'> {user?.displayName} </span>
                                    {

                                        user?.photoURL ?
                                            <Image className='d-none d-lg-block' data-toggle="tooltip" data-placement="left" title={user?.displayName ?
                                                user.displayName : 'mr default'} style={{ height: '6vh' }} roundedCircle src={user?.photoURL} alt="" />
                                            :
                                            <FaUser data-toggle="tooltip" data-placement="left" title={user?.displayName}></FaUser>

                                    }
                                    <Button onClick={handleLogOut} variant="outline-info" size="sm" className='mx-3 mb-2' >Log Out</Button>
                                </>


                                :
                                <>
                                    <Link className=' me-2 text-decoration-none' to="/login">Login</Link>
                                    <Link className=' me-2 text-decoration-none' to="/register">Register</Link>
                                </>



                        }
                        {/* < >
                            <ButtonGroup className="mb-2">
                                <ToggleButton
                                    id="toggle-check"
                                    type="checkbox"
                                    
                                    variant="dark"
                                    checked={checked}
                                    value="1"
                                    onChange={(e) => setChecked(e.currentTarget.checked)}
                                >
                                    Dark
                                </ToggleButton>
                            </ButtonGroup>
                            <ToggleButton
                                className="mb-2"
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-info"
                                checked={checked}
                                value="1"
                                onChange={(e) => setChecked(e.currentTarget.checked)}
                            >
                                Light
                            </ToggleButton>



                        </> */}








                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;