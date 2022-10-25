import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/LeftSideNav';

const Courses = () => {
    return (
        <div>
            <h2 className='text-center'>All of our Courses </h2>
            <Container>
                <Row>
                    <Col lg='2'><LeftSideNav></LeftSideNav></Col>
                    <Col lg='10'><Outlet></Outlet></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;