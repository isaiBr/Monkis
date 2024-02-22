import React from 'react'
import { createPortal } from 'react-dom'
import '../assets/Styles/Modals/Modal.css'

function Modal({children}) {
  return createPortal(
    <div className='modal-background'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export {Modal}