import { Address } from "../address/Address";
import { Company } from "../company/Company";

export const User = ({ id, name, username, email, address, phone, website, company }) => {
  return (
      <div>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>username: {username}</p>
        <p>email: {email}</p>
        <Address {...address}/>
        <p>phone: {phone}</p>
        <p>website: {website}</p>
        <Company {...company}/>
      </div>
  );
}
