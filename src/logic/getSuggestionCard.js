import axios from 'axios'
import { API_BASE_URL } from '../../env.js'

export default function getSuggestionByStatus(status) {
  return axios
    .get(`${API_BASE_URL}/suggestion/${status}`)
    .then((res) => {
      //   console.log(res.body)
      return res
    })
    .catch((err) => {
      return err
    })
}
