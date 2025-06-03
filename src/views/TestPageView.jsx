import React from 'react'
import '../styles/testPageView/TestPage.css'
import '../styles/varDark.css'
import TestSection from '../components/testsPage/TestsSection.jsx'

function TestPageView() {
  return (
    <div className='testWholePage'>
      <div className='testsHeader'>
        <h2>Тесты WIP</h2>
        <div className='testsHeaderTabs'>
          <div className='selectedTab'>API тесты</div>
          <div>UI тесты</div>
        </div>
      </div>
      <div className='testsBody'>
        <TestSection></TestSection>
      </div>
    </div>
  )
}

export default TestPageView
