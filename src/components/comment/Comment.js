export const Comment = ({item}) => {
    return (
        <div>
          <p>{item.postId}</p>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.body}</p>

        </div>
    );
}
