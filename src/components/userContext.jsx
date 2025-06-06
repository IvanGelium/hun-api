// UserContext.js
import { createContext, useState } from 'react'

// Создаем контекст с начальным значением
export const UserContext = createContext({
  user: {
    id: null,
    role: 'USER',
    first_name: null,
    middle_name: null,
    last_name: null,
  },
  setUser: () => {},
})

// Создаем провайдер
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
