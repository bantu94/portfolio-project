import React from 'react';


import './header.css';
import CTA from './CTA';
import myImage from '../../assets/myimage.png';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I am</h5>
        <h1>Johnny Doe</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <SocialMedia />

        <div className='my-image'>
          <img src={myImage} alt="myimage" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>

    </header>
  )
}

export default Header