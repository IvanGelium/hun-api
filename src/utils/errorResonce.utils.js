export default function errorResponce(statusCode) {
  switch (statusCode) {
    case 401: {
      return 'Не удалось найти пользователя'
    }
    case 403: {
      return 'Токен отсутствует'
    }
    case 404: {
      return 'Не найден'
    }
    case 405: {
      return 'Код 405'
    }
    default: {
      return 'Неизвестная ошибка'
    }
  }
}
