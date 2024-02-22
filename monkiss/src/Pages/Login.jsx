import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import '../assets/Styles/Pages/Login.css';
import MonoLogin from '../Images/mono-login.png'

function Login() {
  const {
    login
  }= useContext(userContext);

  const [signIn, setSignIn] = useState(false);

  const changeLogin = () =>{
    setSignIn(!signIn);
  }

  return (
    <div className='mainbox-login'>
      <div className={`main-container ${signIn?'active':''}`}>
        <div className='form-container sign-in'>
          <form onSubmit={login}>
            <img src={MonoLogin} alt='mono-login' className='mono-login'/>
            <h1 className='title-form'>Inicio de sesión</h1>
            <p className='label-form'>Correo electrónico</p>
            <input type='text'/>
            <p className='label-form'>Contraseña</p>
            <input type='text'/>
            <button className='btn-signin' type='submit'>Iniciar sesión</button>
          </form>
        </div>
        <div className='form-container sign-up'>
          <form onSubmit={login}>
            <img src={MonoLogin} alt='mono-login' className='mono-login'/>
            <h1 className='title-form'>Nueva cuenta</h1>
            <p className='label-form'>Correo electrónico</p>
            <input type='text'/>
            <p className='label-form'>Contraseña</p>
            <input type='text'/>
            <p className='label-form'>Confirmar contraseña</p>
            <input type='text'/>
            <button className='btn-signup' type='submit'>Siguiente</button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>¿Ya tienes una cuenta?</h1>
              <p>Ingresa tus credenciales para acceder al sistema</p>
              <button onClick={changeLogin}>Iniciar sesion</button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>¿Eres un nuevo usuario?</h1>
              <p>Crea tu cuenta y empieza a gestionar tus monkis</p>
              <button onClick={changeLogin}>Crear cuenta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Login}