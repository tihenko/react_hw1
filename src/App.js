import {
  BrowserRouter as Router, Switch, Route, Link, withRouter
} from "react-router-dom";
import './App.css';

import { Cars } from "./components/cars/Cars";
import { Form } from "./components/form/Form";


export default function App() {
  return (

      <Router>
        <div>
          <Link to={'/'}>Home</Link>
          <hr/>
          <Link to={'/cars'}>Cars</Link>
          <br/>
          <hr/>
          <Link to={'/create-car'}>Create car</Link>
        </div>

        <div>
          <Route path={'/cars'} component={Cars}/>
          <Route path={'/create-car'} component={Form}/>
        </div>
      </Router>
  );
}

