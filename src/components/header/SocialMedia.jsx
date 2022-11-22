import React from 'react'

import { FaLinkedin } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { MdFacebook } from 'react-icons/md';

const SocialMedia = () => {
  return (
    <div className='header__social'>
      <a href='https://linkedin.com' target={'blank'}><FaLinkedin /></a>
      <a href='https://instagram.com' target={'blank'}><BsInstagram /></a>
      <a href='https://facebook.com' target={'blank'}><MdFacebook /></a>
    </div>
  )
}

export default SocialMedia