import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux' ;
import {createStore} from "redux";
import ReactDom from "react-dom";
import { ADD_USER, LOAD_USERS } from "./redux/actions";
// import { addUser, loadUsers } from "./redux/actionCreaters";


let initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS :
      return {...state, users : [...action.payload]}
    case ADD_USER:
      let newUser = action.payload;
      let newUsersArray = [...state.users, newUser];
      return {...state, users: [...newUsersArray]}
    default :
      return state;
  }


}


let store = createStore(reducer)

ReactDom.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
document.getElementById('root')
)
