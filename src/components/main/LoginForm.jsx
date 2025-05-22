import '../../styles/LoginForm.css'
import '../../styles/varDark.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import SimpleField from '../SimpleField.jsx'
import SubmitBtn from '../SubmitBtn.jsx'
import Checkbox from '../Checkbox.jsx'
import ScreenMsgLogin from './ScreenMsgLogin.jsx'
import login from '../../logic/login.js'

export default function FormLogin() {
  const [screen, setScreen] = useState(<p>Введите данные пользователя</p>)

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    login(data)
      .then((res) => {
        setScreen(ScreenMsgLogin({ res: res, stage: data.stage }))
      })
      .catch((err) => {
        setScreen(<p>Ошибка сервера</p>)
      })
    setScreen(<p>Ожидаем ответ...</p>)
  }

  return (
    <div className='block'>
      <div className='form-wrap'>
        <h3>Получение токена</h3>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <SimpleField
            name='login'
            title='Логин'
            register={register}
          ></SimpleField>
          <SimpleField
            name='password'
            title='Пароль'
            register={register}
          ></SimpleField>
          <div className='selectPlusCheckbox'>
            <Checkbox register={register} title='Stage' name='stage'></Checkbox>
          </div>
          <div className='btnContainerForm'>
            <SubmitBtn register={register} title='Отправить'></SubmitBtn>
          </div>
        </form>
      </div>
      <div className='blockScreen'>{screen}</div>
    </div>
  )
}
