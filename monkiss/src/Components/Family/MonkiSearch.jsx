import '../../assets/Styles/Components/Family/MonkiSearch.css'
import React from 'react'
import LogoNuevo from '../../Images/new.png'

function MonkiSearch({setOpenModalNew,textMonkiSearch, setTextMonkiSearch}) {
  return (
    <div className='mainbox-searchAdd'>
      <div className='bloque-search'>
        <input placeholder='Ingresa el nombre'
        className='input-monkiName' 
        defaultValue={textMonkiSearch}
        onChange={(event)=>setTextMonkiSearch(event.target.value)}/>
      </div>
      <div className='bloque-add'>
        <button className='button-addMonki' onClick={()=> setOpenModalNew(true)}>
          <img src={LogoNuevo} alt='logo nuevo' className='logo-nuevo'/>
          Nuevo
        </button>
      </div>
      
    </div>
  )
}

export {MonkiSearch}