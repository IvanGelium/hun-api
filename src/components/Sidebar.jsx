import SideBtn from './SideBtn.jsx'
import '../styles/Sidebar.css'
import ThemeSwitch from './ThemeSwitch.jsx'
import { useState } from 'react'

import {
  RiTerminalWindowLine,
  RiFileTextLine,
  RiFileCloseLine,
  RiAB,
  RiPieChart2Line,
  RiChat1Line,
  RiGroup2Line,
  RiQuestionAnswerLine,
  RiSettings2Line,
  RiLightbulbLine,
} from '@remixicon/react'

export default function Sidebar({ role }) {
  const [theme, setTheme] = useState('dark')
  const isShow = access(role)
  document.querySelector('body').setAttribute('date-theme', theme)
  return (
    <div>
      <div className='sidebar'>
        <div className='btnContainer'>
          <div className='btn' id='main'>
            <SideBtn link='main'>
              <RiTerminalWindowLine className='sideBarBtnIcon' />
            </SideBtn>
          </div>

          <div className='btn' id='suggestion'>
            <SideBtn link='suggestion'>
              <RiFileTextLine className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          {/* {isShow.closedTasks && (
            <div className='btn' id='closedTask'>
              <SideBtn link='closedTask'>
                <RiFileCloseLine className='sideBarBtnIcon' />
              </SideBtn>
            </div>
          )} */}

          <div className='btn' id='test'>
            <SideBtn link='test'>
              <RiAB className='sideBarBtnIcon' />
            </SideBtn>
          </div>

          {/* {isShow.statistic && (
            <div className='btn' id='statistic'>
              <SideBtn link='statistic'>
                <RiPieChart2Line className='sideBarBtnIcon' />
              </SideBtn>
            </div>
          )} */}
          {/* {isShow.chat && (
            <div className='btn' id='chat'>
              <SideBtn link='chat'>
                <RiChat1Line className='sideBarBtnIcon' />
              </SideBtn>
            </div>
          )} */}
          {/* {isShow.users && (
            <div className='btn' id='user'>
              <SideBtn link='users'>
                <RiGroup2Line className='sideBarBtnIcon' />
              </SideBtn>
            </div>
          )} */}
          {/* <div className='btn' id='faq'>
            <SideBtn link='faq'>
              <RiQuestionAnswerLine className='sideBarBtnIcon' />
            </SideBtn>
          </div> */}
        </div>
        <div className='btnContainer'>
          {/* <div className='btn' id='settings'>
            <SideBtn link='settings'>
              <RiSettings2Line className='sideBarBtnIcon' />
            </SideBtn>
          </div> */}
          <div className='btn' id='colorTheme'>
            <ThemeSwitch theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
    </div>
  )
}

const access = (role) => {
  switch (role) {
    case 'ADMIN':
      return {
        main: true,
        closedTasks: true,
        chat: true,
        tests: true,
        statistic: true,
        users: true,
      }
    case 'USER':
      return {
        main: false,
        closedTasks: false,
        chat: false,
        tests: false,
        statistic: false,
        users: false,
      }
    case 'DEVELOPER':
      return {
        main: true,
        closedTasks: true,
        chat: false,
        tests: true,
        statistic: true,
        users: false,
      }
    case 'SALES':
      return {
        main: false,
        closedTasks: true,
        chat: false,
        tests: false,
        statistic: false,
        users: false,
      }
    case 'SUPPORT':
      return {
        main: false,
        closedTasks: true,
        chat: true,
        tests: false,
        statistic: false,
        users: false,
      }
    default:
      return {
        main: false,
        closedTasks: false,
        chat: false,
        tests: false,
        statistic: false,
        users: false,
      }
  }
}
