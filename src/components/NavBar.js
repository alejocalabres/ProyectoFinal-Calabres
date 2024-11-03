import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => (
    <nav>
        <h1>Gomería Belgrano</h1>
        <Link to="/">Inicio</Link>
        <Link to="/categoria/llantas">Llantas</Link>
        <Link to="/categoria/neumaticos">Neumáticos</Link>
        <Link to="/cart">
            <CartWidget />
        </Link>
    </nav>
);

export default NavBar;
