import {
  ADD_TODOS,
  LOADING_TRUE,
  LOADING_FALSE,
  LAST_CREATED_TODO
} from "../actionTypes";

export const setLoadingFalse = () => ({type:LOADING_FALSE});
export const setLoadingTrue = () => ({type:LOADING_TRUE});
export const setAddTodos = (payload) => ({type:ADD_TODOS, payload});
export const setLastCreatedTodo = (payload) => ({type:LAST_CREATED_TODO, payload});
