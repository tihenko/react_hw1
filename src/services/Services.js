export { getUsers, getPostFromUser, getCommentsFromPost }
const url = 'https://jsonplaceholder.typicode.com'

function getUsers() {
  return fetch(`${url}/users`)
      .then(value => value.json())
}

function getPostFromUser(id) {
  return fetch(`${url}/users/${id}/posts`)
      .then(value => value.json())
}

function getCommentsFromPost(postId) {
  return fetch(`${url}/posts/${postId}/comments`)
      .then(value => value.json())
}
