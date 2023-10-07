import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
       
        <Form className='Login-container'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <p>New account <Link className='text-decoration-none ' to={'/register'}>please Register</Link></p>
        <p>Forget Password<Link className='text-decoration-none ' to={'/register'}>Forget Password</Link></p>
    </Form>
      
    );
};

export default Login;