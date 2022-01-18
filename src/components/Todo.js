import { Fragment } from "react";

export const Todo = ({todo, deleteTodoById, updateTodo}) => {
    return (
        <Fragment key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.description}</div>
          <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
          <div>Status {todo.completed.toString()}</div>
          <button onClick={() => deleteTodoById(todo.id)}>Delete</button>
          <button onClick={() => updateTodo(todo.id)}>Update</button>
          <hr/>
        </Fragment>
    );
}
