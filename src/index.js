import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux";



  ReactDom.render(
      <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
      </React.StrictMode>,
      document.getElementById('root')
  );
