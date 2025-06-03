import '../styles/App.css'
import '../styles/varDark.css'
import '../styles/global.css'
import '../styles/App.css'
import Sidebar from './Sidebar.jsx'
import { Outlet } from 'react-router-dom'

function App({ children }) {
  return (
    <>
      <div className='whole'>
        <div className='header'>
          <div className='headerLogo'>
            <div className='logoElement'></div>
            <h2>Hunapi</h2>
          </div>
          {/* <div className='searchBar'>
            Поиск <div className='wip'>WIP</div>
          </div> */}
          {/* <div className='profile'>
            <h3>Войти</h3>
            <div className='wip'>WIP</div>
          </div> */}
        </div>

        <div className='bg'>
          <Sidebar></Sidebar>
          <div className='midel'>{children || <Outlet />}</div>
        </div>
      </div>
    </>
  )
}

export default App
