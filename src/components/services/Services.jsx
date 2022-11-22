import React from 'react';
import { MdRadioButtonChecked } from 'react-icons/md';

import './services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5>Below I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur </p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
          </ul>
        </article>
        {/* *******ui/ux design ends ****************** */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur </p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
          </ul>
        </article>
        {/* *******Web Dev ends ****************** */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur </p>
            </li>
            <li>
              <MdRadioButtonChecked className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur .</p>
            </li>
          </ul>
        </article>
        {/* *******Content Creation ends ****************** */}

      </div>
    </section>
  )
}

export default Services