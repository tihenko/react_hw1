import { Posts } from "../posts/Posts";

export const User = ({item: {id, userName, name, phone, email}}) => {

    return (
        <div>
            <h3>{id} - {name}</h3>
            <ul>
                <li>userName: {userName}</li>
                <li>phone: {phone}</li>
                <li>email: {email}</li>
                <li>posts: <Posts userId={id}/></li>
            </ul>
        </div>
    );
}
