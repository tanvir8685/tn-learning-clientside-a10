import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FaQ = () => {
    return (
        <Accordion className='container'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why we are best?</Accordion.Header>
        <Accordion.Body>
       1: Professionalism - We are professional surfboard builders with a experinced teacher. <br />
2:Experienced - We understand what it takes to build a board (we do it every day) and how important the customization through artwork is. <br />
3:Research & Development - We use proven materials that work well with and compliment your board.  If there is a better way to do something, we are going to figure it out and enhance our offerings.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How we teach our students?</Accordion.Header>
        <Accordion.Body>
        Teaching methods are the broader techniques used to help students achieve learning outcomes, while activities are the different ways of implementing these methods. Teaching methods help students: master the content of the course. learn how to apply the content in particular contexts.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
};

export default FaQ;