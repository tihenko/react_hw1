import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/Services";
import { User } from "../user/User";
import { UserDetails } from "../userDetails/UserDetails";

export function Users(props) {
  const { match: { url }, history } = props;
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(value => setUsers(value))
  }, [])

  return (
      <div>
        {users.map(value => <User history={history} item={value} key={value.id}/>)}

        <Route path={`${url}/:id`} render={(props) => <UserDetails {...props} />}/>
      </div>
  );
}
