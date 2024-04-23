import React from 'react'
import './ourTeam.css'
import team_1 from '../../assets/team_1.jpg'
import team_2 from '../../assets/team_2.jpg'
import team_3 from '../../assets/team_3.jpg'
import team_4 from '../../assets/team_4.jpg'
import team_5 from '../../assets/team_5.jpg'
import team_6 from '../../assets/team_6.jpg'
import team_7 from '../../assets/team_7.jpg'

import MainSection from '../../components/mainSection/MainSection'
import back_ourTeam from '../../assets/back_galery.jpg'

const OurTeam = () => {
  return (
    <div>
    <MainSection title='Notre Equipe'
     descreption="Découvrez notre équipe dévouée . Chacun de nos membres apporte une expertise unique et une passion commune pour l'aménagement paysager. Nous sommes une équipe diversifiée, unie par notre engagement à créer des espaces extérieurs exceptionnels. Apprenez à connaître les visages derrière nos projets et ce qui nous inspire à chaque nouvelle création."
     image={back_ourTeam}
     />
 
      <div className='ourteam_section'>
       
        <div className="ourteam_container">
            <div className="ourteam_lists">
                <div className="membere_desc">
                    <img src={team_1} alt="" />
                    <h3>Marie Dupont</h3>
                    <h4>Paysagiste et Designer Flora</h4>
                    <p>Marie Dupont, paysagiste diplômée de l'Université de Paris,avec plus de 7 ans d'expérience, excelle dans la création de jardins harmonieux et esthétiques. Ses compétences artistiques et son souci du détail transforment les idées de ses clients en réalité. Passionnée par la nature, elle aime explorer et capturer sa beauté à travers la photographie et la peinture botanique</p>        
                </div>
            </div>

            <div className="ourteam_lists">
                <div className="membere_desc">
                    <img src={team_2} alt="" />
                    <h3>Jean-Luc Martin</h3>
                    <h4>Horticulteur et Expert en Entretien de Jardins</h4>
                    <p>Jean-Luc Martin, horticulteur passionné et expérimenté,avec plus de 9 ans d'expérience, spécialisé dans l'entretien des jardins. Formé à l'École Nationale Supérieure d'Horticulture de Versailles, il allie expertise et dévouement pour offrir un service de qualité. Passionné par l'innovation durable, il partage également ses connaissances à travers des ateliers communautaires et des projets environnementaux.</p>
                   

                </div>
            </div>

            <div className="ourteam_lists">
                <div className="membere_desc">
                    <img src={team_3} alt="" />
                    <h3>Jahn Lambert</h3>
                    <h4>Spécialiste en Design Floral et Aménagement Paysager</h4>
                    <p> Jahn Lambert est un spécialiste en design floral et aménagement paysager,avec plus de 11 ans d'expérience, passionné par la création de compositions florales uniques et l'aménagement harmonieux des espaces extérieurs. Avec plus de 8 ans d'expérience dans l'industrie. Diplômé en design floral de l'École des Arts Floraux de Paris.</p>
                    
                </div>
            </div>

            <div className="ourteam_lists">
                <div className="membere_desc">
                    <img src={team_4} alt="" />
                    <h3>Marc Dubois</h3>
                    <h4>Spécialiste en Plans de Plantation</h4>
                    <p>Marc est un expert en plans de plantation avec plus de 10 ans d'expérience. Sa créativité et son souci du détail lui permettent de concevoir des designs floraux esthétiques et fonctionnels, adaptés aux besoins spécifiques des clients. Passionné par son travail, il aime explorer de nouveaux jardins et partager sa passion avec d'autres amateurs de jardinage</p>
                  

                </div>
            </div>

            <div className="ourteam_lists">
                <div className="membere_desc">
                    <img src={team_7} alt="" />
                    <h3>Julien Moreau</h3>
                    <h4>Spécialiste en Conception de Potagers</h4>
                    <p>Julien, spécialiste passionné de conception de potagers, possède plus de 8 ans d'expérience. Diplômé en agronomie de l'Université de Bordeaux, il crée des plans diversifiés et productifs, alliant esthétique et fonctionnalité. Déterminé à offrir des solutions sur mesure, il tient compte des besoins spécifiques de chaque client. En dehors du travail, il partage sa passion lors d'ateliers communautaires et promeut une alimentation saine et durable.</p>
                    

                </div>
            </div>

            <div className="ourteam_lists">
                <div className="membere_desc">
                    <img src={team_5} alt="" />
                    <h3>Thomas Dubois</h3>
                    <h4>Expert en Plans d'Irrigation</h4>
                    <p>Thomas est un expert en plans d'irrigation, fort de plus de 10 ans d'expérience. Diplômé en génie agricole de l'Université de Toulouse, il crée des systèmes d'irrigation efficaces et durables, adaptés à chaque espace extérieur. Passionné par l'innovation, il explore continuellement de nouvelles méthodes pour maximiser l'utilisation de l'eau tout en minimisant le gaspillage</p>
                   

                </div>
            </div>

            <div className="ourteam_lists">
                <div className="membere_desc">
                    <img src={team_6} alt="" />
                    <h3>Ahmed  Aviajja </h3>
                    <h4>Expert en Plans de Drainage</h4>
                    <p>Ahmed est un expert en plans de drainage avec plus de 12 ans d'expérience. Diplômé en génie civil de l'Université de Lyon, il conçoit des systèmes efficaces pour résoudre les problèmes d'excès d'eau dans le sol. Déterminée à fournir des solutions sur mesure, il prend en compte la topographie et le type de sol de chaque projet. Passionné par son travail, il explore également de nouvelles techniques de drainage en dehors du travail.</p>
                   
                </div>
            </div>
        </div>
       
    </div>
    </div>
   
  )
}

export default OurTeam
