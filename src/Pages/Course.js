import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const Course = () => {
  const subject = useLoaderData();
  console.log(subject)
  const { course_name, course_id, img, details, duration, classT } = subject;
  return (
    <div>



      <Card className='border border-info rounded' ref={ref} >
        <div className='d-flex justify-content-between'>
          <Card.Title className='mx-5 mt-2 fs-1 fw-bold'>{course_name}</Card.Title>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <Button variant="primary" className='me-5 size="sm"' onClick={toPdf}>Generate Pdf</Button>}
          </Pdf>
        </div>

        <Card.Img className='px-5' height='350' variant="top" src={img} />
        <Card.Body className='px-5'>

          <Card.Text>
            {details}
          </Card.Text>
          <Card.Text>
            <p>Duration:{duration}</p>
            <p>Total Class:{classT}</p>
          </Card.Text>
          <Link to={`/courses/1/date${course_id}`}
          ><Button variant="outline-info" className='w-100  '>Get Premium Access</Button></Link>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;