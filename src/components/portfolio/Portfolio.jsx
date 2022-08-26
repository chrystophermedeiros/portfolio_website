import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const data= [
  {
    id: 1,
    image: IMG1,
    title: 'Dssmovies avalie o filme',
    github: 'https://github.com/chrystophermedeiros/dsmovie',
    demo: 'https://dssmovies.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'projeto-android',
    github: 'https://github.com/chrystophermedeiros/projeto-android',
    demo: 'https://chrystophermedeiros.github.io/projeto-android/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Projeto-cordel',
    github: 'https://github.com/chrystophermedeiros/projeto-cordel',
    demo: 'https://chrystophermedeiros.github.io/projeto-cordel/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Animate-sprite',
    github: 'https://github.com/chrystophermedeiros/animate-sprite',
    demo: 'https://chrystophermedeiros.github.io/animate-sprite/'
  },

  

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meu recentes trabalhos</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
        data.map(({id, image, title, github, demo}) => {
          return(
              <article key={id} className='portfolio_item'>
                <div className="potfolio_item-image">
                  <img src={image} alt={title}/>
                </div>
                  <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live demo</a>
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