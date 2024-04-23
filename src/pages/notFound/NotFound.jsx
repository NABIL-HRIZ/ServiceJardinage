import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
  return (
    <div className='not_found_section'>
        <div className="not_found_container">
            <div className="not_found_header">
            <h2>Page non trouvée </h2>
            <span>🙄</span>
            </div>
            <button className='button'><Link to='/'>Retour</Link></button>
        </div>
      
    </div>
  )
}

export default NotFound
 