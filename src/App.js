import './App.css';
import { useEffect } from "react";
import { addUser, loadUsers } from "./redux/actionCreaters";
import { useDispatch } from "react-redux";

const fetchUsersWithThunk = () => async (dispatch) => {
  const response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
  dispatch(loadUsers(response));
}

const addUserWithThunk = (userData) => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',

    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: userData.name

    })
  })
  const savedUser = await response.json();
  dispatch(addUser(savedUser))
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersWithThunk());
  }, [dispatch]);

  const xxx = () => {
    const user = { name: 'vasya' };
    dispatch(addUserWithThunk(user));
  }

  return (
      <div>
        <button onClick={xxx}>save user</button>
      </div>
  );
}
