export const Comment = ({item}) => {
    return (
       <ol>
           <li>{item.postId}</li>
           <li>{item.id}</li>
           <li>{item.name}</li>
           <li>{item.email}</li>
           <li>{item.body}</li>
       </ol>
    );
}
