import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, price, description } = service;


    return (
        <div className='all-trainer'>
            <h1>{name}</h1>
            <img src={img}></img>
            <p>price{price}</p>
            <p><small>Description:{description}</small></p>
            <button className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;