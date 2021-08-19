export {getUsers, getPosts, getComments}
const url = 'https://jsonplaceholder.typicode.com'

function getUsers() {
  return fetch(`${url}/users`)
      .then(value => value.json())
}


function getPosts() {
  return fetch(`${url}/posts`)
      .then(value => value.json())
}


function getComments() {
  return fetch(`${url}/comments`)
      .then(value => value.json())
}
