import React from 'react';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.inits';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { sendEmailVerification } from 'firebase/auth';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    const NavigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='registerForm'>
            <h1 className='text-primary mt-2'> Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type='name' name='name' id='' placeholder='Enter your Name' ></input>
                <input type='email' name='email' id='' placeholder='Enter your email' ></input>
                <input type='password' name='password' id='' placeholder='Enter your Password' ></input>
                <input className='btn btn-primary' type='submit' value='Register'></input>
            </form>
            <p>Already you have an account? <Link className='text-decoration-none' onClick={NavigateLogin} to='/login'>please Login</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register;