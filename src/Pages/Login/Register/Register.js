import React from 'react';
import './Register.css'; 
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='registerForm'>
            <h1 className='text-primary mt-2'> Please Register</h1>
            <form>
                <input type='name' name='name' id='' placeholder='Enter your Name' ></input>
                <input type='email' name='email' id='' placeholder='Enter your email' ></input>
                <input type='password' name='password' id='' placeholder='Enter your Password' ></input>
                <input className='btn btn-primary' type='submit' value='Register'></input>
            </form>
        </div>
    );
};

export default Register;