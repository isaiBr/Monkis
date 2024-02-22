import React from 'react'
import '../../assets/Styles/Components/Family/MonkiList.css'
function MonkiList({children}) {
  return (
    <div className='mainbox-monkiList'>
        <div className='listMonkis'>
            {children}
        </div>
    </div>
  )
}

export {MonkiList}