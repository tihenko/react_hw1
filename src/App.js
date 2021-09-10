import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getUsers, saveUser } from "./services/api.service";
import { loadUsers } from "./redux/actionCreaters";






export default function App() {

  let state = useSelector(state => state)
  let dispatch = useDispatch();
  let { users } = state

  useEffect(() => {
    getUsers().then(value => {
      dispatch(loadUsers(value));
    });
  }, []);

  let handleAddUsers = async (e) => {
    let user = { name: 'vasya' }
    await saveUser(dispatch, user);


  };

  return (
      <div>
         <button onClick={handleAddUsers}>add user</button>
        {
          users.map(value => <div>{value.name}</div>)
        }
      </div>
  )

}


