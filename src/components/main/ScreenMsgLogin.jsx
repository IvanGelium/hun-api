export default function ScreenMsgLogin(res) {
  let member_type =
    res.res.data.message.member_type === 'owner' ? 'Рекрутер' : 'Заказчик'
  return (
    <>
      {res.res === 'Неверный email или пароль' ? (
        <div className='screenMsg'>
          <p>{res.res}</p>
        </div>
      ) : (
        <div className='screenMsg'>
          <p>{`Окружение: ${res.stage ? 'stage' : 'prod'}`}</p>
          <p>{member_type}</p>
          <p>
            {`id Аккаунта ${res.res.data.message.account_id}, id Пользователя ${res.res.data.message.id}`}
          </p>

          <p>
            Имя пользователя:
            {` ${res.res.data.message.name === undefined ? '' : res.res.data.message.name} ${res.res.data.message.middle_name === undefined ? '' : res.res.data.message.middle_name} ${res.res.data.message.last_name === null ? '' : res.res.data.message.last_name}`}
          </p>
          <p>{}</p>
          <div className='token'>
            <p>Токен:</p>
            <p>{res.res.data.message.token}</p>
          </div>
        </div>
      )}
    </>
  )
}
