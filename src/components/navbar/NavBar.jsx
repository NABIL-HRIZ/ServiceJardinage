import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo_1.png';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className='navbar'>
            <div className="navbar_container">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                {/* Toggle button */}
                <FaBars className='toggle-btn' onClick={() => setShowLinks(!showLinks)} />
                {/* Links list */}
                <div className={`links_list ${showLinks ? 'show' : ''}`}>
                    <ul>
                        <li><NavLink to='/' className='active'>Acceil</NavLink></li>
                        <li><NavLink to='/about'>A propos</NavLink></li>
                        <li><NavLink to='/Galery'>Galerie</NavLink></li>
                        <li><NavLink to='/plan'>Plans</NavLink></li>
                        <li><NavLink to='/ourteam'>Nos Equipe</NavLink></li>
                        <li><NavLink to='/Devis'>Demande De Devis</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
