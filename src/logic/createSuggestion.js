import axios from 'axios'
import { API_BASE_URL } from '../../env.js'

export default function createSuggestion(data) {
  return axios
    .post(`${API_BASE_URL}/suggestion/add`, {
      data: {
        title: data.title,
        description: data.description,
        source: data.source,
        status: data.status,
        author_name: data.author,
        author_id: data.authorId,
        gitlab_id: data.gitlabId,
      },
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}
