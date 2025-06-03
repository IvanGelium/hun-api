import React from 'react'
import '../../styles/testPageView/TestSection.css'
import '../../styles/varDark.css'
import TestCard from './TestCard.jsx'

const test = 'Основные'
const testCardObj = {
  id: 1,
  title: 'Создание этапа',
  desc: 'Проверка создания этапа',
}

function TestsSection() {
  return (
    <div className='testSectionWhole'>
      <div className='testSectionHeader'>
        <div className='testSectionHeaderText'>{test}</div>
        <div className='testSectionHeaderType'></div>
        <div className='testSectionHeaderCount'></div>
      </div>
      <div className='testSectionBody'>
        <TestCard card={testCardObj}></TestCard>
        <TestCard card={testCardObj}></TestCard>
        <TestCard card={testCardObj}></TestCard>
        <TestCard card={testCardObj}></TestCard>
        <TestCard card={testCardObj}></TestCard>
        <TestCard card={testCardObj}></TestCard>
        <TestCard card={testCardObj}></TestCard>
        <TestCard card={testCardObj}></TestCard>
        <TestCard card={testCardObj}></TestCard>
      </div>
    </div>
  )
}

export default TestsSection
