import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddTodos, setLoadingFalse, setLoadingTrue } from "../redux/actionCreaters";

export const Todos = () => {
  const { todos, todosLoading, newTodo } = useSelector(store => store.todosReducer);
  const dispatch = useDispatch()

  const fetchTodos = async () => {
    try {
      dispatch(setLoadingTrue())
      const resp = await fetch('http://localhost:8888/get-todos');
      const data = await resp.json();

      dispatch(setAddTodos(data))
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(setLoadingFalse())
    }
  }
  useEffect(() => {
    fetchTodos();
  }, [newTodo])

  if (todosLoading) return <h1>LOADING...</h1>

  return (
      <div>
        {todos.map(todo => (
            <Fragment key={todo.id}>
              <div>{todo.title}</div>
              <div>{todo.description}</div>
              <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
              <div>Status {todo.completed.toString()}</div>
              <hr/>
            </Fragment>
        ))}
      </div>
  )
}
