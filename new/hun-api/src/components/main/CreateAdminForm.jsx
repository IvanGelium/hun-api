import '../../styles/CreateAdminForm.css'
import '../../styles/varDark.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import SimpleField from '../SimpleField.jsx'
import SubmitBtn from '../SubmitBtn.jsx'
import Checkbox from '../Checkbox.jsx'
import ScreenMsgCreateAdmin from './ScreenMsgCreateAdmin.jsx'
import createuser from '../../logic/createAdmin.js'
import Select from '../Select.jsx'
import { salesArray } from '../../../env.js'

export default function CreateAdminForm() {
  const [screen, setScreen] = useState(<p>Введите данные пользователя</p>)

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    createuser(data)
      .then((res) => {
        setScreen(ScreenMsgCreateAdmin(res.data))
      })
      .catch((err) => {
        setScreen(<p>Ошибка сервера</p>)
      })
    setScreen(<p>Ожидаем ответ...</p>)
  }

  return (
    <div className='block'>
      <div className='form-wrap'>
        <h3>Создание администратора</h3>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <SimpleField
            name={'email'}
            title={'Почта (пароль "adminadmin")'}
            register={register}
          ></SimpleField>
          <div className='namePlusCompany'>
            <SimpleField
              name={'name'}
              title={'Имя'}
              register={register}
            ></SimpleField>
            <SimpleField
              name={'company'}
              title={'Компании*'}
              register={register}
            ></SimpleField>
          </div>
          <SimpleField
            name={'inn'}
            title={'ИНН*'}
            register={register}
          ></SimpleField>

          <div className='selectPlusCheckbox'>
            <div className='selectWrapper'>
              <Select
                title='Автор'
                name='author'
                selectArray={salesArray}
                register={register}
              ></Select>
            </div>
            <Checkbox register={register} title='Stage' name='stage'></Checkbox>
          </div>
          <div className='btnContainerForm'>
            <SubmitBtn register={register} title='Создать'></SubmitBtn>
          </div>
        </form>
      </div>
      <div className='blockScreen'>{screen}</div>
    </div>
  )
}
