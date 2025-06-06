import '../../styles/suggestionPage/SuggestionCard.css'
import '../../styles/varDark.css'
import { linkGitLab } from '../../../env.js'
import SimpleModal from '../SimpleModal.jsx'
import { useState } from 'react'
import TipTapEditor from '../TipTapEditor.jsx'
import { RiDeleteBinLine, RiEdit2Line } from '@remixicon/react'
import deleteSuggestion from '../../logic/deleteSuggestion.js'
import DOMPurify from 'dompurify'
import { createPortal } from 'react-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function SuggestionCard({ column, cardObj }) {
  const notify = (a) => toast(a)
  const token = window.localStorage.getItem('token')
  const cleanHTML = DOMPurify.sanitize(cardObj.description)
  cardObj.description = cleanHTML
  const [isCardOpen, setCardOpen] = useState(false)
  const source = translateSource(cardObj.source)
  // console.log(cardObj)
  const handleOpen = () => {
    setCardOpen(!isCardOpen)
  }
  const link = `${linkGitLab}#${cardObj.taskId}`

  const handleDelete = () => {
    const suggestion = deleteSuggestion(cardObj.id, token)
    suggestion.then((res) => {
      if (res.status === 200) {
        notify('Предложение удалено')
      } else {
        notify(res.response.data.error)
      }
    })
  }

  return (
    <div className={`card ${column}`} onClick={handleOpen}>
      <div className='cardTitle'>
        <h4>{cardObj.title}</h4>
      </div>
      <div className='cardAbout unimportantText'>
        <div className='ColumnCardlinkPlusAuthor'>
          <div className='ColumnCardtaskLink'>
            {cardObj.gitlab_id < 1 ? (
              'Нет задачи'
            ) : (
              <a
                className='unimportantText'
                href={link}
              >{`#${cardObj.gitlab_id}`}</a>
            )}
          </div>
          <div className='columnCardAuthor'>{`${source} ${cardObj.author_name}`}</div>
        </div>
        <div className='columnCardCreatedAt'>{cardObj.created_at}</div>
      </div>

      {isCardOpen && (
        <SimpleModal
          title={cardObj.title}
          setter={setCardOpen}
          state={isCardOpen}
        >
          <div className='cardModal'>
            <div className='cardModalTitle'>
              <h2>{cardObj.title}</h2>
            </div>
            <div className='cardModalTextContent'>
              <div
                dangerouslySetInnerHTML={{ __html: cardObj.description }}
                className='cardModalDescription'
              ></div>
              <div className='cardAbout unimportantText'>
                <div className='ColumnCardlinkInfo'>
                  <div className='columnCardAuthor'>{`${source} ${cardObj.author_name}`}</div>
                  <div className='columnCardCreatedAt'>
                    {cardObj.created_at}
                  </div>
                </div>
                <div className='columnCardModalButtons'>
                  <div
                    onClick={handleDelete}
                    className='columnCardModalDeleteButton columnCardModalButton'
                  >
                    <RiDeleteBinLine className='ColumnCardModalIcon'></RiDeleteBinLine>
                  </div>
                  <div className='columnCardModalUpdateButton columnCardModalButton'>
                    <RiEdit2Line className='ColumnCardModalIcon'></RiEdit2Line>
                  </div>
                  <div className='ColumnCardModaltaskLink'>
                    {cardObj.gitlab_id < 1 ? (
                      'Нет задачи'
                    ) : (
                      <a href={link}>{`#${cardObj.gitlab_id}`}</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='cardModalLeaveCommentSection'>
              <div className='cardModalEditorSection'>
                <TipTapEditor title='Комментарий' />
              </div>
              <div className='cardModalUnderTipTap'>
                <div></div>
                <div className='cardModalSaveCommentButton'>Сохранить</div>
              </div>
            </div>
          </div>
        </SimpleModal>
      )}
      {createPortal(<ToastContainer />, document.getElementById('notify'))}
    </div>
  )
}

function translateSource(source) {
  switch (source) {
    case 'EXTERNAL':
      return 'Клиент'
    case 'INTERNAL':
      return 'Сотрудник'
  }
}
