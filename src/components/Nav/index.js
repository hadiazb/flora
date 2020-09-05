import React from 'react';
import './index.scss';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav className='nav'>
      <img className='nav_img' src={Logo} alt="Logo floristeria"/>
      <div className='nav_div'>
        <a className='language' href="#">ENG</a>
        <ul className='nav_ul'>
          <li>
            <a className='anchor' href="#">
              QUIENES SOMOS
            </a>
          </li>
          <li className='strong'>
            <a className='anchor  nav_ul-blue' href="#">
              VARIEDADES
            </a>
          </li>
          <li className='strong'>
            <a className='anchor  nav_ul-green' href="#">
              INSUMOS
            </a>
          </li>
          <li>
            <a className='anchor' href="#">
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;