import React from 'react'
import '../../styles/suggestionPage/SuggestionCardEdit.css'
import '../../styles/varDark.css'
import SimpleField from '../SimpleField'
import createSuggestion from '../../logic/createSuggestion'
import SubmitBtn from '../SubmitBtn'
import { useForm } from 'react-hook-form'
import TipTapEditor from '../TipTapEditor'
import { useContext, useState } from 'react'
import { UserContext } from '../userContext'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import '../../styles/ReactSelector.css'
import { createPortal } from 'react-dom'

const optionsStatus = [
  { value: 'RECIVED', label: 'Полученные' },
  { value: 'HANDELED', label: 'Обработанные' },
  { value: 'ACCEPTED', label: 'Принятые' },
  { value: 'REFUSED', label: 'Отклонённые' },
]

const optionsSource = [
  { value: 'EXTERNAL', label: 'Внешний' },
  { value: 'INTERNAL', label: 'Внутренний' },
]

function SuggestionCardEdit() {
  const { register, handleSubmit } = useForm()
  const [editorContent, setEditorContent] = useState('')
  const [selectSource, setSelectedSource] = useState(optionsSource[1])
  const [selectStatus, setSelectedStatus] = useState(optionsStatus[0])
  const { user } = useContext(UserContext)

  const handleSelectSource = (selecteSource) => {
    setSelectedSource(selecteSource)
  }

  const handleSelectStatus = (selecteStatus) => {
    setSelectedStatus(selecteStatus)
  }

  const handleEditorChange = (content) => {
    setEditorContent(content)
  }

  const notify = (a) => toast(a)

  const onSubmit = (data) => {
    data.description = editorContent
    data.source = selectSource.value
    data.status = selectStatus.value
    data.authorId = user ? user.id : null
    try {
      createSuggestion(data).then((res) => {
        if (res.code === 'ERR_NETWORK') {
          notify('Нет соединения')
          return
        }
        if (res.status === 200) {
          notify('Предложение добавлено')
        } else {
          notify(res.response.data.error)
        }
      })
    } catch (error) {
      notify(`Ошибка: ${err}`)
    }
  }

  return (
    <div className='cardModal'>
      <form
        className='suggestionCardEditForm'
        onSubmit={handleSubmit(onSubmit)}
      >
        <SimpleField
          name='title'
          title='Заголовок'
          register={register}
        ></SimpleField>
        <TipTapEditor
          onChange={handleEditorChange}
          title={'Описание'}
        ></TipTapEditor>
        <div className='SuggestionEditSourcePlusAuthor'>
          <Select
            classNamePrefix='RS'
            value={selectSource}
            onChange={handleSelectSource}
            options={optionsSource}
            unstyled={true}
            placeholder='Источник'
            defaultValue={optionsSource[0]}
          />
          <SimpleField
            name='author'
            title='Автор'
            register={register}
          ></SimpleField>
          <SimpleField
            name='gitlabId'
            title='Номер задачи'
            register={register}
          ></SimpleField>
        </div>
        <Select
          classNamePrefix='RS'
          value={selectStatus}
          onChange={handleSelectStatus}
          options={optionsStatus}
          unstyled={true}
          placeholder='Статус'
        />
        <div className='btnContainerForm'>
          <SubmitBtn register={register} title='Добавить'></SubmitBtn>
        </div>
      </form>
      {createPortal(<ToastContainer />, document.getElementById('notify'))}
    </div>
  )
}

export default SuggestionCardEdit
