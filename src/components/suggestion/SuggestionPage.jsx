import SuggestionColumn from './SuggestionColumn'
import SimpleModal from '../SimpleModal'
import '../../styles/varDark.css'
import '../../styles/suggestionPage/SuggestionPage.css'
import SuggestionCardEdit from './SuggestionCardEdit'
import { useState } from 'react'

export default function SuggestionPage() {
  const [isCreateCardOpen, setCreateCardOpen] = useState(false)
  const handleOpen = () => {
    setCreateCardOpen(!isCreateCardOpen)
  }
  return (
    <div className='SuggestionPage page'>
      <div className='pageHeader'>
        <h2>Предложения</h2>

        <button onClick={handleOpen}>Добавить предложение</button>
      </div>

      <div className='columnsWrap'>
        <SuggestionColumn columnType='recived'></SuggestionColumn>
        <SuggestionColumn columnType='handeled'></SuggestionColumn>
        <SuggestionColumn columnType='accepted'></SuggestionColumn>
        <SuggestionColumn columnType='refused'></SuggestionColumn>
      </div>

      {isCreateCardOpen && (
        <SimpleModal setter={setCreateCardOpen} state={isCreateCardOpen}>
          <div className='suggestionCardEditWrap'>
            <h2>Добавить предложение</h2>
          </div>
          <SuggestionCardEdit></SuggestionCardEdit>
        </SimpleModal>
      )}
    </div>
  )
}
