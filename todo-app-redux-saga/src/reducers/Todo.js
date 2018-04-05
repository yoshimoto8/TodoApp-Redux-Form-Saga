import { REQUEST_FETCH, SUCCEEDED_FETCH, FAILED_FETCH,
         REQUEST_CREATE, SUCCEEDED_CREATE, FAILED_CREATE,
         REQUEST_DELETE, SUCCEEDED_DELETE, FAILED_DELETE
}from '../actions'

const initialState = {
  fetching: false,
  todoText: [],
  error: null
}

export const fetchTodoData = (state=initialState, action) => {
  switch (action.type) {
    case REQUEST_FETCH:
      return { ...state, fetching: true, error: null }
    case SUCCEEDED_FETCH:
      return { ...state, fetching: false, todoText: action.payload.data}
    case FAILED_FETCH:
      return { ...state, fetching: false, todoText: null, error: action.error }
    case REQUEST_CREATE:
      return { ...state, fetching: true, error: null }
    case SUCCEEDED_CREATE:
     return {...state, fetching: false, todoText: [...state.todoText, action.payload]}
    case FAILED_CREATE:
      return {}
    case REQUEST_DELETE:
    return { ...state, fetching: true, error: null }
    case SUCCEEDED_DELETE:
      return {...state, fetching: false, todoText: state.todoText.filter(data => data.id !== action.payload.id)}
    case FAILED_DELETE:
    return {}
    default:
      return state
  }
}
