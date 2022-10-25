import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Subject = ({sub}) => {
    
    const{course_name,course_id}=sub;
    
    return (
        <div>
            <Col>
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/school-picture-id1034993830?k=20&m=1034993830&s=612x612&w=0&h=JFFcQaZrysQZx-fhN9u7q92vGDOVm8CDm0-QcMLEIZ8=" />
            <Card.Body>
              <Card.Title>{course_name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              
             
            </Card.Body>
            <Link className='text-center' to={course_id}><button>More</button></Link>
          </Card>
        </Col>
        
            
        </div>
    );
};

export default Subject;