import { useEffect, useState } from "react";
import { getPostFromUser } from "../../services/Services";
import { Post } from "../post/Post";

export const Posts = ({id}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostFromUser(id).then(value => setPosts(value))
  }, [id])

    return (
        <div>
          {
            posts.map(value => <Post item={value} key={value.id}/>)
          }

        </div>
    );
}
