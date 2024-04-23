import React from 'react'
import './ourvalue.css'
import value_pic from '../../assets/value_pic.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const OurValue = () => {
  return (
    <div className='main_ourValue'>
        <h3>Nos Valeurs</h3>
        <div className="container">
            <div className="left_ov">
                <div className="value">
                <span><IoMdCheckmarkCircleOutline /></span>
                <h4>Excellence en Qualité</h4>
                <p> Nous nous engageons à offrir une qualité inégalée dans tous les aspects de notre service.</p>
            </div>                

            <div className="value">
                <span><IoMdCheckmarkCircleOutline /></span>
                <h4>Protection de l'Environnement</h4>
                <p>Nous sommes conscients de l'importance de préserver et de protéger notre environnement. </p>
            </div>

            <div className="value">
                <span><IoMdCheckmarkCircleOutline /></span>
                <h4>Approche Axée sur le Client</h4>
                <p>Votre satisfaction est notre priorité. Nous écoutons attentivement vos besoins et vos préférences</p>
            </div>

            <div className="value">
                <span><IoMdCheckmarkCircleOutline /></span>
                <h4>Amélioration Continue</h4>
                <p> Nous nous engageons à l'apprentissage et à l'amélioration continus. En restant à l'affût des dernières tendances et innovations de l'industrie</p>
            </div>

            </div>
        
            <div className="right_ov">
               <img src={value_pic} alt="value_pic" />
            </div>
        </div>
        
      
    </div>
  )
}

export default OurValue
