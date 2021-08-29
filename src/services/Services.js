const url = 'https://jsonplaceholder.typicode.com/'
function getUsers() {
  return fetch(url + 'users').then(value => value.json())
}

function getUser(id) {
  return fetch(url + 'users/' + id).then(value => value.json())
}

function getPosts() {
  return fetch(url + 'posts').then(value => value.json())
}
export {getUsers, getPosts, getUser}
