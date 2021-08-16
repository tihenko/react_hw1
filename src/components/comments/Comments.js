import { useEffect, useState } from "react";
import { getCommentsFromPost } from "../../services/Services";
import { Comment } from "../comment/Comment";

export const Comments = ({postId}) => {
const [comments, setComments] = useState([]);

useEffect(() => {
    getCommentsFromPost(postId).then(value => setComments(value))
}, [postId])

    return (
        <div>
            *****************
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
            *****************
        </div>
    );
}
