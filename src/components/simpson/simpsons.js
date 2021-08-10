import './simsons.css';

export function Family({ name, surname, age, info, photo }) {
  // const { name, surname, age, info, photo } = props.user;
  return (
      <div className={'simpson'}>
        <h2>{name}, {surname}, {age}, {info}</h2>
        <img src={photo} alt="imageHero"/>
      </div>
  );
}

