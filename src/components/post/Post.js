import { Link } from "react-router-dom";

export const Post = ({ item }) => {
  return (
      <div>
        {item.title}
        <Link to={{ pathname: `/posts/${item.id}`, state: item }}>Post details</Link>
      </div>
  );
}
