import React from 'react'
import './ourServices.css'
import { FaAnglesRight } from "react-icons/fa6";
import { GiGardeningShears } from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";
import { SiCodecov } from "react-icons/si";
import { FaEthernet } from "react-icons/fa6";
import { GiEcology } from "react-icons/gi";
import { FaInstalod } from "react-icons/fa";
import { MdControlPointDuplicate } from "react-icons/md";
import { FaCut } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { FaRegCalendarCheck } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className='main_services'>
            <h3>Nos Services</h3>
        <div className="container">
            <div className="services_list">
                <span><GiGardeningShears /></span>
                <h5>Entretien de Jardin</h5>
                <p> Entretien de Jardin Gardez votre jardin vert et propre avec nos services d'entretien professionnels</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

            <div className="services_list">
                <span><MdOutlineCleaningServices /></span>
                <h5>Aménagement Paysager</h5>
                <p>  Aménagement Paysager Embellissez votre espace extérieur avec notre expertise professionnelle</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

            <div className="services_list">
                <span><RiPlantFill /></span>
                <h5>Plantation et Transplantation</h5>
                <p> Faites pousser de nouvelles vies ou déplacez-les avec soin pour un jardin florissant</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

            <div className="services_list">
                <span><FaCut /></span>
                <h5>Taille d'Arbres et d'Arbustes</h5>
                <p> Maintenez la santé et la forme de vos végétaux pour un jardin impeccable</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

            <div className="services_list">
                <span><MdControlPointDuplicate /></span>
                <h5>Contrôle des Mauvaises Herbes </h5>
                <p> Gardez votre jardin propre et ordonné avec notre expertise en élimination des mauvaises herbes</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

            <div className="services_list">
                <span><FaInstalod /></span>
                <h5>Installation d'Arrosage Automatique</h5>
                <p>  Simplifiez l'entretien de votre jardin avec notre système d'arrosage automatique sur mesure</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

            <div className="services_list">
                <span><GiEcology /></span>
                <h5>Conception de Jardins Écologiques</h5>
                <p>Créez un jardin respectueux de l'environnement avec notre expertise en conception durable</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

            <div className="services_list">
                <span><FaEthernet /></span>
                <h5>Nettoyage de Printemps et d'Automne </h5>
                <p> Préservez la santé de votre jardin en éliminant les débris et en préparant le terrain pour les saisons à venir.</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

            <div className="services_list">
                <span><SiCodecov /></span>
                <h5>Services de Décoration Florale</h5>
                <p> Embellissez votre jardin avec notre sélection de fleurs et arrangements floraux uniques, ajoutant une touche de couleur et d'élégance à votre espace extérieur</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

            <div className="services_list">
                <span><FaRegCalendarCheck /></span>
                <h5>Consultation en Jardinage</h5>
                <p>  Obtenez des conseils d'experts personnalisés pour créer et entretenir un jardin magnifique et florissant, adapté à vos besoins et à votre environnement</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

            <div className="services_list">
                <span><GrUserExpert /></span>
                <h5>Conseils Expertise </h5>
                <p> Profitez de notre savoir-faire pour des conseils personnalisés et des solutions efficaces pour tous vos besoins en jardinage, du choix des plantes à l'entretien quotidien</p>
                <button>En savoir plus <FaAnglesRight /> </button>
            </div>

        </div>
      
      
    </div>
  )
}

export default OurServices
