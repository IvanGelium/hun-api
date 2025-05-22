import '../../styles/suggestionPage/SuggestionCard.css'
import '../../styles/varDark.css'
import { linkGitLab } from '../../../env.js'
import SimpleModal from '../SimpleModal.jsx'
import { useState } from 'react'
import TipTapEditor from '../TipTapEditor.jsx'
import { RiDeleteBinLine, RiEdit2Line } from '@remixicon/react'

export default function SuggestionCard({ column, cardObj }) {
  const [isOpen, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!isOpen)
  }
  const link = `${linkGitLab}#${cardObj.taskId}`

  return (
    <div className={`card ${column}`} onClick={handleOpen}>
      <div className='cardTitle'>
        <h4>{cardObj.title}</h4>
      </div>
      <div className='cardAbout unimportantText'>
        <div className='ColumnCardlinkPlusAuthor'>
          <div className='ColumnCardtaskLink'>
            {cardObj.taskId === null ? (
              'Нет задачи'
            ) : (
              <a
                className='unimportantText'
                href={link}
              >{`#${cardObj.taskId}`}</a>
            )}
          </div>
          <div className='columnCardAuthor'>{`${cardObj.from.source} ${cardObj.from.author}`}</div>
        </div>
        <div className='columnCardCreatedAt'>{cardObj.createdAt}</div>
      </div>

      {isOpen && (
        <SimpleModal title={cardObj.title} setter={setOpen} state={isOpen}>
          <div className='cardModal'>
            <div className='cardModalTitle'>
              <h2>{cardObj.title}</h2>
            </div>
            <div className='cardModalTextContent'>
              <div className='cardModalDescription'>{cardObj.description}</div>
              <div className='cardAbout unimportantText'>
                <div className='ColumnCardlinkInfo'>
                  <div className='columnCardAuthor'>{`${cardObj.from.source} ${cardObj.from.author}`}</div>
                  <div className='columnCardCreatedAt'>{cardObj.createdAt}</div>
                </div>
                <div className='columnCardModalButtons'>
                  <div className='columnCardModalDeleteButton columnCardModalButton'>
                    <RiDeleteBinLine className='ColumnCardModalIcon'></RiDeleteBinLine>
                  </div>
                  <div className='columnCardModalUpdateButton columnCardModalButton'>
                    <RiEdit2Line className='ColumnCardModalIcon'></RiEdit2Line>
                  </div>
                  <div className='ColumnCardModaltaskLink'>
                    {cardObj.taskId === null ? (
                      'Нет задачи'
                    ) : (
                      <a href={link}>{`#${cardObj.taskId}`}</a>
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
    </div>
  )
}

{
  /* */
}
