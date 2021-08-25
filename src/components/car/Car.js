import { deleteCar } from "../../services/Services";

export const Car = ({setCars, value: {id, model, price, year}}) => {

  const deleter = (e) => {
    e.preventDefault()
    deleteCar(id).then(value => setCars(value))
  }
    return (
        <div>
            {id} - {model} - {price} - {year}
            <button onClick={deleter}>delete</button>
            <button>edit</button>

        </div>
    );
}
