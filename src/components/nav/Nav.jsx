import React from 'react';

import { ImHome } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { RiServiceFill } from 'react-icons/ri';
import { MdOutlineContactPhone } from 'react-icons/md';
import { useState } from 'react';

import './nav.css';
 
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='/#' onClick={() => setActiveNav('/#')} className={activeNav === '/#' ? 'active' : ''}><ImHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CgProfile /></a>
      <a href='#experience'  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaReact /></a>
      <a href='#services'  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href='#contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav