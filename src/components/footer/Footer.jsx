import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
import logo from '../../assets/logo_1.png'
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='main_footer'>
        <div className="container">
            <div className="infos">
                <img src={logo} alt="my_logo" />
                <p>Notre service de jardinage offre des solutions expertes pour embellir et entretenir votre espace extérieur. De la conception paysagère à l'entretien régulier, nous nous engageons à créer des jardins magnifiques et bien entretenus qui reflètent votre style </p>
                <div className='social_media'>
                    <span><FaInstagram /></span>
                    <span><FiYoutube /></span>
                    <span><FaFacebookF /></span>
                    <span><FaWhatsapp /></span>
                </div>
            </div>

            <div className="permalinks">
                <h4>liens permanents</h4>
                <ul>
                    <li><Link to='/about'>À propos de nous</Link></li>
                    <li><Link to='/galery'>Galerie</Link></li>
                    <li><Link to='/plans'>Plans</Link></li>
                    <li><Link to='/ourTeam'>Nos Equipe</Link></li>
                </ul>
            </div>


            <div className="contact">
                <h4>Nous contacter </h4>
                <ul>
                <li><Link to='/contact'>Contactz Nous</Link></li>
                <li><Link to='/Devis'>Demande De Devis</Link></li>

                 </ul>
            </div>
        </div>
        <div className="end_footer">
            <span>2024@S_JARDINAGE <FaRegCopyright /> All the rights reserved </span>
        </div>
      
    </div>
  )
}

export default Footer
