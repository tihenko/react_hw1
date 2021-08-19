export const User = ({item}) => {
    return (
        <ul>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.username}</li>
            <li>{item.email}</li>
            <li>{item.phone}</li>
        </ul>


        );
}
