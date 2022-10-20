import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./Checkout.css";


function Form() {
    const context = useContext(cartContext);
    const { emptyCart } = context;

    return (
        <div>
            <div>
                <h1>Muchas gracias por tu compra!</h1>
                <p>Nos pondremos en contacto a la brevedad cuando tu pedido esté listo para despachar</p>
            </div>
            <Link to="/">
                <button
                    onClick={emptyCart}
                    className="btn-checkout">Aceptar</button>
            </Link>
        </div>


    )
}

export default Form;