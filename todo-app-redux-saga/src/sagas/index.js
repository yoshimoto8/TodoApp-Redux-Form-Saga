import { takeLatest } from 'redux-saga/effects'
import { REQUEST_FETCH, REQUEST_CREATE, REQUEST_DELETE} from '../actions'
import {fetchData, createData, deleteData} from './Todo'

function* rootSaga() {
  yield [
    takeLatest(REQUEST_FETCH,fetchData),
    takeLatest(REQUEST_CREATE,createData),
    takeLatest(REQUEST_DELETE, deleteData)
  ]
}

export default rootSaga
