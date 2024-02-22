import React from 'react'
import '../../assets/Styles/Components/Family/Empty.css'
import Monki from '../../Images/monoAsombrado.png'

function Empty() {
  return (
    <div className='mainbox-empty'>
        <img src={Monki} alt='monki empty' className='monki-empty'/>
        <p className='h1-empty'>Parece que aun no tienes monkis registrados</p>
        <p className='h2-empty'>Crea un monki y haz crecer tu familia</p>
    </div>
  )
}

export {Empty}