import React from 'react'
import './mainSection.css'
const MainSection = ({title,descreption,image}) => {
  return (
    <div className='main_section'>
      <div className="main_container">
        <div className="container_header">
          <img src={image} alt="" />
        </div>
        <h2>{title}</h2>
        <p>{descreption}</p>
      </div>
      
    </div>
  )
}

export default MainSection