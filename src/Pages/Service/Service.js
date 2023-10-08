import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {id, name, img, price, description } = service;
    const navigate = useNavigate(); 
    const navigateToTrainerDetals = id =>{

        navigate(`/trainer/${id}`);
    }


    return (
        <div className='all-trainer'>
            <h1>{name}</h1>
            <img src={img}></img>
            <p>price{price}</p>
            <p><small>Description:{description}</small></p>
            <button onClick={()=> navigateToTrainerDetals(id)} className='btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;