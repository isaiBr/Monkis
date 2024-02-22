import React from 'react'
import Expandir from '../Images/expandir.png'
import '../assets/Styles/Components/Header.css'

function Header({titulo}) {
  return (
    <div className='mainbox-header'>
        <h1 className='titulo-header'>{titulo}</h1>
    </div>
  )
}

export {Header}