import React from 'react';
import { Link, useParams } from 'react-router-dom';

const TrainerDetails = () => {
    const { trainerId } = useParams();
    return (
        <div>
            <h1 className='text-center text-primary mb-5 mt-2'>TrainerDetails NO: {trainerId}</h1>
           <div className='text-center'>
           <Link to='/checkout'>
                <button className='btn btn-primary'>CheckOut</button>
            </Link>
           </div>



        </div>
    );
};

export default TrainerDetails;