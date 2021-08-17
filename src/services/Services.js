
const url = 'http://195.72.146.25/api/v1/cars'

const getCars = () => fetch(url).then(value => value.json())

const createCar = (obj) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(obj),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
})
    .then(value => value.json())

export {getCars, createCar}
