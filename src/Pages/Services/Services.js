import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Servicese.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1 className='our-trainer mt-5'>Our Trainers</h1>
            <div className='container'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;