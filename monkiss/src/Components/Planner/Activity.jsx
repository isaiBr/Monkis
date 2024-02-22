import React from 'react'
import '../../assets/Styles/Components/Planner/Activity.css'

function Activity({actividad}) {
  return (
    <div className='activity-box'>
      <p className='titulo'>{actividad.titulo}</p>
      <p className='descripcion'>{actividad.descripcion}</p>
      <hr className='separador'/>
      <p className='fecha-hora'>{actividad.update}</p>
    </div>
  )
}

export {Activity}