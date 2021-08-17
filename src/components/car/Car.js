export const Car = ({item: {id, model, price, year}}) => {
    return (
        <div>
            {id} - {model} - {price} - {year}
        </div>
    );
}
