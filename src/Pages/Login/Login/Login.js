import React, { useRef } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.inits';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    let from= location.state?.from?.pathname||"/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from,{replace:true});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = (event) => {
        const navigate = ('/register')
    }
    return (
        <div className='LoginPage'>
            <h1 className='text-primary text-center mb-5'> Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>New account? <Link className='text-decoration-none ' to={'/register'}>please Register</Link></p>
                <p>Forget Password <Link className='text-decoration-none' onClick={navigateRegister} to='/register'>Forget Password</Link></p>
            </Form>
        </div>

    );
};

export default Login;