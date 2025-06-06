import axios from 'axios'
import { API_BASE_URL } from '../../env.js'

export default function deleteSuggestion(id, token) {
  console.log(id)
  return axios
    .delete(`${API_BASE_URL}/suggestion/${id}`, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((err) => {
      return err
    })
}
