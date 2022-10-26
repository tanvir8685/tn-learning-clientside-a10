import React from 'react';
import { Carousel } from 'react-bootstrap';


const HeadCaru = () => {
    return (
        <Carousel className='container'>
      <Carousel.Item>
        <img
            height='550'
          
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/stack-of-books-and-multicolored-wooden-pencils-picture-id1180867776?s=612x612"
          alt="First slide"
        />
        <Carousel.Caption className='fs-1 '>
          <h1 className='fw-bold h-50'>TN_LEARNING</h1>
          <p className='text-primary fw-bold'>One of the best learnig paltfrom</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            height='550'
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/education-or-back-to-school-concept-colorful-school-supplies-with-picture-id1172096478"
          alt="Second slide"
        />

        <Carousel.Caption className='fs-1'>
          <h1 className='fw-bold'>TN_LEARNING</h1>
          <h1 className='text-primary  fw-bold'>One of the best learning paltfrom.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height='550'
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/pencil-holder-books-and-apple-picture-id1333087191"
          alt="Third slide"
        />

        <Carousel.Caption className='fs-1'>
          <h1 className='fw-bold '>TN_LEARNING</h1>
          <h1 className='text-dark fw-bold '>
            One of the best learnig paltfrom
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default HeadCaru;