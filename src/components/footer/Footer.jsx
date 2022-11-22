import React from 'react';

import './footer.css';

import { CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { SlSocialTwitter } from 'react-icons/sl';

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>EDWARD</a>

      <ul className='footer__links'>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com" target={'blank'}><CiFacebook /></a>
        <a href="https://www.twitter.com" target={'blank'}><SlSocialTwitter /></a>
        <a href="https://www.instagram.com" target={'blank'}><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Edward Projects. All rights Reserved
        </small>
      </div>

    </footer>
  )
}

export default Footer