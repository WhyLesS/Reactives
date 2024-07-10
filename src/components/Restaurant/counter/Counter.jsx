export const Counter = ({ count, decrement, increment }) => {
    return (
        <div>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    );
};
