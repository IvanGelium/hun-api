import axios from 'axios'
import { link, linkStage } from '../../env.js'
import { jsonUser } from './logicVar.js'

export default function createUser(data) {
  return axios.post(`${data.stage ? linkStage : link}/sign_up`, {
    admin_user: {
      ...jsonUser,
      name: data.name === '' ? 'Admin' : data.name,
      email: data.email,
      company: data.company,
      utm_source: data.author === 'Автор' ? 'test' : data.author,
      inn: data.inn,
    },
  })
}
