import SideBtn from './SideBtn.jsx'
import '../styles/Sidebar.css'
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
  return (
    <div>
      <div className='sidebar'>
        <div className='btnContainer'>
          <div className='btn' id='main'>
            <SideBtn link='/hun-api/main'>
              <RiTerminalWindowLine className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='suggestions'>
            <SideBtn link='/hun-api/suggestions'>
              <RiFileTextLine className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='closedTasks'>
            <SideBtn link='/hun-api/closedTasks'>
              <RiFileCloseLine className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='tests'>
            <SideBtn link='/hun-api/tests'>
              <RiAB className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='statistic'>
            <SideBtn link='/hun-api/statistic'>
              <RiPieChart2Line className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='chat'>
            <SideBtn link='/hun-api/chat'>
              <RiChat1Line className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='users'>
            <SideBtn link='/hun-api/users'>
              <RiGroup2Line className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='faq'>
            <SideBtn link='/hun-api/faq'>
              <RiQuestionAnswerLine className='sideBarBtnIcon' />
            </SideBtn>
          </div>
        </div>
        <div className='btnContainer'>
          <div className='btn' id='settings'>
            <SideBtn link='/hun-api/settings'>
              <RiSettings2Line className='sideBarBtnIcon' />
            </SideBtn>
          </div>
          <div className='btn' id='colorTheme'>
            <SideBtn>
              <RiLightbulbLine className='sideBarBtnIcon' />
            </SideBtn>
          </div>
        </div>
      </div>
    </div>
  )
}
