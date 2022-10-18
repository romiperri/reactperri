import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import "./cartView.css";

function CartList() {
    const context = useContext(cartContext);
    const { cart, deleteItem, getItemPrice } = context;


    return (
        <div>
            <table className="cartList">
                <thead className="cartList-head">
                    <tr className="cartList-row">
                        <th>Portada</th>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Remover</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return (
                            <tr key={item.id} className="cartList-row">
                                <td>
                                    <img className='cartList-img' src={item.img} alt={item.title} />
                                </td>
                                <td>{item.title}</td>
                                <td>$ {item.price}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button onClick={() => deleteItem(item.id)}>X</button>
                                </td>
                                <th>$ {item.price * item.count}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h3>El total de tu compra es de $ {getItemPrice()}</h3>
        </div>
    )
}

export default CartList