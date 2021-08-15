import { Post } from "../post/Post";
import { useEffect, useState } from "react";
import { getPostsFromUser } from "../../services/Services";

export const Posts = ({userId}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   getPostsFromUser(userId).then(value => setPosts(value))
  }, [userId])

    return (
        <div>
          {
            posts.map(value => <Post postItem={value} key={value.id}/>)
          }
        </div>
    );
}
