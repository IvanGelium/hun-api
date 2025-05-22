import { useState } from 'react'
import SuggestionCard from './SuggestionCard'

function columnSwitch(columnType) {
  switch (columnType) {
    case 'recived':
      return {
        title: 'Необработанные',
        name: 'recivedHeader',
      }
    case 'handeled':
      return {
        title: 'Обработанные',
        name: 'handeledHeader',
      }
    case 'accepted':
      return {
        title: 'Принятые',
        name: 'acceptedHeader',
      }
    case 'refused':
      return {
        title: 'Отклоненные',
        name: 'refusedHeader',
      }
    default:
      return {
        title: 'Ошибка',
        name: 'refusedHeader',
      }
  }
}

export default function SuggestionColumnRecived({ columnType, cardsArray }) {
  const column = columnSwitch(columnType)
  const [isCollapsed, setCollapse] = useState(false)
  const handleCollapse = () => {
    setCollapse(!isCollapsed)
  }

  return (
    <>
      {isCollapsed ? (
        <div className='collapsedSuggestionColumn'>
          <div className='collapseButton' onClick={handleCollapse}>
            <div>{'>'}</div>
          </div>
          <h3>{column.title}:</h3>
          <div className='columnCardCounter'>{cardsArray.length}</div>
        </div>
      ) : (
        <div className='suggestionColumn'>
          <div className={`columnHeader ${column.name}`}>
            <div className='collapseButton' onClick={handleCollapse}>
              <div>{'>'}</div>
            </div>
            <h3>{column.title}:</h3>
            <div className='columnCardCounter'>{cardsArray.length}</div>
          </div>
          <div className='suggestionWrap'>
            {cardsArray.map((cardObj) => {
              return (
                <SuggestionCard
                  column='recived'
                  cardObj={cardObj}
                ></SuggestionCard>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
