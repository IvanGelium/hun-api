import React from 'react'
import '../styles/LoginForm.css'
import '../styles/varDark.css'
import '../styles//loginView/LoginView.css'
import { useState } from 'react'
import errorResponce from '../utils/errorResonce.utils.js'
import { useForm } from 'react-hook-form'
import SimpleField from '../components/SimpleField.jsx'
import SubmitBtn from '../components/SubmitBtn.jsx'
import { ToastContainer, toast } from 'react-toastify'
import loginBack from '../logic/loginBack.js'

function LoginView() {
  const notify = (a) => toast(a)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    try {
      loginBack(data).then((res) => {
        if (res.code === 'ERR_NETWORK') {
          notify('Нет соединения')
          return
        }
        if (res.status === 200) {
          // notify(`Вы вошли как: ${res.data.user.email}`)
          window.localStorage.setItem('token', res.data.token)
          window.location.reload()
        } else {
          notify(errorResponce(res.status))
        }
      })
    } catch (error) {
      notify(`Ошибка: ${err}`)
    }
  }
  return (
    <div className='loginViewWholePage'>
      <div className='loginViewBody'>
        <div className='loginViewForm'>
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

            <div className='btnContainerForm'>
              <SubmitBtn register={register} title='Отправить'></SubmitBtn>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default LoginView
