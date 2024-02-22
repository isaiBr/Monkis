import React, { useContext } from 'react'
import '../assets/Styles/Forms/DeleteMonkiForm.css'
import MonkiTriste from '../Images/monoTriste.png'
import LogoEliminar from '../Images/boton-eliminar.png'
import { axiosDeleteMonkiById } from '../Api/Monki'
import { monkiContext } from '../Context/monkiContext'

function DeleteMonkiForm({setOpenModalDelete,monkiId, setOpcion,setOpenAlert}) {
  const {nuevoMonki, setNuevoMonki} = useContext(monkiContext);

  const eliminarMonki = () => {
    //Se debe eliminar por el id y con un servicio de base de datos
    axiosDeleteMonkiById(monkiId)
    .then((response) =>{
      setNuevoMonki(!nuevoMonki);
      setOpcion(3);
      setOpenAlert(true);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  return (
    <div className='mainbox-deleteForm'>
      <button className='btn-cerrar' type='button' onClick={()=>setOpenModalDelete(false)}>
        <img className='logo-cerrar' 
          src={LogoEliminar} alt='btn-cerrar'/>
      </button>
      <img className='monki-delete' src={MonkiTriste} alt='monki delete'/>
      <p className='primer-bloque'>Seguro que deseas eliminar este monki?</p>
      <p className='segundo-bloque'>Una vez confirmado, no se podra recuperar la informacion</p>
      <button className='confirmar-eliminacion' type='submit'
      onClick={eliminarMonki}>Si, eliminar</button>
      <button className='cancelar-eliminacion' type='button'
      onClick={()=> setOpenModalDelete(false)}>Cancelar</button>
    </div>
  )
}

export {DeleteMonkiForm}