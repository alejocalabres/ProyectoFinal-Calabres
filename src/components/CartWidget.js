// src/components/CartWidget.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div>
            <span>🛒</span>
            <span>{totalItems}</span>
        </div>
    );
};

export default CartWidget;
