import React from 'react';
import './About.css';
import faysal from '../../Images/faysal.jpeg'

const About = () => {
    return (
        <div className='aboutMe'>
            <h1 className='text-primary mb-5'>About Me </h1>

            <img className='faysalImg' src={faysal}></img>
            <h2>Faysal Ahmmed </h2>
            <p>I am Faysal Ahmmed, 24 years old. I am currently studying at Dhaka International University, majoring in Computer Science and Engineering (CSE). Additionally, I am learning web development under the guidance of Programming Hero's instructor, Mr. Songkar Mahabub.so I want to become a proficient web developer.And I will become this, God willing.Inshallah
            </p>

        </div>
    );
};

export default About;