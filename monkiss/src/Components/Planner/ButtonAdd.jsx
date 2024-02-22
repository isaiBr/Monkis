import React from 'react'
import '../../assets/Styles/Components/Planner/ButtonAdd.css'
import miImagen from './jeje.jpeg'

function ButtonAdd({setOpenModal}) {
  return (
    <button className='button-add--main'
      onClick={()=>{
        setOpenModal(state => !state)
      }}>
      <img className='cara-jeje' src={miImagen} alt='Cara de Majeje'/>
    </button>
    
  )
}

export {ButtonAdd}