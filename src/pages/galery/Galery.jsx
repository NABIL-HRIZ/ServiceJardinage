import React from 'react'
import './galery.css'
import MainSection from '../../components/mainSection/MainSection'
import back_galery from '../../assets/back_galery.jpg'
import GalerieData from './GaleryData'
const Galery = () => {
  return (
    <div>
      <MainSection 
      title='Galerie'
      descreption="Découvrez l'art du jardinage à travers notre galerie d'images inspirantes. Plongez dans un monde de couleurs éclatantes, de textures luxuriantes et de designs créatifs alors que nous vous présentons une collection de jardins époustouflants, de produits de qualité et de projets réussis. Que vous soyez à la recherche d'idées pour votre propre jardin, que vous souhaitiez explorer nos produits de jardinage ou que vous désiriez simplement vous imprégner de la beauté de la nature, notre galerie est l'endroit idéal pour trouver l'inspiration et nourrir votre passion pour le jardinage"
      image={back_galery}
     />

     <div className="galery_section">
     <h2>Dernières photos</h2>
      <div className="galery_section_container" >
        {GalerieData.map((item)=>(
          <div key={item.id} className="galery_item" data-aos="fade-down" data-aos-duration="1000"
          data-aos-easing="ease-in-out">
            <img src={item.image} alt="" />

          </div>
        ))}
      </div>
     </div>
    </div>
  )
}

export default Galery
