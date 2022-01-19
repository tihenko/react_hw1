import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { postService } from "../../services/post.service";

const SinglePostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setPost(state)
      return
    }
    postService.getById(id).then(value => setPost({ ...value }))
  }, [])
  const toHome = () => {
    navigate('/', { replace: true })
  }
  const back = () => {
    navigate(-1)
  }
  const forward = () => {
    navigate(1)
  }

  return (
      <div>
        <button onClick={toHome}>Home</button>
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        {post && (
            <div>
              <div>Id: {post.id}</div>
              <div>UserId: {post.userId}</div>
              <div>Title: {post.title}</div>
              <div>Body: {post.body}</div>
            </div>
        )}
      </div>
  );
};

export { SinglePostPage };
