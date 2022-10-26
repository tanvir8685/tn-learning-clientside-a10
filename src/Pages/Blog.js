import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container'>
            
            <Card border="info" >
        <Card.Header className='fs-1'>what is cors?</Card.Header>
        <Card.Body>
          <Card.Title>Ans:</Card.Title>
          <Card.Text>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="info" className='mt-3'>
        <Card.Header className='fs-3'>Why are you using firebase? What other options do you have to implement authentication??</Card.Header>
        <Card.Body>
          <Card.Title>Ans:</Card.Title>
          <Card.Text>
          Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. <br />
          Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. <br />
          5 Common Authentication Types
1:Password-based authentication. Passwords are the most common methods of authentication. ... <br />
2:Multi-factor authentication. ... <br />
3:Certificate-based authentication. ... <br />
4:Biometric authentication. ... <br />
5:Token-based authentication.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="info" className='mt-3'>
        <Card.Header className='fs-1'>How does the private route work?</Card.Header>
        <Card.Body>
          <Card.Title>Ans:</Card.Title>
          <Card.Text>
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="info" className='mt-3 mb-3'>
        <Card.Header className='fs-1'>What is Node? How does Node work?</Card.Header>
        <Card.Body>
          <Card.Title>Ans:</Card.Title>
          <Card.Text>
          It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Blog;