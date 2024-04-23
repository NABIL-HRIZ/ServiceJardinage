import React from 'react'
import './homePage.css'
import home_pic from '../../assets/home_pic.jpg'
const HomePage = () => {
  return (
    <div className='home_page'>
     <div className='container'>
        <div className="left_hp">
        <img src={home_pic} alt="home_pic" />
        </div>
        <div className="right_hp">
         <span></span>
         <h1>Découvrez notre service de jardinage professionnel </h1>
         <p>Bienvenue sur notre service de jardinage ! Nous sommes spécialisés dans la fourniture de services de jardinage de haute qualité, adaptés aux besoins uniques de votre maison ou de votre propriété. Que vous souhaitiez embellir votre espace extérieur avec des plantes vibrantes et un aménagement paysager, entretenir un jardin impeccable, ou créer un environnement durable et respectueux de l'environnement</p>
          <button className='btn'>Prêt à commencer ?</button>
        </div>
        </div>      
    
    </div>
  )
}

export default HomePage
