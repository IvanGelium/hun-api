import '../styles/App.css'
import '../styles/varDark.css'
import '../styles/global.css'
import '../styles/App.css'
import fetchMe from '../logic/fetchMe.js'
import Sidebar from './Sidebar.jsx'
import { Outlet, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from './userContext.jsx'
import {} from 'react'

function App({ children }) {
  const token = window.localStorage.getItem('token')
  const { setUser, user } = useContext(UserContext)
  const [me, setMe] = useState()

  if (token) {
    useEffect(() => {
      const userObj = fetchMe(token)
      userObj.then((res) => {
        if (res) {
          setUser(res)
          setMe(res)
        }
      })
    }, [])
  }

  const navigate = useNavigate()
  const moveToLogin = () => {
    navigate('login')
  }
  const moveToMain = () => {
    navigate('main')
  }

  return (
    <>
      <div className='whole'>
        <div className='header'>
          <div onClick={moveToMain} className='headerLogo'>
            <div className='logoElement'></div>
            <h2>Hunapi</h2>
          </div>
          {/* <div className='searchBar'>
            Поиск <div className='wip'>WIP</div>
          </div> */}
          {me ? (
            <div onClick={moveToLogin} className='profile'>
              <h3>
                {me.first_name}
                {me.last_name}
              </h3>
              <h2>{me.role}</h2>
            </div>
          ) : (
            <div onClick={moveToLogin} className='profile'>
              <h3>Войти</h3>
            </div>
          )}
        </div>

        <div className='bg'>
          <Sidebar role={me ? me.role : 'USER'}></Sidebar>
          <div className='midel'>{children || <Outlet />}</div>
        </div>
      </div>
    </>
  )
}

export default App
