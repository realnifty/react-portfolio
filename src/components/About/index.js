import React from 'react';
import code from '../../assets/images/coding.png'

function About() {
    return (
        <section className='text-light mx-auto d-flex flex-column justify-content-center align-items-center'>
            <h1 id='about' className='my-4'>About</h1>
            <img className="icon mb-3" src={code} alt="code icon" />
            <p className="text-center w-50">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus incidunt natus, quidem nihil ipsam molestiae, nostrum, ullam iusto ut illo voluptas cupiditate! Possimus iure magnam inventore nemo delectus, quia architecto.
            </p>
        </section>
    )
}

export default About;