import { useEffect, useState } from "react";
import { getPosts } from "../../services/Services";
import { Post } from "../post/Post";

export const Posts = () => {
    const [posts, setPosts] = useState([]);
 useEffect(() => {
     getPosts().then(value => setPosts(value))
 },[])


    return (
        <div>
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    );
}
