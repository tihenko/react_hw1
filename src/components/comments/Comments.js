import { Comment } from "../comment/Comment";
import { useEffect, useState } from "react";
import { getCommentsFromPost } from "../../services/Services";

export const Comments = ({postId}) => {
  const [comments, setComments]=useState([])
  useEffect(()=> {
    getCommentsFromPost(postId).then(value => setComments(value))
  },[postId])

    return (
        <div>
          {
            comments.map(value => <Comment commentItem={value} key={value.id}/>)
          }

        </div>
    );
}
