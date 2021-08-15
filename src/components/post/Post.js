import { Comments } from "../comments/Comments";

export const Post = ({ postItem: { title, id } }) => {
  return (
      <ul>
        <li>{title}</li>
        <li>Comments: <Comments postId={id}/></li>
      </ul>
  );
}
