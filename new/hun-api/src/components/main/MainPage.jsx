import '../../styles/MainPage.css'
import '../../styles/varDark.css'
import LoginForm from './LoginForm.jsx'
import CreateAdminForm from './CreateAdminForm.jsx'

const mainPage = () => {
  return (
    <>
      <div className='Page'>
        <div className='headerPage'>
          <h2>Главная </h2>
        </div>
        <div className='blockContainers-wrap'>
          <div className='blockContainer'>
            <LoginForm></LoginForm>
          </div>
          <div className='blockContainer'>
            <CreateAdminForm></CreateAdminForm>
          </div>
        </div>
      </div>
    </>
  )
}

export default mainPage
