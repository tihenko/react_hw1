import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Users } from "./components/users/Users";
import { Posts } from "./components/posts/Posts";
import { Comments } from "./components/comments/Comments";

export default function App() {
  return (
      <Router>
        <div>
          <Link to={'/'}>/</Link>
          <hr/>
          <Link to={'/users-page'}>Users page</Link>
          <br/>
          <hr/>
          <Link to={'/posts-page'}>Posts page</Link>
          <br/>
          <hr/>
          <Link to={'/comments-page'}>Comments page</Link>
          <hr/>
        </div>
        <div>
          <Route path={'/users-page'} component={Users}/>
          {/*<hr/>*/}
          <Route path={'/posts-page'} component={Posts}/>
          {/*<hr/>*/}
          <Route path={'/comments-page'} component={Comments}/>
        </div>
      </Router>

  );
}
