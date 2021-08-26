import { useEffect, useState } from "react";
import { getCars } from "../../services/Services";
import { Car } from "../car/Car";

export const Cars = () => {

 const [cars, setCars] = useState([])

 useEffect(() => {
  getCars().then(value => setCars(value))
     },[])
    return (
        <div>
            {
                cars.map(value => <Car value={value} key={value.id}/>)
            }
        </div>
    );
}
