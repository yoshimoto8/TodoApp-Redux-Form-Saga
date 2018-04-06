import { put, call } from 'redux-saga/effects'
import {succeededFetch,
         failedFetch,
         succeededCreate,
         failedCreate,
         succeededDelete,
         failedDelete} from '../actions'
import fetchTodoData from './Api/FetchTodoData'
import createTodoData  from './Api/CreateTodoData'
import deleteTodoData from './Api/DeleteTodoData'

export function* fetchData() {
  try {
    const payload = yield call(fetchTodoData)
    yield put(succeededFetch(payload))
  } catch (e) {
    yield put(failedFetch(e.message));
  }
}

export function* createData(action) {
  const textData = action.todoText.location
  const responseData = yield call(createTodoData, textData)
  if (responseData) {
    yield put(succeededCreate(responseData.data))
  } else {
    yield put(failedCreate('エラー'))
  }
}

export function* deleteData(action) {
  const todoId = action.data
  const responseData = yield call(deleteTodoData, todoId)
  if (responseData) {
    yield put(succeededDelete(responseData.data))
  } else {
    yield put(failedDelete('エラー'))
  }
}