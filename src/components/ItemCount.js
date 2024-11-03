import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const increment = () => count < stock && setCount(count + 1);
    const decrement = () => count > 1 && setCount(count - 1);

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
