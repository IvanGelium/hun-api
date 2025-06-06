import axios from 'axios'
import { API_BASE_URL } from '../../env.js'

const fetchMe = async (token) => {
  return await axios
    .get(`${API_BASE_URL}/user/me`, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      const user = res.data
      return user
    })
    .catch((err) => {
      return null
    })
}

export default fetchMe
