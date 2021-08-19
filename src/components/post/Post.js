export const Post = ({item}) => {
    return (
        <ul>
            <li>{item.userId}</li>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.body}</li>
        </ul>
    );
}
