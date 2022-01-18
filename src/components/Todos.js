import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddTodos, setLoadingFalse, setLoadingTrue } from "../redux/actionCreaters";
import { Todo } from "./Todo";

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

  const updateTodo = async (id) => {
    await fetch(`http://localhost:8888/update-todo/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({title:'pisq', description:'12331231'}),
          headers: {
            'Content-type': 'application/json'
          }
        }
    )
  }

  const deleteTodoById = async (id) => {
    await fetch(`http://localhost:8888/delete-todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    await fetchTodos();
  }

  if (todosLoading) return <h1>LOADING...</h1>

  return (
      <div>
        {
          todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodoById={deleteTodoById} updateTodo={updateTodo}/>)
        }
      </div>
  )
}
