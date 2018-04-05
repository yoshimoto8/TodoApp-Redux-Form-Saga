import axios from 'axios'

export default function fetchTodoData() {
  return axios({
    method: "get",
    url: "http://localhost:3001/todo_datas"
  })
}
