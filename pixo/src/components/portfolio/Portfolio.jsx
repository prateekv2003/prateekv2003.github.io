import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assets/portfolio-1.jpg'
import portfolio2 from '../../assets/portfolio-2.jpg'
import portfolio3 from '../../assets/portfolio-3.jpg'
import portfolio4 from '../../assets/portfolio-4.jpg'
import portfolio5 from '../../assets/portfolio-5.jpg'
import portfolio6 from '../../assets/portfolio-6.jpg'
import portfolio7 from '../../assets/portfolio-7.jpg'
import portfolio8 from '../../assets/portfolio-8.jpg'
import portfolio9 from '../../assets/portfolio-9.jpg'
import portfolio10 from '../../assets/portfolio-10.jpg'
import portfolio11 from '../../assets/portfolio-11.jpg'
import portfolio12 from '../../assets/portfolio-12.jpg'
const Portfolio = () => {
  const data = [
    {
      id : 1,
      image : portfolio1,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 2,
      image : portfolio2,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 3,
      image : portfolio3,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 4,
      image : portfolio4,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 5,
      image : portfolio5,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 6,
      image : portfolio6,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 7,
      image : portfolio7,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 8,
      image : portfolio8,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 9,
      image : portfolio9,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 10,
      image : portfolio10,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 11,
      image : portfolio11,
      title : "Project title",
      details : "Project details"
    },
    {
      id : 12,
      image : portfolio12,
      title : "Project title",
      details : "Project details"
    },
  ];
  return (
    <section class="portfolio">
    <h1>Some of our work</h1>
    {
      data.map(({id, image, title, details}) => {
        return(
          <figure key={id} class="port-item">
            <img src={image} alt="portfolio item"/>
            <figcaption class="port-desc">
                <p>{title}</p>
                <a href="#" class="button button-accent button-small">{details}</a>
            </figcaption>
          </figure>
        );
      })
    }
</section>
  )
}

export default Portfolio