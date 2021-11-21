import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CreateTodoForm = ({ onSubmit }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    onSubmit(title, description)
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



const Todos = () => {

}



function App() {
  const store = useSelector(store => store)
  console.log('store', store)

  const fetchTodos = async () => {
    const resp = await fetch('http://localhost:8888/get-todos');
    const data = await resp.json();
    console.log(data, 'data')
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  const onTodoCreate = async (title, description) => {
    if (!title || !description) return;
    console.log(title, description)
    const resp = await fetch('http://localhost:8888/create-todo', {
      method: 'POST',
      body: JSON.stringify({title, description}),
      headers: {

      }
    })
    const data = await resp.json();
    console.log(data)
  }

  return (
      <div className="App">
        <CreateTodoForm onSubmit={onTodoCreate}/>
      </div>
  )
}

export default App;
