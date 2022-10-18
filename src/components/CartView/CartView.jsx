import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import "./cartView.css";


function CartView() {
    const context = useContext(cartContext);
    const { cart } = context;

    if (cart.length === 0) {
        return (
            <div>
                <h3>
                    Tu carrito se encuentra vacío - Comience a comprar!
                </h3>
                <Link to={"/"}>
                    <button className="btn-Cart">Seguir Comprando!</button>
                </Link>
            </div>
        );
    } else {
        return (
            <>
                <h2>Mi Carrito</h2>
                <hr />
                <CartList />
            </>
        );

    }
}

export default CartView;
