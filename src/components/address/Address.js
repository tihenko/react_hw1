import { Geo } from "../geo/Geo";

export const Address = ({street, suite, city, zipcode, geo}) => {
    return (
        <div>
          <p>street:{street}</p>
          <p>suite:{suite}</p>
          <p>city:{city}</p>
          <p>zipcode:{zipcode}</p>
          <Geo {...geo}/>
        </div>
    );
}
