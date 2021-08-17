import { useState } from "react";
import { Posts } from "../posts/Posts";

export const User = ({item}) => {
  const [flag, setFlag] = useState(false)

    return (
        <div>
          <h3>
            {item.id} **** {item.name}
            <button onClick={() => setFlag (!flag)}>show posts</button>
          </h3>
          {flag && <Posts id={item.id}/>}

        </div>
    );
}
