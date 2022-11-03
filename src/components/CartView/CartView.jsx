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
            <div className="content-center h-screen text-center container p-8 mx-auto">
                <h3>
                    Tu carrito se encuentra vacío - Comience a comprar!
                </h3>
                <Link to={"/"}>
                    <button className='items-center bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-1 px-5 border border-orange-500 hover:border-transparent rounded'>Seguir Comprando!</button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className="container mx-auto p-8 h-screen" >
                <h2>Mi Carrito</h2>
                <hr />
                <CartList />
            </div>
        );

    }
}

export default CartView;
