import axios from 'axios'

export default function fetchTodoData(id) {
  return axios({
    method: "delete",
    url: `http://localhost:3001/todo_datas/${id}`
  })
}