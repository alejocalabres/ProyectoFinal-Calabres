import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState(false);

    const onAdd = (quantity) => {
        addToCart(product, quantity);
        setAddedToCart(true);
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>Descripción: {product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            {addedToCart ? (
                <p>Producto agregado al carrito</p>
            ) : (
                <ItemCount stock={product.stock} onAdd={onAdd} />
            )}
        </div>
    );
};

export default ItemDetail;
