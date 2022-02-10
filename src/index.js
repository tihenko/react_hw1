import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import { App } from './App';
import store from "./store/store";

ReactDom.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
