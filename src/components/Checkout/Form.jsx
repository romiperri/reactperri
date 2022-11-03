import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link, useParams } from "react-router-dom";


function Form() {
    const context = useContext(cartContext);
    const { emptyCart } = context;
    const { orderid } = useParams();

    return (
        <div className="h-screen text-center container p-8 ">
            <div>
                <h2>Muchas gracias por tu compra! Tu numero de orden es: <span>{orderid}</span></h2>
                <p>Nos pondremos en contacto a la brevedad cuando tu pedido esté listo para despachar</p>
            </div>
            <Link to="/">
                <button
                    onClick={emptyCart}
                    className="items-center bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-1 px-5 border border-orange-500 hover:border-transparent rounded">Aceptar</button>
            </Link>
        </div>


    )
}

export default Form;