import { useState } from "react";
import { setLastCreatedTodo } from "../redux/actionCreaters";
import { useDispatch } from "react-redux";

export const CreateTodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) return;
    try {
      await onTodoCreate(title, description);
      setTitle('')
      setDescription('')
    } catch (e) {
      console.log(e)
    }
  }


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
