import React, { useState } from 'react'
import './testimonials.css'
import TestImonialsData from './TestImonialsData'
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";
const TestImonials = () => {
    const [selected,setSelected]=useState(0)
    const t_length=TestImonialsData.length
  return (
    <div className='testimonials'>
      <div className="container">
        <div className="left_t">
        <h3>Ce qu'ils disent de nous</h3>
      <p>Nous sommes fiers de ces commentaires élogieux qui témoignent de notre dévouement et de notre engagement envers nos valeurs fondamentales. Chaque mot de reconnaissance renforce notre détermination à fournir un service exceptionnel et à répondre aux attentes élevées de nos clients. Ces témoignages nous inspirent à continuer à innover et à nous surpasser pour offrir une expérience encore meilleure à tous ceux qui font confiance à notre entreprise</p>
        </div>
        <div className="right_t">
        <img src={TestImonialsData[selected].image} alt="" />
                <p>{TestImonialsData[selected].comment}</p>
                <span>{TestImonialsData[selected].name}</span>
                <span>{TestImonialsData[selected].statue}</span>
                <div className='icons'>
                <span>
                <BsArrowLeftSquareFill onClick={()=>{
                  selected===0 ? setSelected(t_length - 1) : setSelected((prev)=>prev - 1)
                }} />
                  </span>
                <span>
                <BsArrowRightSquareFill onClick={()=>{
                  selected===t_length-1 ? setSelected(0) : setSelected((prev)=>prev + 1)
                }}/>
                  </span>
                </div>
        </div>
      
     </div>

      
    </div>
  )
}

export default TestImonials
