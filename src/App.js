import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Users } from "./components/users/Users";
import { Posts } from "./components/posts/Posts";

export default function App() {
  return (
      <Router>
        <div>
          <Link to={'/home'}>home</Link>
          <hr/>
          <Link to={'/users'}>users page</Link>
          <hr/>
          <Link to={'/posts'}>posts page</Link>
          <div>
            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>
            {/*<Route path={'posts/id'}/>*/}
          </div>
        </div>
      </Router>
  );
}

