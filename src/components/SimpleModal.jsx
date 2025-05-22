import React from 'react'
import '../styles/varDark.css'
import { createPortal } from 'react-dom'
import '../styles/SimpleModal.css'
import { useEffect } from 'react'
import { RiCloseLine } from '@remixicon/react'

function SimpleModal({ children, state, setter }) {
  const handleClose = () => {
    setter(!state)
  }
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return createPortal(
    <div className='simpleModalOverlay' onClick={handleClose}>
      <div className='simpleModal' onClick={stopPropagation}>
        <div className='modalCloseButton' onClick={handleClose}>
          <RiCloseLine />
        </div>

        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default SimpleModal
