import React from 'react'
import '../assets/Styles/Forms/NewActivityForm.css'

function NewActivityForm({setOpenModal}) {

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Aca debe ir el nuevo evento');
        setOpenModal(false);
    }
  return (
    <form className='form-newActivity' onSubmit={onSubmit}>
        <button className='boton-cerrar'>
            <i className="bi bi-x-lg" size={'lg'}></i>
        </button>
        <label className='label-nueva--actividad'>Ingresa la nueva actividad</label>
        <textarea className='nueva-actividad' placeholder='Salir con el monki'/>
        <div className='opciones-form'>
            <button className='cerrar' type="button" 
                onClick={() => {
                setOpenModal(false)
                }}>
                Cerrar
            </button>
            <button className='Aceptar' type="submit">
                Añadir
            </button>
        </div>
    </form>
  )
}

export {NewActivityForm}