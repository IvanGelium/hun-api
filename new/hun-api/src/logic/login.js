import axios from 'axios'
import { link, linkStage } from '../../env.js'

export default function login(data) {
  return axios
    .post(`${data.stage ? linkStage : link}/auth/login`, {
      email: data.login,
      password: data.password,
      source: 'plugin',
    })
    .then((res) => {
      if (res.data.status === 'error') {
        return res.data.message
      } else {
        return axios.get(`${data.stage ? linkStage : link}/me`, {
          headers: {
            'X-DCRT-HRM-AUTH': res.data.message.auth_token,
          },
        })
      }
    })
    .catch((err) => {
      return err
    })
}
