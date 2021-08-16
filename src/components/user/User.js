import { Posts } from "../posts/Posts";
import { useState } from "react";

export const User = ({ item }) => {
  const [flag, setFlag] = useState(false);
  return (
      <div>
        <h2>
          {item.id} - {item.name} -
          <button onClick={() => setFlag(!flag)}>show posts</button>
        </h2>
        {flag && <Posts id={item.id}/>}
      </div>
  );
}
