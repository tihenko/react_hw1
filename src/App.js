import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { setLoadingFalse, setLoadingTrue, setLastCreatedTodo, setAddTodos } from "./redux/actionCreaters";

const CreateTodoForm = ({ onSubmit }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) return;
    try {

      await onSubmit(title, description);
      setTitle('')
      setDescription('')
    } catch (e) {
      console.log(e)
    }
  }

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={({ target: { value } }) => setTitle(value)}
               placeholder="todo title"/>
        <br/>
        <input type="text" value={description} onChange={({ target: { value } }) => setDescription(value)}
               placeholder="todo description"/>
        <br/>
        <button type="submit" disabled={!title || !description}>create todo</button>
      </form>
  )
}

const Todos = ({ todos, isLoading }) => {

  if (isLoading) return <h1>LOADING...</h1>
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

function App() {
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

  const onTodoCreate = async (title, description) => {
    if (!title || !description) return;

    const resp = await fetch('http://localhost:8888/create-todo', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = await resp.json();
    dispatch(setLastCreatedTodo(data))
  }

  return (
      <div className="App">
        <CreateTodoForm onSubmit={onTodoCreate}/>
        <Todos todos={todos} isLoading={todosLoading}/>
      </div>
  );
}

export default App;
