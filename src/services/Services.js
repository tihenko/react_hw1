const url = 'http://91.201.233.14/api/v1/cars'

function getCars() {
  return fetch(url).then(value => value.json())
}

const postCar = (obj) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
})

export {getCars, postCar}
