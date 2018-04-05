import axios from 'axios'

const url = "http://localhost:3001/todo_datas"
export default function createTodoData(todoText)  {
  return axios.post(url, {todoText: todoText })
}
