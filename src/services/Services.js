const url = 'http://91.201.233.14/api/v1/cars'

const getCars = () => fetch(url).then(value => value.json())

const postCar = (obj) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
}).then(() => getCars())

const deleteCar = (id) => fetch(url + '/' + id, {
  method: 'DELETE'
}).then(() => getCars())



export {getCars, postCar, deleteCar }


