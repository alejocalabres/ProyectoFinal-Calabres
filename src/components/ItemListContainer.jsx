import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, "productos"));
            setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Productos Disponibles</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
