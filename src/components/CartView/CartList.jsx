import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/solid'
import "./cartView.css";

function CartList() {
    const context = useContext(cartContext);
    const { cart, deleteItem, getItemPrice, emptyCart } = context;


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
                                    <button onClick={() => deleteItem(item.id)}><TrashIcon className='h-6 w-6' /></button>
                                </td>
                                <th>$ {item.price * item.count}</th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h3 className='font-sans text-base flex justify-center'>El total de tu compra es de: $ {getItemPrice()}</h3>
            <div className='flex justify-center p-4 gap-3'>
                <Link to="/checkout">
                    <button className='bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-1 px-5 border border-orange-500 hover:border-transparent rounded'>Check-out</button>
                </Link>
                <div>  <button className='bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-1 px-5 border border-orange-500 hover:border-transparent rounded' onClick={emptyCart}>Vaciar carrito</button>
                </div>
            </div>

        </div>
    )
}

export default CartList