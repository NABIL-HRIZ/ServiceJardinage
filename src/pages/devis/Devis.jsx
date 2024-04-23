import React, { useRef, useState } from 'react'
import './devis.css'
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Devis = () => {
    const form =useRef()
    const [message,setMessage]=useState('')
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_c74j2tk', 'template_z8nqaiq', form.current, {
            publicKey: 'vAklvnFBES1FKcSlV',
          })
          .then(
            () => {
              setMessage('Bien Envoyée !');
              form.current.reset()
            },
            (error) => {
              setMessage('Try Again...', error.text);
              form.current.reset()

            },
          );
          setTimeout(()=>{
            setMessage('')
          },5000)
      };
  return (
    <div className='devis_section'>
        <div className="devis_container">
            <h2>Devis personnalisé</h2>
            <h3>chez vous ou en ligne</h3>
            <div className="devis_form">
            <Form ref={form} onSubmit={sendEmail}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Nom_Prenom" name='user_name' required/>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Adresse" name='user_adress'  required/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Ville Ou Code Postal " name='user_ville'  required />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control type="email" placeholder="Adresse Email" name='user_email'  required/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="tel" placeholder="Téléphone" name='user_phone'  required/>
        </Form.Group>
      </Row>

      
      <Form.Group className="mb-3" >
        <Form.Control placeholder="Description de mon projet ... " name='user_descreption'  required />
      </Form.Group>

      

        <Form.Group className='mb-3'>
          <Form.Select defaultValue="Choisir une categorie" name="user_category"  required>
            <option>Choisir une categorie</option>
            <option>ENTRETIEN DE JARDIN</option>
            <option>AMÉNAGEMENT PAYSAGER</option>
            <option>PLANTATION ET TRANSPLANTATION</option>
            <option>TAILLE D'ARBRES ET D'ARBUSTES</option>
            <option>CONTRÔLE DES MAUVAISES HERBES</option>
            <option>INSTALLATION D'ARROSAGE AUTOMATIQUE</option>
            <option>CONCEPTION DE JARDINS ÉCOLOGIQUES</option>
            <option>NETTOYAGE DE PRINTEMPS ET D'AUTOMNE</option>
            <option>SERVICES DE DÉCORATION FLORALE</option>
            <option>CONSULTATION EN JARDINAGE</option>


          </Form.Select>
        </Form.Group>


      <Button variant="success" type="submit">
        Envoyer
      </Button>
      <span style={{color:"green",fontSize:"20px",marginLeft:"20px"}}>{message}</span>
    </Form>
            </div>
        </div>
      
    </div>
  )
}

export default Devis
