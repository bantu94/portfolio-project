import React from 'react'

import './contact.css';

import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_ia9uw2g', 'template_yj5dpy5', form.current, 'pKRTI_3CsdIyD203y')
    e.target.reset()  
    
  };
  return (
    <section id='contact'>
      <h5>Let's Connect</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMarkEmailRead className='contact__option-icon' />
            <h4>Email</h4>
            <h5>example@gmail.com</h5>
            <a href="mailto:eddyug94@gmail.com" target={'blank'}>Click to message</a>
          </article>
          <article className='contact__option'>
            <FaInstagram className='contact__option-icon' />
            <h4>On Instagram</h4>
            <h5>Bantu Codes</h5>
            <a href="https://www.instagram.com" target={'blank'}>Let's Chat</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon' />
            <h4>Whatsapp Me</h4>
            <h5>97430087175</h5>
            <a href="https://wa.me/97430087175/?text=Hi Edward, Whatsup" target={'blank'}>Click to Chat</a>
          </article>
        </div>

        {/* *********************form************** */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Feedback' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact