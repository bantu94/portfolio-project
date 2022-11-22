import React from 'react';
import './testimonials.css';

import Woman1 from '../../assets/woman1.jpg';
import Woman2 from '../../assets/woman2.jpg';
import Woman3 from '../../assets/woman3.jpg';
import Woman4 from '../../assets/woman4.jpg';
import Woman5 from '../../assets/woman5.png';


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Woman1,
    alt: 'avatar1',
    name: 'Toito Matto',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus culpa, sed laboriosam consequuntur distinctio voluptatibus nobis mollitia aliquam dolorum repellat, itaque aut numquam? Hic illum voluptatibus dignissimos debitis sint!'
  },
  {
    avatar: Woman2,
    alt: 'avatar2',
    name: 'Toito Matto',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus culpa, sed laboriosam consequuntur distinctio voluptatibus nobis mollitia aliquam dolorum repellat, itaque aut numquam? Hic illum voluptatibus dignissimos debitis sint!'
  },
  {
    avatar: Woman3,
    alt: 'avatar3',
    name: 'Toito Matto',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus culpa, sed laboriosam consequuntur distinctio voluptatibus nobis mollitia aliquam dolorum repellat, itaque aut numquam? Hic illum voluptatibus dignissimos debitis sint!'
  },
  {
    avatar: Woman4,
    alt: 'avatar4',
    name: 'Toito Matto',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus culpa, sed laboriosam consequuntur distinctio voluptatibus nobis mollitia aliquam dolorum repellat, itaque aut numquam? Hic illum voluptatibus dignissimos debitis sint!'
  },
  {
    avatar: Woman5,
    alt: 'avatar5',
    name: 'Toito Matto',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ducimus culpa, sed laboriosam consequuntur distinctio voluptatibus nobis mollitia aliquam dolorum repellat, itaque aut numquam? Hic illum voluptatibus dignissimos debitis sint!'
  },


]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        

        {
          data.map(({avatar, alt, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={alt} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials