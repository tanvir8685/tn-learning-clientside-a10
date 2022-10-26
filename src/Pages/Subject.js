import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Subject = ({sub}) => {
    
    const{course_name,course_id,img,details}=sub;
    
    return (
        <div>
            <Col className='border border-info rounded'>
          <Card >
            <Card.Img height='300' variant="top" src={img} />
            <Card.Body>
              <Card.Title>{course_name}</Card.Title>
              <Card.Text>
               {details}
              </Card.Text>
              
             
            </Card.Body>
            <Link className='text-center' to={course_id}><Button variant="outline-info" className='w-100'>More</Button></Link>
          </Card>
        </Col>
        
            
        </div>
    );
};

export default Subject;