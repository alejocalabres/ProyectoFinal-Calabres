import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = {
            buyer: { name, email, phone },
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
            date: new Date(),
        };

        const docRef = await addDoc(collection(db, "orders"), order);
        setOrderId(docRef.id);
        clearCart();
        navigate("/");
    };

    return (
        <div>
            <h2>Finalizar Compra</h2>
            {orderId ? (
                <p>Gracias por tu compra! ID de orden: {orderId}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" required />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono" required />
                    <button type="submit">Comprar</button>
                </form>
            )}
        </div>
    );
};

export default CheckoutForm;
