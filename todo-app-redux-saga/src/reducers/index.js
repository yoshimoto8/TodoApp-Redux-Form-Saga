import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { fetchTodoData } from './Todo'

const rootReducer = combineReducers({
  form: formReducer,
  fetchTodoData,
})

export default rootReducer