import React from 'react'
import { Link } from 'react-router-dom'; 
import './plans.css'
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import { GiTomato } from "react-icons/gi";
import { GiPlantWatering } from "react-icons/gi";
import { GiSinusoidalBeam } from "react-icons/gi";
import { PiCursorClickFill } from "react-icons/pi";
import MainSection from '../../components/mainSection/MainSection';
import back_img from '../../assets/back_about.jpg'
const Plans = () => {
  return (
    <div>
        <MainSection 
        title='Notre Plans'
        descreption="Découvrez nos plans , conçus avec expertise pour transformer vos idées en réalité. Explorez notre gamme variée pour embellir votre espace extérieur"
        image={back_img}
       />

        <div className='plans_section'>
        <div className="plans_section_container">
            <div className="plans_item">
                <div className="plan_icon">
                    <span><FaHandHoldingHeart /></span>
                </div>
                <div className="plan_info">
                    <h3>Plans d'aménagement paysager</h3>
                    <p>Les plans d'aménagement paysager sont des schémas qui montrent comment organiser les éléments d'un espace extérieur, comme les plantes, les chemins et les structures, pour créer un jardin ou un paysage attrayant et fonctionnel</p>
                    <button><Link to='/Devis'>Demende de devis  <span><PiCursorClickFill /></span></Link></button>
                </div>
               

            </div>

            <div className="plans_item">
                <div className="plan_icon">
                    <span><GiPlantRoots /></span>
                </div>
                <div className="plan_info">
                    <h3>Plans de plantation</h3>
                    <p>Les plans de plantation sont des schémas qui indiquent où placer différentes plantes dans un jardin ou un espace extérieur. Ils aident à organiser les plantes de manière esthétique et pratique, en tenant compte de facteurs tels que la taille des plantes, leurs besoins en lumière et en eau, et leur harmonie visuelle avec d'autres plantes.</p>
                    <button><Link to='/Devis'>Demende de devis  <span><PiCursorClickFill /></span></Link></button>

                    
                </div>
            </div>

            
            <div className="plans_item">
                <div className="plan_icon">
                    <span><GiTomato /></span>
                </div>
                <div className="plan_info">
                    <h3> Plans de conception de potager</h3>
                    <p>Les plans de conception de potager sont des schémas qui montrent comment organiser et structurer un potager. Ils indiquent où planter différents types de légumes, herbes et fruits, ainsi que la disposition des chemins, des zones de compostage et d'autres éléments. Ces plans visent à maximiser l'utilisation de l'espace.</p>
                    <button><Link to='/Devis'>Demende de devis  <span><PiCursorClickFill /></span></Link></button>

                    
                </div>
            </div>


            <div className="plans_item">
                <div className="plan_icon">
                    <span><GiPlantWatering /></span>
                </div>
                <div className="plan_info">
                    <h3>Plans d'irrigation</h3>
                    <p>Les plans d'irrigation sont des schémas qui montrent comment distribuer l'eau de manière efficace dans un jardin ou un espace extérieur. Ils indiquent l'emplacement des tuyaux, des arroseurs, des goutte-à-goutte et d'autres systèmes d'irrigation, ainsi que les zones couvertes par chaque dispositif.</p>
                    <button><Link to='/Devis'>Demende de devis  <span><PiCursorClickFill /></span></Link></button>

                
                </div>
            </div>

            <div className="plans_item">
                <div className="plan_icon">
                    <span><GiSinusoidalBeam /></span>
                </div>
                <div className="plan_info">
                    <h3>Plans de drainage </h3>
                    <p>Les plans de drainage sont des schémas qui montrent comment gérer efficacement le drainage des eaux de pluie et des eaux souterraines dans un jardin ou un espace extérieur. Ils indiquent l'emplacement des canaux de drainage, des fossés, des bassins de rétention et d'autres dispositifs de drainaget.</p>
                    <button><Link to='/Devis'>Demende de devis  <span><PiCursorClickFill /></span></Link></button>

              
                </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Plans
