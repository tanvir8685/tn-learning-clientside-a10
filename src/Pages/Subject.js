import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Subject = ({sub}) => {
    
    const{course_name,course_id,img,details}=sub;
    
    return (
        <div>
            <Col>
          <Card>
            <Card.Img height='300' variant="top" src={img} />
            <Card.Body>
              <Card.Title>{course_name}</Card.Title>
              <Card.Text>
               {details}
              </Card.Text>
              
             
            </Card.Body>
            <Link className='text-center' to={course_id}><button className='w-100'>More</button></Link>
          </Card>
        </Col>
        
            
        </div>
    );
};

export default Subject;