import {
  ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    LAST_CREATED_TODO
} from "../actionTypes";

const initialState = {
  newTodo: null,
  todos: [],
  todosLoading: false
}
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS: {
      return {...state, todos: action.payload}
    }
    case LAST_CREATED_TODO: {
      return {...state, newTodo: action.payload}
    }
    case LOADING_TRUE: {
      return {...state, todosLoading: true}
    }
    case LOADING_FALSE: {
      return {...state, todosLoading: false}
    }
    default:
      return state
  }
}

