import React from 'react'
import { createPortal } from 'react-dom'
import '../assets/Styles/Modals/Alert.css'

function Alert({children}) {
    return createPortal(
        <div className='alert-background'>
          {children}
        </div>,
        document.getElementById('modal')
      )
}

export {Alert}