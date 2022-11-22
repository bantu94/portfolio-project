import React from 'react';
import './portfolio.css';



import image1 from '../../assets/port-image1.jpg';
import image2 from '../../assets/port-image2.jpg';
import image4 from '../../assets/port-image3.png';
import image3 from '../../assets/port-image4.jpg';
import image5 from '../../assets/port-image5.jpg';
import image6 from '../../assets/port-image6.jpg';


const data = [
  {
      id: 1,
      image: image1,
      title: 'Ssekiranda Edward portfolio images',
      github: 'https://github.com/bantu94',
      preview: 'https://pixabay.com/images/search/'
  },
  {
      id: 2,
      image: image2,
      title: 'Ssekiranda Edward portfolio images',
      github: 'https://github.com/bantu94',
      preview: 'https://pixabay.com/images/search/'
  },
  {
      id: 3,
      image: image3,
      title: 'Ssekiranda Edward portfolio images',
      github: 'https://github.com/bantu94',
      preview: 'https://pixabay.com/images/search/'
  },
  {
      id: 4,
      image: image4,
      title: 'Ssekiranda Edward portfolio images',
      github: 'https://github.com/bantu94',
      preview: 'https://pixabay.com/images/search/'
  },
  {
      id: 5,
      image: image5,
      title: 'Ssekiranda Edward portfolio images',
      github: 'https://github.com/bantu94',
      preview: 'https://pixabay.com/images/search/'
  },
  {
      id: 6,
      image: image6,
      title: 'Ssekiranda Edward portfolio images',
      github: 'https://github.com/bantu94',
      preview: 'https://pixabay.com/images/search/'
  },


]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          
          data.map(({id, image, title, github, preview}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target={'blank'}>Github</a>
                  <a href={preview} className='btn btn-primary' target={'blank'}>Preview</a>
                </div>
              </div>
            </article>
            )
           
          })
        }
      
      </div>
    </section>
  )
}

export default Portfolio