import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='container '>
            <Form className='w-50 mx-auto' >

            <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo url</Form.Label>
        <Form.Control name='photo' type="text" placeholder="Photo URL" />
      </Form.Group>
            
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <small className='mb-2'>Already have account, Please <Link to='/login'> Log in..</Link>  </small> <br />
      <Button variant="primary" className='mt-3' type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Register;