import './App.css';
import { useReducer } from "react";

const reducer = (state = {a: 0, b: 0, c: 0}, action) => {
  const {type, payload} = action;

  switch (type) {
    case '+a':
      return {...state, a: state.a + payload};

    case '-a':
      return {...state, a: state.a - payload};

    case '+b':
      return {...state, b: state.b + payload};

    case '-b':
      return {...state, b: state.b - payload};

    case '+c':
      return {...state, c: state.c + payload};

    case '-c':
      return {...state, c: state.c - payload};


    default:
      return state
  }
}

export default function App() {
  const [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});

  return (
      <div>
        <h1> a {a}</h1>
        <button onClick={() => dispatch({ type: '+a', payload: 1 })}>+1</button>
        <button onClick={() => dispatch({ type: '-a', payload: 1 })}>-1</button>
        <h1> b {b}</h1>
        <button onClick={() => dispatch({ type: '+b', payload: 1 })}>+1</button>
        <button onClick={() => dispatch({ type: '-b', payload: 1 })}>-1</button>
        <h1> c {c}</h1>
        <button onClick={() => dispatch({ type: '+c', payload: 1 })}>+1</button>
        <button onClick={() => dispatch({ type: '-c', payload: 1 })}>-1</button>
      </div>
  );
}
