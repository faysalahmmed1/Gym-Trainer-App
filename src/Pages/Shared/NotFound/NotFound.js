import React from 'react';
import errorPage from '../../../Images/404.png';

const NotFound = () => {
    return (
        <div>
            <h1> page not Found 404 !!</h1>
            <img src={errorPage}></img>

        </div>
    );
};

export default NotFound;