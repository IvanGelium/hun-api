export default function ScreenMsgCreateAdmin(data) {
  return (
    <>
      {data.status === 'error' ? (
        <div className='screenMsg'>
          <p>{data.message}</p>
        </div>
      ) : (
        <div className='screenMsg'>
          <p>
            {`id Аккаунта ${data.message.admin_user.account_id}, id Пользователя ${data.message.admin_user.id}`}
          </p>
          <p>{`Почта: ${data.message.admin_user.email}`}</p>
          <p>
            Имя пользователя:
            {` ${data.message.admin_user.name === undefined ? '' : data.message.admin_user.name} ${data.message.admin_user.middle_name === null ? '' : data.message.admin_user.middle_name} ${data.message.admin_user.last_name === null ? '' : data.message.admin_user.last_name}`}
          </p>
        </div>
      )}
    </>
  )
}
