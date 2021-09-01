import './App.css';
import { useReducer } from "react";

const reducer = (state =0, action) => {
  const {type, payload} = action;

  switch (type) {
    case '+':
      return state + payload;

    case '-':
      return state - payload;

    default:
      return state
  }

}

export default function App() {
  const [state, dispatch] = useReducer(reducer);

  return (
      <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: '+', payload: 10 })}>+10</button>
        <button onClick={() => dispatch({ type: '+', payload: 5 })}>+5</button>
        <button onClick={() => dispatch({ type: '+', payload: 1 })}>+1</button>
        <button onClick={() => dispatch({ type: '-', payload: 1 })}>-1</button>
        <button onClick={() => dispatch({ type: '-', payload: 5 })}>-5</button>
        <button onClick={() => dispatch({ type: '-', payload: 10 })}>-10</button>
      </div>
  );
}

