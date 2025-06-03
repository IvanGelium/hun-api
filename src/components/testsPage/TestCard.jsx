import React from 'react'
import '../../styles/testPageView/TestCard.css'
import '../../styles/varDark.css'

function TestCard({ card }) {
  return (
    <div>
      <div className='testCardWhole'>
        <div className='testCardHeader'>{card.title}</div>
        <div className='testCardBody'>{card.desc}</div>
        <div className='testCardStartTestWrap'>
          <button className='testCardStartTest'>Запуск</button>
        </div>
      </div>
    </div>
  )
}

export default TestCard
