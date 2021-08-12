import {useEffect, useState} from "react";
import { User } from "../user/User";
import { getUsers } from "../../services/UserServise";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(value => setUsers(value));
  }, []);

    return (
        <div>
          {
            users.map(value => <User item={value} key={value.id}/>)
          }
        </div>
    );
}
