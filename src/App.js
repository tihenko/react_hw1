import './App.css';
import { Cars } from "./components/cars/Cars";
import { useState } from "react";
import { postCar } from "./services/Services";

function App() {
  const [cars, setCars] = useState([])
  const [formDate, setFormDate] = useState({model: '', price: '', year: ''})

  const handler = ({target: {name, value}}) => setFormDate({...formDate, [name]: value})

  const save = (e) => {
    e.preventDefault()
    postCar(formDate).then( value => setCars(value))
    setFormDate({model: '', price: '', year: ''})
  }

  return (
      <div>
        <form onSubmit={save}>
           <input name="model" type="text" value={formDate.model} onChange={handler}/>
           <input name="price" type="number" value={formDate.price} onChange={handler}/>
           <input name="year" type="number" value={formDate.year} onChange={handler}/>
          <button>save</button>
        </form>
        <hr/>
        <Cars cars={cars} setCars={setCars}/>
      </div>
  );
}

export default App;
