import { Post } from "../post/Post";
import { getPostFromUser } from "../../services/Services";
import { useEffect, useState } from "react";

export const Posts = ({id}) => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostFromUser(id).then(value => setPosts(value));
  }, [id])

  console.log(posts)
  return (
      <div>
        {
            posts.map(value => <Post item={value} key={value.id}/>)
        }
      </div>
  );
}
