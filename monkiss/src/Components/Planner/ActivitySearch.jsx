import React, { useContext } from 'react'
import '../../assets/Styles/Components/Planner/ActivitySearch.css'
import { userContext } from '../../Context/userContext';

function ActivitySearch() {
  const {
    searchValue,
    setSearchValue
  }= useContext(userContext);

  return (
    <input className='activity-search--main'
    value={searchValue}
    placeholder='Ingresa la actividad'
    onChange={(event) => {
      setSearchValue(event.target.value)
    }}/>
  )
}

export {ActivitySearch}