import React, { useEffect, useState } from 'react'
import '../assets/Styles/Alerts/Change.css'
import Equis from '../Images/x.png'
import Check from '../Images/check.png'
import Update from '../Images/actualizar.png'
import Error from '../Images/peligro.png'
import Delete from '../Images/eliminar.png'

function Change({setOpenAlert, openAlert, opcion}) {

    const closeModal = () =>{
      // setTimeout(function(){
        setOpenAlert(false);
      // },1000)
    }
    var mensaje = ''
    var simbolo = Equis;
    if(opcion==1){
      mensaje='Nuevo monki creado';
      simbolo=Check;
    }
    else if(opcion==2){
      mensaje='Monki actualizado';
      simbolo=Update;
    }
    else if(opcion==3){
      mensaje='Monki eliminado';
      simbolo=Delete;
    }
    // useEffect(()=>{
    //   if(!open)closeModal()
    // },[open])
  return (
    <div className={`mainbox-alert ${''}`}>
        <div className='loading-bar'/>
        <div className='content-alert'>
            <button className='btn-cerrar' onClick={closeModal}>
                <img src={Equis} className='logo-close' alt='logo close'/>
            </button>
            <img className='simbolo-alert' src={simbolo} alt='simbolo alert'/>
            <p className='texto-alerta'>{mensaje}</p>
        </div>
    </div>
  )
}

export {Change}