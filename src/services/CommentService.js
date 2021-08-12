function getComments() {
  return fetch('https://jsonplaceholder.typicode.com/comments')
      .then(value => value.json());
}

function getComment(id) {
  return fetch('https://jsonplaceholder.typicode.com/comments' + id)
      .then(value => value.json());
}


export {getComments, getComment};
