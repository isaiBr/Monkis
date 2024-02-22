import React from 'react'
import '../../assets/Styles/Components/Planner/ActivityList.css'

function ActivityList({children}) {
  return (
    <div className='box-list--activities'>{children}</div>
  )
}

export {ActivityList}