import { useEffect } from "react";
import { Car } from "../car/Car";
import { getCars } from "../../services/Services";

export const Cars = ({cars, setCars}) => {

useEffect(() => {
    getCars().then(value => setCars(value))
}, [setCars])

    return (
        <div>
            {
                cars.map(value => <Car value={value} key={value.id} setCars={setCars}/>)

            }
        </div>
    );
}
