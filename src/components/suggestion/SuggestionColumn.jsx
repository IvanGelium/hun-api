import { useState, useEffect } from 'react'
import SuggestionCard from './SuggestionCard'
import getSuggestionByStatus from '../../logic/getSuggestionCard'

export default function SuggestionColumnRecived({ columnType }) {
  const column = columnSwitch(columnType)
  const [isCollapsed, setCollapse] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const handleCollapse = () => {
    setCollapse(!isCollapsed)
  }

  useEffect(() => {
    const suggestionsRes = getSuggestionByStatus(column.status)
    suggestionsRes.then((res) => {
      setSuggestions(res.data)
    })
  }, [])

  return (
    <>
      {isCollapsed ? (
        <div className='collapsedSuggestionColumn'>
          <div className='collapseButton' onClick={handleCollapse}>
            <div>{'>'}</div>
          </div>
          <h3>{column.title}:</h3>
          <div className='columnCardCounter'>
            {suggestions ? suggestions.length : 0}
          </div>
        </div>
      ) : (
        <div className='suggestionColumn'>
          <div className={`columnHeader ${column.name}`}>
            <div className='collapseButton' onClick={handleCollapse}>
              <div>{'>'}</div>
            </div>
            <h3>{column.title}:</h3>
            <div className='columnCardCounter'>
              {suggestions ? suggestions.length : 0}
            </div>
          </div>
          <div className='suggestionWrap'>
            {suggestions ? (
              suggestions.map((cardObj) => {
                return (
                  <SuggestionCard
                    column='recived'
                    cardObj={cardObj}
                    key={cardObj.id}
                  ></SuggestionCard>
                )
              })
            ) : (
              <div className='disconnect'>Не удалось загрузить предложения</div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

function columnSwitch(columnType) {
  switch (columnType) {
    case 'recived':
      return {
        title: 'Необработанные',
        name: 'recivedHeader',
        status: 'RECIVED',
      }
    case 'handeled':
      return {
        title: 'Обработанные',
        name: 'handeledHeader',
        status: 'HANDELED',
      }
    case 'accepted':
      return {
        title: 'Принятые',
        name: 'acceptedHeader',
        status: 'ACCEPTED',
      }
    case 'refused':
      return {
        title: 'Отклоненные',
        name: 'refusedHeader',
        status: 'REFUSED',
      }
    default:
      return {
        title: 'Ошибка',
        name: 'refusedHeader',
      }
  }
}
