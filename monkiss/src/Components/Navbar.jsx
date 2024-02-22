import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../assets/Styles/Components/Navbar.css'
import { userContext } from '../Context/userContext';
import FotoPerfil from '../Images/Prof Maje.png'
import Mainchango from '../Images/changoMain.png'
import LogoSalida from '../Images/salida.png'
import LogoUsuario from '../Images/usuario.png'
import LogoHome from '../Images/casa.png'
import LogoFamilia from '../Images/familia.png'
import LogoActividades from '../Images/portapapeles.png'

function Navbar() {

  const {
    logout,
    short,
    changeSize
  }= useContext(userContext);

  return (
    <div className={`navbar-box ${short?'mini-navbar':''}`}>
      <div className='header-nav'>
        <img src={Mainchango} alt='chango principal' className='main-chango'
         onClick={() => {changeSize()}}/>
        <span className={`titulo-pagina ${short?'oculto':''}`}>MONKISS</span>
      </div>
      <div className='navbar-opciones'>
          <div className={`info-usuario ${short?'flexible':''}`}>
              <img className={`foto-usuario ${short?'flexible':''}`} src={FotoPerfil} alt='foto de usuario'/>
              <span className={`nombre-usuario ${short?'oculto':''}`}>Maje</span>
          </div>
          <div className='links-navegacion'>
              <NavLink className={({isActive}) => isActive? 'active-link':'no-active--link'} 
              to='/user/users'>
                <img src={LogoUsuario} alt='logo' className='logo'/>
                <span className={short?'oculto':''}>Perfil</span></NavLink>
              <NavLink className={({isActive}) => isActive? 'active-link':'no-active--link'} 
              to='/user/home'>
                <img src={LogoHome} alt='logo' className='logo'/>
                <span className={short?'oculto':''}>Home</span></NavLink>
              <NavLink className={({isActive}) => isActive? 'active-link':'no-active--link'} 
              to='/user/family'>
                <img src={LogoFamilia} alt='logo' className='logo'/>
                <span className={short?'oculto':''}>Familia</span></NavLink>
              <NavLink className={({isActive}) => isActive? 'active-link':'no-active--link'} 
              to='/user/planner'>
                <img src={LogoActividades} alt='logo' className='logo'/>
                <span className={short?'oculto':''}>Actividades</span></NavLink>
          </div>
          <div className='last-part'>
            <button className='btn-logout' onClick={logout}>
              <img src={LogoSalida} alt='logo salida' className='logo-salida'/>
              <span className={short?'oculto':''}>Cerrar sesion</span>
            </button>
          </div>
      </div>
    </div>
  )
}

export {Navbar}