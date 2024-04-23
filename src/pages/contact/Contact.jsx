import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import MainSection from '../../components/mainSection/MainSection'
import back_pic from '../../assets/back_about.jpg'
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
const Contact = () => {
  const form = useRef()
  const [message, setMessage] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c74j2tk', 'template_4dij2bk', form.current, {
        publicKey: 'vAklvnFBES1FKcSlV',
      })
      .then(
        () => {
          setMessage('Message envoyée avec success ');
          form.current.reset()
        },
        (error) => {
          setMessage('FAILED...', error.text);
        },
      );
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <div>

      <MainSection
        title='Nous Contacter'
        descreption="Découvrez qui nous sommes et ce que nous faisons"
        image={back_pic}
      />

      <div className="contact_section">
        <div className="contact_container">
          <div className="left_c">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106373.60430169114!2d-7.623777341412834!3d33.574801786566596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1709045982443!5m2!1sfr!2sma" style={{ width: '500px', height: "400px", border: "2px solid green", borderTopLeftRadius: "30px", borderBottomRightRadius: "30px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="right_c" >
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nom Complet</Form.Label>
                <Form.Control type="text" placeholder="Votre Nom " name='user_name' required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Adresse Email </Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name='user_email' required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message </Form.Label>
                <Form.Control as="textarea" rows={3} name='message' required />
              </Form.Group>
              <button type='submit'>Envoyer</button>
              <span style={{ color: 'green', marginLeft: "20px" }}>{message}</span>
            </Form>

            <div className="links">
              <h4>Pour toute demande de service, veuillez remplir le formulaire de contact ci-dessus ou nous contacter par téléphone pendant nos heures d'ouverture. Ou bien juste avec un clic : </h4>
              <a href="https://api.whatsapp.com/send?phone=+212609153426&text=Comment puis-je vous aider ?" target="_blank" rel="noopener noreferrer"><span><FaWhatsapp /></span></a>
              <a href="mailto:hariznabil663@gmail.com" target="_blank" rel="noopener noreferrer"><span><MdOutlineMailOutline /></span></a>
              <a href="tel:+212609153426" target="_blank" rel="noopener noreferrer"><span><FaPhoneAlt /></span></a>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
