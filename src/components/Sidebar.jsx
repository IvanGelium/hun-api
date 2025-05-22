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

export default function Sidebar() {
  const [theme, setTheme] = useState('dark')
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
          <div className='btn' id='suggestions'>
            <SideBtn link='suggestions'>
              <RiFileTextLine className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='closedTasks'>
            <SideBtn link='closedTasks'>
              <RiFileCloseLine className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='tests'>
            <SideBtn link='tests'>
              <RiAB className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='statistic'>
            <SideBtn link='statistic'>
              <RiPieChart2Line className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='chat'>
            <SideBtn link='chat'>
              <RiChat1Line className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='users'>
            <SideBtn link='users'>
              <RiGroup2Line className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='faq'>
            <SideBtn link='faq'>
              <RiQuestionAnswerLine className='sideBarBtnIcon' />
            </SideBtn>
          </div>
        </div>
        <div className='btnContainer'>
          <div className='btn' id='settings'>
            <SideBtn link='settings'>
              <RiSettings2Line className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='colorTheme'>
            <ThemeSwitch theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <RiLightbulbLine className='sideBarBtnIcon' /> */
}
