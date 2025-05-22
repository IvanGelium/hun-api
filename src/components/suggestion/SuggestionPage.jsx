import SuggestionColumnAccept from './SuggestionColumnInAccept'
import SuggestionColumnHandeled from './SuggestionColumnHandeled'
import SuggestionColumnRefuse from './SuggestionColumnInRefuse'
import SuggestionColumn from './SuggestionColumn'
import SimpleButton from '../SimpleButton'
import '../../styles/varDark.css'
import '../../styles/suggestionPage/SuggestionPage.css'

const cardsArray = [
  {
    title: 'Добавить управление отображения кнопкой по отправке ОПД.',
    description: 'Не всем требуется эта кнопка, было бы удобнее её скрывать',
    screenshots: '',
    createdAt: '11.02.2025',
    from: {
      source: 'Клиент',
      author: 'CHOICEIT',
    },
    id: 125,
    taskId: null,
  },
  {
    title: 'Вынести мессенджеры под отдельную кнопку в карточке кандидата',
    description:
      'Мессенджеры являются приоритетным каналом связи с кандидатами, было бы удобно подчеркнуть их отдельно от остальных контактов и сгруппировать в одном месте',
    screenshots: '',
    createdAt: '22.11.2024',
    from: {
      source: 'Клиент',
      author: 'Алания Авто',
    },
    id: 42,
    taskId: '1467',
  },
]

export default function SuggestionPage() {
  return (
    <div className='SuggestionPage page'>
      <div className='pageHeader'>
        <h2>Предложения</h2>
        <SimpleButton
          title='Добавить предложение + WIP'
          name='addSugestionButton'
          callback={null}
        ></SimpleButton>
      </div>

      <div className='columnsWrap'>
        <SuggestionColumn
          columnType='recived'
          cardsArray={cardsArray}
        ></SuggestionColumn>
        <SuggestionColumn
          columnType='handeled'
          cardsArray={cardsArray}
        ></SuggestionColumn>
        <SuggestionColumn
          columnType='accepted'
          cardsArray={cardsArray}
        ></SuggestionColumn>
        <SuggestionColumn
          columnType='refused'
          cardsArray={cardsArray}
        ></SuggestionColumn>
      </div>
    </div>
  )
}
