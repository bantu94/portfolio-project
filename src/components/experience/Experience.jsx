import React from 'react';
import { MdComputer } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';


import './experience.css';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Check For My Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        {/* *************FRONTEND TECHS************** */}

        <div className='experience__frontend'>
          <h3>Frontend Technologies</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <MdComputer className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdComputer className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdComputer className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdComputer className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdComputer className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdComputer className='experience__details-icon' />
              <div>
                <h4>NPM</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
           
          </div>
        </div>
        {/* *************BACKEND TECHS****************/}
        <div className='experience__backend'>
          <h3>Backend Technologies</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaLaptopCode className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaLaptopCode className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaLaptopCode className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaLaptopCode className='experience__details-icon' />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaLaptopCode className='experience__details-icon' />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience