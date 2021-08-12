import './App.css';
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";


function App() {
  return (
      <div>
        <Users/>
        <Posts/>
        <Comments/>
      </div>
  );
}

export default App;
