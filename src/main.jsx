import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import router from './components/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { UserContext, UserProvider } from './components/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
)
