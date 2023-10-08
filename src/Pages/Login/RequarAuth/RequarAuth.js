import React from 'react';
import auth from '../../../firebase.inits';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const RequarAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{from:location}}replace/>;
    }
    return children;
};

export default RequarAuth;