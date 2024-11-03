import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.length > 0 ? (
                <>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <p>Total: ${totalPrice}</p>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                    <Link to="/checkout">Proceder al Checkout</Link>
                </>
            ) : (
                <p>El carrito está vacío.</p>
            )}
        </div>
    );
};

export default Cart;
