import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { createPortal } from 'react-dom'

function Notification({ norifyCallback }) {
  norifyCallback
  return createPortal(<ToastContainer />, document.getElementById('notify'))
}

export default Notification
