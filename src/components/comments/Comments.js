import { useEffect, useState } from "react";
import { getComments } from "../../services/Services";
import { Comment } from "./comment/Comment";

export const Comments = () => {

 const [comments, setComments] = useState([]);

 useEffect(() => {
     getComments().then(value => setComments(value))
 },[])
    return (
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    );
}
