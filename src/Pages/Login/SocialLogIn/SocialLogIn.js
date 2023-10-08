import React from 'react';
import './SocialLogIn.css';
import google from '../../../Images/Social/google1.png';
import facebook from '../../../Images/Social/facebook.png';
import github from '../../../Images/Social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.inits';
import { useNavigate } from 'react-router-dom';



const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement

    if (error || error1) {
        errorElement = <p>Error: {error?.message} {error1?.message}</p>


    }
    if (user || user1) {
        navigate('/home');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary d-flex'></div>
                <p className='mb-2 p-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}

            <div className=' allButton'>
                <button
                    onClick={() => signInWithGoogle()}

                    className='btn btn-primary d-block w-50 mx-auto my-2 '>
                    <img className='mx-2' src={google}></img>
                    Google
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-primary d-block w-50 mx-auto my-2'>
                    <img className='mx-2' src={github}></img>
                    github
                </button>
                <button className='btn btn-primary d-block w-50 mx-auto my-2'>
                    <img className='mx-2' src={facebook}></img>
                    Facebook
                </button>
            </div>

        </div>
    );
};

export default SocialLogIn; 