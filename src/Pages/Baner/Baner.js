import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import TrainerBanar1 from '../../Images/Baner/banar01.png';
import TrainerBanar2 from '../../Images/Baner/banar1.png';
import TrainerBanar3 from '../../Images/Baner/banar2.png';


const Baner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className='b-block w-50' src={TrainerBanar1} alt='Frist Slide'></img>
                <Carousel.Caption>
                    
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='b-block w-50' src={TrainerBanar2} alt='Frist Slide'></img>

                <Carousel.Caption>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='b-block w-50' src={TrainerBanar3} alt='Frist Slide'></img>

                <Carousel.Caption>
                    
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Baner;