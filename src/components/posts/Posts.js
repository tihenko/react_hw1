import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts } from "../../services/Services";
import { Post } from "../post/Post";
import { PostDetails } from "../postDetails/PostDetails";

export const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(value => setPosts(value))
  }, [])

  return (
      <div>
        <Route path={'/posts/:id'} component={PostDetails}/>
        {
          posts.map(value => <Post item={value} key={value.id}/>)
        }
      </div>
  );
}
