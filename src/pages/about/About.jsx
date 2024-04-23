import React from 'react'
import './about.css'
import MainSection from '../../components/mainSection/MainSection'
import back_img from '../../assets/back_about.jpg'
import story_img from '../../assets/our_story.jpg'
import mission_pic from '../../assets/our_mission.jpg'
const About = () => {
  return (
    <div>
     
      <MainSection 
      title="A Propos De Nous " 
      descreption="nous sommes passionnés par la culture des espaces verts et le développement d'une communauté florissante d'amateurs de jardinage. Notre mission est de fournir des solutions innovantes et des conseils d'experts pour vous aider à transformer votre espace extérieur en un havre de beauté et de tranquillité florissant"
      image={back_img }/>

     
      <div className="about_story">
        <div className="about_story_container">
          <div className="left_a" data-aos="fade-right"  data-aos-duration="2000"
    data-aos-easing="ease-in-out">
            <img src={story_img} alt="story_img" />
          </div>
          <div className="right_a" data-aos="fade-left" data-aos-duration="2000"
    data-aos-easing="ease-in-out">
             <h2>Notre histoire </h2>
             <p>Notre histoire commence avec une passion partagée pour la nature et le jardinage. Fondé par <span>Albirto Jack</span> en 2005 , <span>S_JARDINAGE</span> est né de la conviction que chaque espace extérieur a le potentiel de devenir un écosystème florissant. Inspirés par la beauté de la nature et animés par le désir de partager notre expertise, nous avons entrepris de créer une plateforme où les amateurs de jardinage peuvent trouver tout ce dont ils ont besoin pour réaliser leurs projets verts. Au fil des ans, notre engagement envers l'excellence, l'innovation et le service clientèle exceptionnel nous a permis de devenir un leader dans le domaine du jardinage en ligne. Aujourd'hui, notre histoire se poursuit avec chaque client que nous aidons à transformer son jardin en un refuge de verdure et de bonheur</p>
          </div>
        </div>
      </div>


      <div className="about_mission">
        <div className="about_mission_container">
          <div className="left_m" data-aos="fade-right"  data-aos-duration="2000"
    data-aos-easing="ease-in-out">
           <h2>NOTRE MISSION </h2>
           <p>Notre mission est de fournir des solutions de jardinage innovantes et durables pour aider nos clients à créer et à entretenir des espaces extérieurs magnifiques. Nous nous engageons à offrir des produits de haute qualité, des conseils d'experts et un service client exceptionnel à chaque étape du processus. Que vous soyez un jardinier débutant ou expérimenté, notre objectif est de vous inspirer, de vous éduquer et de vous soutenir dans votre parcours de jardinage. Ensemble, nous travaillons à promouvoir une connexion plus profonde avec la nature et à enrichir la vie de nos clients à travers leurs jardins</p>
           </div>
          <div className="right_m" data-aos="fade-left" data-aos-duration="2000"
    data-aos-easing="ease-in-out">
       <img src={mission_pic} alt="mission_pic"  />
           
          </div>
        </div>
      </div>


      <div className="about_vision">
        <div className="about_vision_container">
          <div className="left_a" data-aos="fade-right"  data-aos-duration="2000"
              data-aos-easing="ease-in-out">
            <img src={story_img} alt="story_img" />
          </div>
          <div className="right_a" data-aos="fade-left" data-aos-duration="2000"
            data-aos-easing="ease-in-out">
             <h2>NOTRE VISION </h2>
             <p>Notre vision est de devenir le partenaire de confiance de chaque jardinier, en les aidant à réaliser pleinement leur potentiel créatif et écologique dans leurs espaces extérieurs. Nous aspirons à être à l'avant-garde de l'innovation dans le domaine du jardinage, en proposant des solutions qui favorisent la durabilité, la biodiversité et le bien-être. En encourageant une approche holistique du jardinage, nous visons à créer un monde où chaque jardin est un écosystème florissant, offrant beauté, nourriture, et refuge à la fois pour les humains et la vie sauvage. Ensemble, nous poursuivons notre engagement à cultiver des jardins qui enrichissent nos vies et préservent la santé de notre planète pour les générations futures.</p>
          
          </div>
        </div>
      </div>
  </div>

  )
}

export default About
