import { User } from "../user/User";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/Services";

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers(value))
    }, [])

    return (
        <div>
          {
            users.map(value => <User item={value} key={value.id}/>)
          }
        </div>
    );
}
