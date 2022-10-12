import React from 'react';
import { cartContext } from '../../context/cartContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";


function CartView() {
    const context = useContext(cartContext);
    const { cart, isInCart, deleteItem } = context;
    const  idCart = parseInt(cart.map((item) => item.id));

    if (isInCart(idCart) === false) {
        return (
            <div>

                <h3>
                    Tu carrito esta vacio... Quieres seguir comprando?
                </h3>
                <Link to={"/cart"}>
                    Seguir Comprando!
                </Link>
            </div>
        );
    } else {
        return cart.map((item) => (
            <div>
                <img src={item.img} alt="" />

                <strong>{item.title}</strong>
                <div>
                    <br />
                    Precio:{item.price} $ Cantidad: {item.count}
                </div>

                <br />

                <button onClick={() => deleteItem(item.id)} aria-label="delete">
                    <button />
                </button>


            </div>
        ));
    }
}

export default CartView;