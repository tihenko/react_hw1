import { Comments } from "../comments/Comments";

export const Post = ({ item }) => {
  return (
      <div>
        <div>
          {item.name} - {item.title}
        </div>
        Comments: <Comments postId={item.id}/>
      </div>
  );
}
