import React from 'react'
import './ourfaq.css'
import Accordion from 'react-bootstrap/Accordion';
const OurFaq = () => {
  return (
    <div className='main_ourFaq'>
        <h3>FAQs</h3>
        <div className="container">
        <Accordion defaultActiveKey="0" className='accordion'>
      <Accordion.Item eventKey="0" className='accordtion_items'>
        <Accordion.Header className='accordion_header'>Quels services de jardinage proposez-vous ?</Accordion.Header>
        <Accordion.Body>
        Nous proposons une gamme complète de services de jardinage, notamment l'entretien de jardin, l'aménagement paysager, la plantation et la transplantation, la taille d'arbres et d'arbustes, le contrôle des mauvaises herbes, l'installation d'arrosage automatique, la conception de jardins écologiques, et bien plus encore.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Comment puis-je demander un devis pour mes besoins en jardinage ?</Accordion.Header>
        <Accordion.Body>
        Pour obtenir un devis personnalisé, il vous suffit de nous contacter via notre formulaire de contact sur notre site web ou par téléphone. Nous serons ravis de discuter de vos besoins spécifiques et de vous fournir une estimation précise pour nos services
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Quelle est la différence entre l'entretien de jardin et l'aménagement paysager ?</Accordion.Header>
        <Accordion.Body>
        L'entretien de jardin se concentre sur le maintien de la santé et de la beauté de votre jardin existant, notamment la tonte de pelouse, la taille des plantes, l'arrosage et le désherbage.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Proposez-vous des services d'entretien de jardin saisonnier ?</Accordion.Header>
        <Accordion.Body>
        Oui, nous proposons des services d'entretien de jardin saisonnier pour répondre aux besoins spécifiques de chaque saison. Nos services incluent le nettoyage de printemps et d'automne, la préparation du jardin pour l'hiver, la fertilisation saisonnière et bien plus encore.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Proposez-vous des services écologiques ?</Accordion.Header>
        <Accordion.Body>
        Oui, nous nous engageons à adopter des pratiques respectueuses de l'environnement dans tous nos services de jardinage. Nous utilisons des techniques de jardinage durables
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Combien de temps faut-il pour terminer un projet d'aménagement paysager ?</Accordion.Header>
        <Accordion.Body>
        La durée d'un projet d'aménagement paysager peut varier en fonction de sa taille, de sa complexité et des conditions spécifiques de votre site
        </Accordion.Body>
      </Accordion.Item>

     
    </Accordion>
        </div>

    </div>
    
  )
}

export default OurFaq
