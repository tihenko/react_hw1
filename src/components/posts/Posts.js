import {useEffect, useState} from "react";
import { Post } from "../post/Post";
import { getPosts } from "../../services/PostService";
// import { User } from "../user/User";


export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts(value));
    }, []);

    return (
        <div>
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    );
}
