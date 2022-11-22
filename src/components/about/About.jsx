import React from 'react';
import aboutmyimg from '../../assets/aboutmyimg.jpg';

import { FaReact } from 'react-icons/fa';
import { IoIosPeople} from 'react-icons/io';
import { FaRProject } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';


import './about.css';


const About = () => {
  return (
    <section id='about'>
      <h5><GiSelfLove /> Like to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__myimage">
          <div className="about__myimage-img">
            <img src={aboutmyimg} alt="About-Img" />

          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='abt__card'>
              <FaReact className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>
            <article className='abt__card'>
              <FaRProject className='about__icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
            <article className='abt__card'>
              <IoIosPeople className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est placeat dolorem reprehenderit provident expedita, aperiam sapiente harum quos necessitatibus ab nihil unde quia amet atque corrupti? Reiciendis deleniti fugit natus veniam eius quos iste autem quas modi, animi atque nulla perspiciatis, quo molestias ad alias harum, tempore repellat iusto ratione?</p>

          <a href='#contact' className='btn btn-primary'>Connect</a>

        </div>
      </div>

    
    </section>
  )
}

export default About