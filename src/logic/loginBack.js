import axios from 'axios'
import { API_BASE_URL } from '../../env.js'

export default function loginBack(data) {
  return axios
    .post(`${API_BASE_URL}/auth/login`, {
      email: data.login,
      password: data.password,
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}
