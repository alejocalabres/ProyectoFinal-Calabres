import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div>
            <p>{item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
    );
};

export default CartItem;
