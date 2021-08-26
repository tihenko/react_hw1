import { useState } from "react";
import { postCar } from "../../services/Services";

export const Form = () => {
  const [formDate, setFormDate] = useState({model:'', price:'', year:''})

const handler = (e) => setFormDate({...formDate, [e.target.name]: e.target.value})

  const save = async (e) => {
    e.preventDefault()
   await postCar(formDate)
    setFormDate({model:'', price:'', year:''})
  }
  return (
      <form onSubmit={save}>
        <input onChange={handler} type="text" value={formDate.model} name={'model'} minLength={1} maxLength={20}/>
        <input onChange={handler} type="number" value={formDate.price} name={'price'} min={1}/>
        <input onChange={handler} type="number" value={formDate.year} name={'year'} min={1990} max={2021}/>
        <button>save</button>
      </form>
  );
}
