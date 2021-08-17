import { useState } from "react";
import { createCar } from "../../services/Services";

export const Form = () => {
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');

 const sendNewCar = (e) => {
     e.preventDefault()
     const car = {model, price, year}
     createCar(car).then(value => console.log(value))
 }

    return (
        <div>
            <form onSubmit={sendNewCar}>
                <input type="text" value={model} onInput={(e) => setModel(e.target.value)}/>
                <input type="text" value={price} onInput={(e) => setPrice(e.target.value)}/>
                <input type="text" value={year} onInput={(e) => setYear(e.target.value)}/>
                <input type="submit" value="create car"/>
            </form>
        </div>
    );
}
