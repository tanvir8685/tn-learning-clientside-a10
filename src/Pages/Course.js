import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const subject=useLoaderData();
    console.log(subject)
    const {course_name,img,details,duration,classT}=subject;
    return (
        <div>
            
            <Card  >
            <Card.Title className='mx-5 mt-2 fs-1 fw-bold'>{course_name}</Card.Title>
      <Card.Img className='px-5' height='350' variant="top" src={img} />
      <Card.Body className='px-5'>
        
        <Card.Text>
          {details}
        </Card.Text>
        <Card.Text>
          <p>Duration:{duration}</p>
          <p>Total Class:{classT}</p>
        </Card.Text>
        <Button variant="primary">Get Premium Access</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Course;