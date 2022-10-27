import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


const Login = () => {
    const [error,setError]=useState('');
    

    const {providerLogin,signIn}=useContext(AuthContext);

    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/courses';

    // navigate('/courses')
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const user=result.user;

            console.log(user);

            form.reset();
            setError('');
            navigate(from,{replace:true});
        })
        .catch(error=>
            {
                console.error(error)
                setError(error.message);
            
            })
    }


    const googleProvider= new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();
    

    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user =result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
        .catch(error=>console.error(error));

    };
    const handleGitSignIn=()=>{
        providerLogin(githubProvider)
        .then(result=>{
            const user =result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
        .catch(error=>console.error(error));

    }

   
    return (
        <div className='container '>
            
            <Form onSubmit={handleSubmit} className='w-50 mx-auto' >
            <ButtonGroup vertical className='text-center' >
      <Button onClick={handleGoogleSignIn} className='mb-2 mt-2'><FaGoogle/> Log in with Google</Button>
      <Button onClick={handleGitSignIn} className='mb-3' variant="dark"><FaGithub></FaGithub> Log in with GitHub</Button>
      </ButtonGroup>
      <h4>You can also Log in with email and password </h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>
      <small className='mb-2'>New user, Please <Link to='/register'> Register..</Link>  </small> <br />
      
      <Button variant="primary" className='mt-3' type="submit">
        Log In
      </Button>
      <Form.Text className="text-danger">
         {error}
        </Form.Text> <br />
    </Form>
        </div>
    );
};

export default Login;