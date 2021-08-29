export function User({ item, history }) {
  const navigateTo = () => {
    history.push(`/users/${item.id}`);
  };

  return (
      <div>
        {item.name} - <button onClick={navigateTo}>go to details</button>
      </div>
  );
}
