import React from 'react'
import '../../assets/Styles/Components/Family/Loading.css'
import Monki from '../../Images/monoLoading.png'

function Loading() {
  return (
    <div className='mainbox-loading'>
        <img src={Monki} alt='monki loading' className='monki-loading'/>
        <p className='h1-loading'>Estamos recuperando tus monkis</p>
        <p className='h2-loading'>Espera unos segundos...</p>
    </div>
  )
}

export {Loading}